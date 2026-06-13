param(
  [ValidateSet("start", "stop", "restart", "status")]
  [string]$Action = "start",
  [int]$Port = 3005,
  [string]$HealthPath = "/"
)

$ErrorActionPreference = "Stop"
$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$PidFile = Join-Path $ProjectRoot ".local-server.pid"
$LogFile = Join-Path $ProjectRoot ".local-server.log"
$ErrorLogFile = Join-Path $ProjectRoot ".local-server.err.log"

function Get-PortProcess {
  $line = netstat -ano | Select-String ":$Port\s+.*LISTENING" | Select-Object -First 1
  if (-not $line) { return $null }
  $parts = ($line.ToString() -split "\s+") | Where-Object { $_ }
  return [int]$parts[-1]
}

function Stop-LocalServer {
  $pidFromFile = $null
  if (Test-Path $PidFile) {
    $raw = Get-Content -LiteralPath $PidFile -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($raw -match "^\d+$") { $pidFromFile = [int]$raw }
  }

  $pids = @()
  if ($pidFromFile) { $pids += $pidFromFile }
  $portPid = Get-PortProcess
  if ($portPid) { $pids += $portPid }

  foreach ($processId in ($pids | Select-Object -Unique)) {
    $process = Get-CimInstance Win32_Process -Filter "ProcessId=$processId" -ErrorAction SilentlyContinue
    if ($process -and $process.CommandLine -like "*$ProjectRoot*") {
      Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
    }
  }

  Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue
}

function Start-LocalServer {
  $existingPid = Get-PortProcess
  if ($existingPid) {
    $process = Get-CimInstance Win32_Process -Filter "ProcessId=$existingPid" -ErrorAction SilentlyContinue
    if ($process -and $process.CommandLine -like "*$ProjectRoot*") {
      Write-Output "Already running: http://localhost:$Port/ (PID $existingPid)"
      return
    }
    throw "Port $Port is already used by PID $existingPid. Inspect it before stopping anything."
  }

  $node = (Get-Command node.exe -ErrorAction Stop).Source
  $server = Join-Path $ProjectRoot "server.mjs"
  $process = Start-Process -FilePath $node -ArgumentList "`"$server`"" -WorkingDirectory $ProjectRoot -RedirectStandardOutput $LogFile -RedirectStandardError $ErrorLogFile -WindowStyle Hidden -PassThru
  Set-Content -LiteralPath $PidFile -Value $process.Id -Encoding ASCII
  Start-Sleep -Seconds 1

  $url = "http://localhost:$Port$HealthPath"
  try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 5
    Write-Output "Started: $url ($($response.StatusCode), PID $($process.Id))"
  } catch {
    Write-Output "Started PID $($process.Id), but health check failed: $($_.Exception.Message)"
    Write-Output "Log: $LogFile"
    Write-Output "Error log: $ErrorLogFile"
  }
}

function Show-Status {
  $pidOnPort = Get-PortProcess
  if (-not $pidOnPort) {
    Write-Output "Stopped: nothing listening on port $Port"
    return
  }

  $process = Get-CimInstance Win32_Process -Filter "ProcessId=$pidOnPort" -ErrorAction SilentlyContinue
  Write-Output "Listening: http://localhost:$Port/ (PID $pidOnPort)"
  if ($process) { Write-Output $process.CommandLine }
}

switch ($Action) {
  "start" { Start-LocalServer }
  "stop" { Stop-LocalServer; Show-Status }
  "restart" { Stop-LocalServer; Start-Sleep -Seconds 1; Start-LocalServer }
  "status" { Show-Status }
}

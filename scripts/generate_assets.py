from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import math
import random

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
ASSETS.mkdir(exist_ok=True)


def rounded_rect(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def draw_cat(draw, cx, cy, scale, body="#f7a35d", face="#ffd8a8", stripe="#8d5a3b", eye="#243438"):
    r = 58 * scale
    ear = 30 * scale
    pts_l = [(cx - r * 0.64, cy - r * 0.38), (cx - r * 0.34, cy - r * 1.05), (cx - r * 0.06, cy - r * 0.42)]
    pts_r = [(cx + r * 0.64, cy - r * 0.38), (cx + r * 0.34, cy - r * 1.05), (cx + r * 0.06, cy - r * 0.42)]
    draw.polygon(pts_l, fill=body)
    draw.polygon(pts_r, fill=body)
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=body)
    draw.ellipse((cx - r * 0.62, cy - r * 0.35, cx + r * 0.62, cy + r * 0.58), fill=face)
    for off in [-0.38, 0, 0.38]:
        draw.arc((cx + (off - 0.18) * r, cy - 0.88 * r, cx + (off + 0.18) * r, cy - 0.42 * r), 200, 340, fill=stripe, width=max(1, int(5 * scale)))
    draw.ellipse((cx - r * 0.42, cy - r * 0.12, cx - r * 0.22, cy + r * 0.08), fill=eye)
    draw.ellipse((cx + r * 0.22, cy - r * 0.12, cx + r * 0.42, cy + r * 0.08), fill=eye)
    draw.polygon([(cx - r * 0.08, cy + r * 0.16), (cx + r * 0.08, cy + r * 0.16), (cx, cy + r * 0.28)], fill="#db6c73")
    draw.arc((cx - r * 0.20, cy + r * 0.18, cx, cy + r * 0.44), 10, 150, fill=eye, width=max(1, int(3 * scale)))
    draw.arc((cx, cy + r * 0.18, cx + r * 0.20, cy + r * 0.44), 30, 170, fill=eye, width=max(1, int(3 * scale)))
    for side in [-1, 1]:
        for yoff in [0.16, 0.27]:
            draw.line((cx + side * r * 0.18, cy + r * yoff, cx + side * r * 0.74, cy + r * (yoff - 0.10)), fill="#88624d", width=max(1, int(3 * scale)))


def token():
    img = Image.new("RGBA", (256, 256), (0, 0, 0, 0))
    shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.ellipse((38, 52, 218, 230), fill=(72, 38, 14, 65))
    shadow = shadow.filter(ImageFilter.GaussianBlur(12))
    img.alpha_composite(shadow)
    draw = ImageDraw.Draw(img)
    draw_cat(draw, 128, 130, 1.05)
    img.save(ASSETS / "cat-token.png")


def medallion():
    img = Image.new("RGBA", (256, 256), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    rounded_rect(draw, (16, 16, 240, 240), 58, "#fff3cf", "#243438", 8)
    for i, color in enumerate(["#e86f51", "#157f83", "#e7b84d", "#d9c8f7"]):
        x = 36 + i * 46
        rounded_rect(draw, (x, 38, x + 38, 78), 12, color)
    draw_cat(draw, 128, 148, 0.82, body="#f4a261", face="#ffe1bc")
    img.save(ASSETS / "cat-medallion.png")


def background():
    w, h = 1800, 1200
    img = Image.new("RGB", (w, h), "#f7ead4")
    draw = ImageDraw.Draw(img)
    for y in range(h):
        mix = y / h
        r = int(250 * (1 - mix) + 212 * mix)
        g = int(235 * (1 - mix) + 235 * mix)
        b = int(211 * (1 - mix) + 225 * mix)
        draw.line((0, y, w, y), fill=(r, g, b))
    random.seed(10)
    for _ in range(46):
        x = random.randint(0, w)
        y = random.randint(0, h)
        size = random.randint(55, 150)
        color = random.choice(["#ffd6b8", "#c9e8df", "#f7c9d4", "#f7e39a", "#c7d9ff"])
        rounded_rect(draw, (x, y, x + size, y + size), 22, color)
    draw.ellipse((1220, 640, 1630, 1050), fill="#eed3a6")
    draw_cat(draw, 1420, 800, 1.7, body="#d98958", face="#ffd9ab")
    draw.ellipse((100, 740, 620, 1050), fill="#e8c190")
    draw_cat(draw, 360, 850, 1.4, body="#8fc0b8", face="#e7fff7", stripe="#4b7b76")
    img = img.filter(ImageFilter.GaussianBlur(0.2))
    img.save(ASSETS / "cozy-game-bg.png")


def victory():
    img = Image.new("RGBA", (820, 420), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    rounded_rect(draw, (30, 160, 790, 375), 70, "#f7e0b5")
    for cx, color in [(220, "#f4a261"), (410, "#8fc0b8"), (600, "#d991a3")]:
        draw_cat(draw, cx, 205, 1.22, body=color, face="#ffe0ba", stripe="#7c5845")
    for x in range(100, 750, 78):
        draw.ellipse((x, 82 + (x % 3) * 18, x + 18, 100 + (x % 3) * 18), fill="#e7b84d")
    img.save(ASSETS / "victory-cats.png")


if __name__ == "__main__":
    token()
    medallion()
    background()
    victory()
    print("Generated assets in", ASSETS)

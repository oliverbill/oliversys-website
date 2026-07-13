from pathlib import Path

from PIL import Image, ImageChops


SOURCE = Path("/home/ubuntu/webdev-static-assets/brightember-logo-v6-evidence-aperture.png")
ASSET_DIR = Path("/home/ubuntu/webdev-static-assets")
PUBLIC_DIR = Path("/home/ubuntu/brightember/client/public")


def visible_bounds(image: Image.Image, threshold: int = 245) -> tuple[int, int, int, int]:
    rgb = image.convert("RGB")
    white = Image.new("RGB", rgb.size, (255, 255, 255))
    difference = ImageChops.difference(rgb, white).convert("L")
    mask = difference.point(lambda value: 255 if value > (255 - threshold) else 0)
    bounds = mask.getbbox()
    if bounds is None:
        raise ValueError("The source image does not contain a visible mark.")
    return bounds


def square_logo(size: int, padding_ratio: float) -> Image.Image:
    source = Image.open(SOURCE).convert("RGB")
    crop = source.crop(visible_bounds(source))
    content_size = round(size * (1 - 2 * padding_ratio))
    crop.thumbnail((content_size, content_size), Image.Resampling.LANCZOS)

    canvas = Image.new("RGB", (size, size), (255, 255, 255))
    position = ((size - crop.width) // 2, (size - crop.height) // 2)
    canvas.paste(crop, position)
    return canvas


def main() -> None:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

    web = square_logo(512, 0.10)
    web.save(ASSET_DIR / "brightember-evidence-aperture-web.png", optimize=True)

    linkedin = square_logo(400, 0.09)
    linkedin.save(ASSET_DIR / "brightember-evidence-aperture-linkedin-profile.png", optimize=True)

    favicon = square_logo(256, 0.08)
    favicon.save(
        PUBLIC_DIR / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
    )


if __name__ == "__main__":
    main()

import pytesseract
from PIL import Image, ImageEnhance, ImageFilter
import re

# Add Tesseract path for Windows if needed
# pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


def extract_text_from_image(path):
    img = Image.open(path)

    # Preprocess
    img = img.convert("L")                       # grayscale
    img = img.filter(ImageFilter.SHARPEN)
    img = img.filter(ImageFilter.MedianFilter())
    img = img.point(lambda x: 0 if x < 140 else 255)

    text = pytesseract.image_to_string(img)
    return text


# Strong regex patterns
PATTERNS = {
    "Cholesterol": r"cholesterol[:\s]*([0-9]{2,3})",
    "Glucose": r"glucose[:\s]*([0-9]{2,3})",
    "RestingBP": r"bp[:\s]*([0-9]{2,3})",
    "DiastolicBP": r"bp[:\s]*[0-9]{2,3}[/\-]([0-9]{2,3})"
}


def extract_lab_values(text):
    extracted = {}
    missing = [
        "Age","Sex","Height","Weight",
        "RestingBP","DiastolicBP","Cholesterol",
        "Glucose","Smoking","AlcoholIntake",
        "PhysicalActivity","BMI"
    ]

    for key, pattern in PATTERNS.items():
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            extracted[key] = int(match.group(1))

    # Remove extracted from missing
    for key in extracted.keys():
        if key in missing:
            missing.remove(key)

    return extracted, missing

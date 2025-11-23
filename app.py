from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from predict import predict_patient, predict_doctor
from ocr_utils import extract_text_from_image, extract_lab_values
from preprocess_utils import convert_input_types, calculate_bmi_if_missing

app = Flask(__name__)
CORS(app)

# ----------------------------
# UPLOAD FOLDER CHECK
# ----------------------------
UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# =========================================================
# 1. OCR UPLOAD ROUTE
# =========================================================
@app.route("/api/ocr/upload", methods=["POST"])
def ocr_upload():
    file = request.files.get("file")
    if not file:
        return jsonify({"error": "No file provided"}), 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    # OCR
    text = extract_text_from_image(file_path)

    # Extract medical values using regex
    extracted, missing = extract_lab_values(text)

    return jsonify({
        "extracted": extracted,
        "missing_fields": missing,
        "raw_text": text
    })


# =========================================================
# 2. PATIENT PREDICTION
# =========================================================
@app.route("/api/predict/patient", methods=["POST"])
def patient_predict():
    data = request.json

    # Ensure types are correct
    input_data = convert_input_types(data)

    # Auto-calc BMI if not provided
    input_data = calculate_bmi_if_missing(input_data)

    # RUN ML MODEL
    result = predict_patient(input_data)

    return jsonify(result)


# =========================================================
# 3. DOCTOR PREDICTION (SHAP RAW)
# =========================================================
@app.route("/api/predict/doctor", methods=["POST"])
def doctor_predict():
    data = request.json

    input_data = convert_input_types(data)
    input_data = calculate_bmi_if_missing(input_data)

    result = predict_doctor(input_data)

    return jsonify(result)


# =========================================================
# 4. SIMPLE TEST ROUTE
# =========================================================
@app.route("/api/patients", methods=["GET"])
def test():
    return jsonify([])


# =========================================================
# RUN FLASK
# =========================================================
if __name__ == "__main__":
    app.run(debug=True)

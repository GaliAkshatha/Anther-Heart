Anther Heart
Heart Disease Prediction System (Mini Project – 2025)
<br>
Anther Heart is a machine-learning based web application that predicts the risk of heart disease using patient health parameters.
The system includes OCR-based report extraction, manual form prediction, SHAP explainability, and dashboards for patients, doctors, and hospitals.

This project uses a Flask backend for ML prediction and a React frontend for the user interface.

Project Features
Patient Side

Upload medical report (OCR extracts values automatically)

Missing values are shown in a fallback form to fill manually

ML model predicts:

Risk level (Low / Medium / High)

Probability percentage

Friendly explanation sentences based on SHAP

Recommendation cards based on the risk level

Floating chatbot assistant (Chopper)

Doctor Side

Raw SHAP values for all features

Feature impact list for each prediction

Hospital Side

Basic placeholder dashboard for future development

Machine Learning

XGBoost model trained on combined dataset

StandardScaler used for normalization

SMOTE used for handling imbalance

BMI auto-calculated

Feature importance used for explanations

Tech Stack
Frontend

React (Vite)

Tailwind CSS

JavaScript

Axios

Backend

Flask

Python

SHAP

Tesseract OCR

Joblib

CORS

Project Structure
anther-heart/
│
├── backend/
│   ├── app.py
│   ├── predict.py
│   ├── ocr_utils.py
│   ├── preprocess_utils.py
│   └── model/
│        ├── heart_model.pkl
│        ├── scaler.pkl
│        └── feature_columns.pkl
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   └── index.html
│
└── README.md

How to Run the Project

You need two terminals:
one for the backend and one for the frontend.

1. Backend Setup (Flask)

Go to backend folder:

cd backend


Create virtual environment:

python -m venv venv


Activate:

Windows:

venv\Scripts\activate


Install required packages:

pip install -r requirements.txt


Start backend:

python app.py


Backend will run at:

http://127.0.0.1:5000

2. Frontend Setup (React)

Open a new terminal:

cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173

Sample Input for Testing Prediction

You can use the following values in the manual form:

Age: 54
Sex: 1
Height: 165
Weight: 78
RestingBP: 150
DiastolicBP: 95
Cholesterol: 240
Glucose: 130
Smoking: 0
AlcoholIntake: 1
PhysicalActivity: 2


Expected output:
High risk, probability around 80–90%, friendly explanation sentences, recommendations.

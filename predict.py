import joblib
import pandas as pd
import shap
import numpy as np
import os

# ----------------------------
# Load model, scaler, features
# ----------------------------
MODEL_DIR = os.path.join(os.path.dirname(__file__), "model")

model = joblib.load(os.path.join(MODEL_DIR, "heart_model.pkl"))
scaler = joblib.load(os.path.join(MODEL_DIR, "scaler.pkl"))
feature_cols = joblib.load(os.path.join(MODEL_DIR, "feature_columns.pkl"))

# Create a SHAP explainer (TreeExplainer is suitable for XGBoost)
explainer = shap.TreeExplainer(model)


# ------------------------------------------------------
# FRIENDLY, FEATURE-AWARE SENTENCE GENERATOR
# ------------------------------------------------------
def friendly_sentence(feature, value, impact):
    """
    Generate a single friendly, soft, patient-safe explanation sentence
    for a particular feature, using the feature name and its value.
    """
    f = feature.lower()
    v = value

    # Cholesterol
    if "cholesterol" in f:
        return (
            f"Your cholesterol level ({v}) is a little higher than usual, "
            f"so your heart might be working a bit extra today. Nothing scary — "
            f"just something we can gently improve with small food changes."
        )

    # Glucose / Blood sugar
    if "glucose" in f or "sugar" in f:
        return (
            f"Your glucose level ({v}) seems slightly elevated. This can make your "
            f"heart work a bit harder, but it’s very manageable with mindful eating."
        )

    # BMI
    if "bmi" in f:
        return (
            f"Your BMI ({v}) is a bit on the higher side, which can gently push your "
            f"heart risk up. Even small daily routine changes help a lot!"
        )

    # Blood pressure (resting / diastolic / systolic)
    if "restingbp" in f or "diastolicbp" in f or "bp" in f or "blood pressure" in f:
        return (
            f"Your blood pressure reading ({v}) is a little higher than ideal. "
            f"Keeping an eye on it really supports your heart’s long-term comfort."
        )

    # Weight
    if "weight" in f:
        return (
            f"Your weight ({v}) is contributing a bit to your heart's workload. "
            f"Light activity or small changes can make a very positive difference."
        )

    # Age
    if "age" in f:
        return (
            f"Your age ({v}) naturally influences heart risk a bit — completely normal. "
            f"Healthy habits keep your heart strong at every age."
        )

    # Smoking
    if "smok" in f:
        return (
            f"Smoking increases stress on the heart. Reducing it even a little can help your heart feel calmer."
        )

    # Alcohol intake
    if "alcohol" in f:
        return (
            f"Alcohol intake can gently affect heart rhythm. Cutting down a bit helps your heart stay balanced."
        )

    # Physical activity
    if "physical" in f or "activity" in f:
        try:
            # if numeric, give tailored message
            if float(v) <= 1:
                return (
                    f"A bit more physical activity could really help your heart feel lighter and stronger — even a short daily walk works wonders."
                )
            else:
                return (
                    f"Your activity level is supporting your heart — keep up the great work!"
                )
        except Exception:
            return "Keeping an active routine gently supports heart health."

    # Height (informational)
    if "height" in f:
        return f"Your height ({v}) is used to calculate BMI — nothing to worry about here."

    # Default fallback
    return (
        f"Your {feature} value ({v}) had a small influence on the prediction — "
        f"nothing concerning, and easily manageable with simple steps."
    )


# ------------------------------------------------------
# PREDICTION FOR PATIENT (FRIENDLY)
# ------------------------------------------------------
def predict_patient(input_data):
    """
    input_data: dict mapping feature names to values (must include Height and Weight or BMI)
    returns: dict with prediction, probability (0-100), risk_level, and explanations (3 friendly sentences)
    """

    # Build DataFrame and ensure BMI present
    df = pd.DataFrame([input_data])

    # calculate BMI if not provided or empty/zero
    if ("BMI" not in df.columns) or pd.isna(df.loc[0, "BMI"]) or df.loc[0, "BMI"] in [None, "", 0]:
        try:
            df["BMI"] = df["Weight"] / ((df["Height"] / 100) ** 2)
        except Exception:
            # if calculation fails, put NaN (scaler/model may error if features mismatch)
            df["BMI"] = np.nan

    # Reorder / select features used by model
    # feature_cols should be a list of strings matching model training columns
    df = df[feature_cols]

    # Scale input
    X_scaled = scaler.transform(df)

    # Prediction and probability
    pred = int(model.predict(X_scaled)[0])
    prob = float(model.predict_proba(X_scaled)[0][1]) * 100.0  # probability of positive class in percent

    # SHAP values
    # For TreeExplainer on single sample, shap_values may return array-like shaped (n_samples, n_features)
    shap_values = explainer.shap_values(X_scaled)
    # shap_values can be (1, n_features) or [array] depending on shap version; normalize
    if isinstance(shap_values, list) and len(shap_values) > 0:
        shap_arr = np.array(shap_values[0]).flatten()
    else:
        shap_arr = np.array(shap_values).flatten()

    # Pick top 3 features by absolute impact
    top_idx = np.argsort(np.abs(shap_arr))[::-1][:3]

    explanations = []
    for idx in top_idx:
        feat = feature_cols[idx]
        # Use raw df value for readability
        try:
            val = df.iloc[0][feat]
            if pd.isna(val):
                val = ""
            else:
                # round numeric values nicely
                try:
                    val = round(float(val), 2)
                except Exception:
                    pass
        except Exception:
            val = ""
        impact = float(shap_arr[idx])
        explanations.append(friendly_sentence(feat, val, impact))

    # Determine risk level label
    if prob < 40:
        level = "Low"
    elif prob < 70:
        level = "Medium"
    else:
        level = "High"

    return {
        "prediction": pred,
        "probability": round(prob, 2),
        "risk_level": level,
        "explanations": explanations
    }


# ------------------------------------------------------
# PREDICTION FOR DOCTOR (RAW SHAP DETAILS)
# ------------------------------------------------------
def predict_doctor(input_data):
    """
    Returns a list of feature, value, and raw SHAP impact suitable for a doctor
    """

    df = pd.DataFrame([input_data])

    if ("BMI" not in df.columns) or pd.isna(df.loc[0, "BMI"]) or df.loc[0, "BMI"] in [None, "", 0]:
        try:
            df["BMI"] = df["Weight"] / ((df["Height"] / 100) ** 2)
        except Exception:
            df["BMI"] = np.nan

    df = df[feature_cols]
    X_scaled = scaler.transform(df)

    shap_values = explainer.shap_values(X_scaled)
    if isinstance(shap_values, list) and len(shap_values) > 0:
        shap_arr = np.array(shap_values[0]).flatten()
    else:
        shap_arr = np.array(shap_values).flatten()

    response = []
    for i, f in enumerate(feature_cols):
        try:
            value = float(df.iloc[0][f])
        except Exception:
            value = df.iloc[0][f]
        response.append({
            "feature": f,
            "value": value,
            "impact": float(shap_arr[i])
        })

    return response

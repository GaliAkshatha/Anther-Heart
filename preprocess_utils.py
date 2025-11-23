def convert_input_types(data):
    clean = {}
    for k, v in data.items():
        try:
            clean[k] = float(v)
        except:
            clean[k] = v
    return clean


def calculate_bmi_if_missing(data):
    if ("BMI" not in data or data["BMI"] in ["", None, 0]) and \
       ("Height" in data and "Weight" in data):
        h = float(data["Height"])
        w = float(data["Weight"])
        data["BMI"] = w / ((h / 100) ** 2)

    return data

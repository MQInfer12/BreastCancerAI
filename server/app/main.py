from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from keras.models import load_model
from keras.preprocessing.image import img_to_array
from PIL import Image
import numpy as np
import io

app = Flask(__name__)
CORS(app)

model = load_model('models/cancernet_model_12.h5')
def prepare_image(image, target):
  if image.mode != "RGB":
    image = image.convert("RGB")

  image = image.resize(target)
  image = img_to_array(image)
  image = np.expand_dims(image, axis=0)
  image = image / 255.0

  return image

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/analizar', methods=["POST"])
def analizar():
  if 'imagen' not in request.files:
    return jsonify({"error": "No image provided"}), 400

  file = request.files['imagen']

  if file.filename == '':
    return jsonify({"error": "No selected file"}), 400

  try:
    image = Image.open(io.BytesIO(file.read()))
    processed_image = prepare_image(image, target=(48, 48))

    pred = model.predict(processed_image)
    pred_class = np.argmax(pred, axis=1)[0]
    pred_confidence = pred[0][pred_class] * 100

    label = "Maligno" if pred_class == 1 else "Benigno"

    return jsonify({
      "prediccion": label,
      "porcentaje": pred_confidence
    })
  except Exception as e:
    return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# FLASK
# CARGAR EL MODELO Y PODER CONSUMIRLO EN UN ENDPOINT POST

@app.route('/')
def index():
  return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, jsonify
from flask_cors import CORS
import json
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()

def load_and_process_pists():
    # Read the JSON file
    with open('pists.json', 'r') as f:
        data = json.load(f)
    
    # Add additional fields with default or calculated values
    for item in data:
        item['speedScore'] = 5  # Default or calculated value for speedScore
        item['utilizationScore'] = 5  # Default or calculated value for utilizationScore

    return data



@app.route('/')
def home():
    return jsonify(message="Hello, World! This is a CORS-enabled Flask app.")

@app.route('/pists')
def pists():
    data = load_and_process_pists()
    return jsonify(data)


@app.route('/stats/<card_id>', methods=['GET'])
def stats(card_id):
    data = load_and_process_pists()
    return jsonify(data)




if __name__ == '__main__':
    app.run(debug=True)

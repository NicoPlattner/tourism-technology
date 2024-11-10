from flask import Flask, jsonify
import csv
from datetime import datetime
from collections import defaultdict
from flask_cors import CORS
import json
import os
from dotenv import load_dotenv
import random

app = Flask(__name__)
CORS(app)

load_dotenv()

def load_and_process_pists():
    # Read the JSON file
    with open('pists.json', 'r') as f:
        data = json.load(f)
    
    # Add additional fields with random values
    for item in data:
        item['speedScore'] = random.randint(1, 10)
        item['utilizationScore'] = random.randint(1, 10)

    return data



@app.route('/')
def home():
    return jsonify(message="Hello, World! This is a CORS-enabled Flask app.")

@app.route('/pists')
def pists():
    data = load_and_process_pists()
    return jsonify(data)


# Define a function to read the CSV and process the data
def read_csv(file_path):
    data = []
    with open(file_path, mode='r', encoding='ISO-8859-1') as file:
        reader = csv.DictReader(file, delimiter=';')
        
        # Print the headers to check for discrepancies
        print("Headers:", reader.fieldnames)  # This will print the column names
        
        for row in reader:
            data.append(row)
    return data

# Pre-read the CSV file (assuming it's stored as "data.csv")
# Replace the path to your actual file location.

# Helper function to calculate statistics for a given card ID
def get_ski_pass_stats(card_id):

    ski_data = read_csv(os.getenv('FILEPATH'))

    print(ski_data[0:10])

    total_lifts = []
    total_km = 0
    total_minutes_skied = 0
    total_minutes_lifted = 0
    first_time = None
    last_time = None

    for row in ski_data:
        if row['KartenNr'] == card_id:
            # Calculate time difference for total minutes skied
            if first_time is None:
                first_time = datetime.strptime(row['SteckDatumZeit'], "%Y-%m-%d %H:%M:%S.%f")
            last_time = datetime.strptime(row['SteckDatumZeit'], "%Y-%m-%d %H:%M:%S.%f")

            
            # Assuming 'Kartentyp' describes the lift name
            total_lifts.append(row['Lift'])

            # Example calculation for kilometers and time
            # Assuming 'averageSpeed' is a fixed value or can be computed later.
            # We'll accumulate dummy values for now
            total_km += 1.0  # Placeholder for actual kilometer calculation logic
            total_minutes_skied += 5  # Placeholder for actual ski time logic
            total_minutes_lifted += 1  # Placeholder for actual lift time logic

    if first_time and last_time:
        # Calculate total minutes skied based on first and last time
        total_minutes_skied = (last_time - first_time).total_seconds() / 60

    # Calculate average speed as a dummy value for now (this could be based on a real calculation)
    average_speed = 20  # Placeholder value for average speed

    return {
        'skiPassNumber': card_id,
        'averageSpeed': average_speed,
        'liftsTaken': total_lifts,  # Remove duplicate lifts
        'kilometersSkied': total_km,
        'minutesSkied': total_minutes_skied,
        'minutesLifted': total_minutes_lifted
    }

# Define the Flask route
@app.route('/stats/<card_id>', methods=['GET'])
def stats(card_id):
    # Fetch the stats for the given card ID
    stats = get_ski_pass_stats(card_id)
    
    # If no data is found for the given card_id, return a 404 error
    if not stats['liftsTaken']:
        return jsonify({'error': 'Ski pass not found'}), 404

    return jsonify(stats)




if __name__ == '__main__':
    app.run(debug=True)

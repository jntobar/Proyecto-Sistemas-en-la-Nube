import base64
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

# Reemplaza 'YOUR_API_KEY' con tu clave de API de VirusTotal
API_KEY = '3e6e40b997e16c7a9e07a4df815485a07b63a30c7fcf5de515d51cd79d15506a'
SUBMIT_URL = 'https://www.virustotal.com/api/v3/urls'
REPORT_URL = 'https://www.virustotal.com/api/v3/analyses/'

@app.route('/analyze', methods=['POST'])
def analyze_url():
    url = request.json.get('url')
    print(f"Received URL: {url}")  # Debug: Print received URL

    if not url:
        print("Error: No URL provided")
        return jsonify({'error': 'No URL provided'}), 400

    headers = {
        'x-apikey': API_KEY
    }
    print(f"Request Headers: {headers}")  # Debug: Print request headers

    # Encode the URL to base64
    encoded_url = base64.urlsafe_b64encode(url.encode()).decode().strip('=')
    print(f"Encoded URL: {encoded_url}")  # Debug: Print encoded URL

    # Step 1: Submit the URL to VirusTotal
    try:
        submit_response = requests.post(SUBMIT_URL, headers=headers, data={'url': url})
        print(f"Submit Response Status Code: {submit_response.status_code}")  # Debug: Print status code
        print(f"Submit Response Body: {submit_response.text}")  # Debug: Print response body

        if submit_response.status_code == 200:
            # Get the analysis ID from the response
            response_json = submit_response.json()
            print(f"Submit Response JSON: {response_json}")  # Debug: Print the JSON response from submission
            analysis_id = response_json.get('data', {}).get('id')
            print(f"Analysis ID: {analysis_id}")  # Debug: Print analysis ID

            if analysis_id:
                # Step 2: Get the analysis report
                report_response = requests.get(f'{REPORT_URL}{analysis_id}', headers=headers)
                print(f"Report Response Status Code: {report_response.status_code}")  # Debug: Print status code
                print(f"Report Response Body: {report_response.text}")  # Debug: Print response body

                if report_response.status_code == 200:
                    result = report_response.json()
                    return jsonify(result)
                else:
                    print("Error: Failed to fetch result from VirusTotal")
                    return jsonify({'error': 'Failed to fetch result from VirusTotal'}), report_response.status_code
            else:
                print("Error: No analysis ID found in the response")
                return jsonify({'error': 'No analysis ID found'}), 500
        else:
            print("Error: Failed to submit URL to VirusTotal")
            return jsonify({'error': 'Failed to submit URL to VirusTotal'}), submit_response.status_code
    except requests.exceptions.RequestException as e:
        print(f"Request Exception: {e}")
        return jsonify({'error': 'An error occurred while making the request'}), 500

if __name__ == '__main__':
    app.run(debug=True)

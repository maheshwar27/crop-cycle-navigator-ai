
# Smart Crop Cycle Recommender - Integration Guide

This document explains how to connect the React frontend with the Python Flask backend.

## Backend Setup

1. Create a Flask API endpoint that accepts the form data from the frontend:

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/crop-recommendations', methods=['POST'])
def get_crop_recommendations():
    # Get data from request
    data = request.json
    
    # Load crop dataset
    df = pd.read_csv("./Crop_Data.csv")
    csv_content = df.to_string(index=False)
    
    # Build the prompt for the AI model
    prompt = f"""
    You are an agricultural optimization expert.
    
    Your task is to suggest the best 3 crop cycles for a given field based on soil nutrients, budget, and duration. Use the crop dataset (CSV_CONTENT) and current user inputs (USER_INPUT).
    
    # ... (rest of your prompt from the Python code)
    
    CSV_CONTENT:  
    {csv_content}
    
    USER_INPUT:  
    {data}
    
    # ... (rest of your prompt)
    """
    
    # Use the AI model to generate recommendations
    api_key = "YOUR_API_KEY"  # Replace with your actual API key or use environment variables
    model_name = "gemini-1.5-flash"
    
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel(model_name)
    response = model.generate_content(prompt)
    
    # Process the AI response to extract the structured data
    # This part will depend on how you want to parse the AI's response
    # For now, we'll use a mock response
    
    # Return the recommendations as JSON
    return jsonify({
        "cycles": [
            {
                "id": 1,
                "sequence": ["Rice (Basmati)", "Pulses", "Leafy Vegetables"],
                "durations": [150, 120, 60],
                "totalTime": 330,
                "investmentUsed": 75000,
                "budgetRatio": 1.5,
                "totalYieldValue": 85000,
                "totalYieldKg": 16328,
                "updatedNutrients": {
                    "nitrogen": 162.51,
                    "phosphorous": 3.05,
                    "potassium": 99.51,
                },
                "reasoning": "This cycle utilizes the high initial nitrogen and potassium for rice..."
            },
            # ... other cycles
        ],
        "totalBudget": data["investment_budget"]
    })

if __name__ == '__main__':
    app.run(debug=True)
```

2. Install the required packages:
```
pip install flask flask-cors google-generativeai pandas
```

3. Run the Flask application:
```
python app.py
```

## Frontend Integration

1. The React frontend is already configured to make API calls to the `/api/crop-recommendations` endpoint.

2. Update the API URL in `src/services/cropRecommendationService.ts` to match your backend server URL:
```typescript
// If your Flask app is running on a different port or host
const apiUrl = "http://localhost:5000/api/crop-recommendations";
```

3. Uncomment the actual API call code and remove the mock data function once your backend is ready.

## CORS Configuration

Make sure your Flask backend has CORS enabled to accept requests from your frontend domain. The example above includes CORS configuration using flask-cors.

## Data Processing

The frontend expects data in a specific format. You may need to adjust how you process the AI's response to match this format. The key structure is:

```json
{
  "cycles": [
    {
      "id": 1,
      "sequence": ["Crop1", "Crop2", "Crop3"],
      "durations": [days1, days2, days3],
      "totalTime": totalDays,
      "investmentUsed": totalInvestment,
      "budgetRatio": investmentUsed/totalBudget,
      "totalYieldValue": totalValue,
      "totalYieldKg": totalWeight,
      "updatedNutrients": {
        "nitrogen": value,
        "phosphorous": value,
        "potassium": value
      },
      "reasoning": "Explanation text"
    },
    // ...more cycles
  ],
  "totalBudget": budgetValue
}
```

## Security Considerations

1. Don't include API keys directly in your code. Use environment variables instead.
2. Validate and sanitize all input data on the backend.
3. Implement rate limiting and other security measures as needed.

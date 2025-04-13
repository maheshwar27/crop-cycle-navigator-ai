
# Smart Crop Cycle Recommender

A web-based application that provides AI-powered crop cycle recommendations based on soil conditions.

## Project Structure

```
project/
├── static/             # Static files (CSS, JS, images)
│   ├── styles.css      # Main stylesheet
│   └── script.js       # Main JavaScript file
├── templates/          # HTML templates
│   ├── index.html      # Home page
│   ├── about.html      # About page
│   └── contact.html    # Contact page
├── app.py              # Flask application
├── models.py           # AI model integration
└── requirements.txt    # Python dependencies
```

## Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Configure Flask App

Create a file named `app.py` with the following code:

```python
from flask import Flask, render_template, request, jsonify
from models import generate_crop_recommendations

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/api/crop-recommendations', methods=['POST'])
def get_recommendations():
    # Get form data
    data = request.json
    
    # Process data using the AI model
    try:
        recommendations = generate_crop_recommendations(data)
        return jsonify(recommendations)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
```

### 3. Create Model Integration

Create a file named `models.py` with the following code:

```python
import google.generativeai as genai

def generate_crop_recommendations(data):
    """
    Generate crop recommendations using Google's Generative AI.
    
    Args:
        data: Dictionary containing soil and investment details
        
    Returns:
        Dictionary containing recommended crop cycles
    """
    # Configure the API key
    api_key = "YOUR_API_KEY"  # Replace with your actual API key
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel("gemini-1.5-flash")
    
    # Build the prompt
    prompt = f"""
    You are an agricultural optimization expert.

    Your task is to suggest the best 3 crop cycles for a given field based on soil nutrients, budget, and duration.
    Use the current user inputs (USER_INPUT).

    USER_INPUT:  
    {data}

    Return the top 3 crop cycle options as a structured JSON with the following format:
    {{
      "cycles": [
        {{
          "id": 1,
          "sequence": ["Crop A", "Crop B", "Crop C"],
          "durations": [120, 150, 90],
          "totalTime": 360,
          "investmentUsed": 65000,
          "budgetRatio": 1.3,
          "totalYieldValue": 85000,
          "totalYieldKg": 5670,
          "updatedNutrients": {{
            "nitrogen": 170.54,
            "phosphorous": 3.35,
            "potassium": 104.42
          }},
          "reasoning": "Detailed reasoning for this crop sequence"
        }},
        // Additional 2 cycles...
      ],
      "totalBudget": USER_SPECIFIED_BUDGET
    }}
    """
    
    # Generate response
    response = model.generate_content(prompt)
    
    # Process and return the response
    # In a production app, you would parse the response text to extract the JSON
    # For simplicity, we'll return a mock response
    return {
        "cycles": [
            {
                "id": 1,
                "sequence": ["Rice (Basmati)", "Pulses", "Leafy Vegetables"],
                "durations": [150, 120, 60],
                "totalTime": 330,
                "investmentUsed": 75000,
                "budgetRatio": 1.5,
                "totalYieldValue": 90000,
                "totalYieldKg": 16328,
                "updatedNutrients": {
                    "nitrogen": 162.51,
                    "phosphorous": 3.05,
                    "potassium": 99.51
                },
                "reasoning": "This cycle utilizes the high initial nitrogen and potassium for rice. Pulses help replenish nitrogen and improve soil structure, and leafy vegetables follow with the medium nutrients left. The cycle is profitable but might slightly exceed the budget, requiring careful cost management."
            },
            {
                "id": 2,
                "sequence": ["Maize (Corn)", "Wheat", "Pulses"],
                "durations": [120, 150, 100],
                "totalTime": 370,
                "investmentUsed": 65000,
                "budgetRatio": 1.3,
                "totalYieldValue": 85000,
                "totalYieldKg": 5670,
                "updatedNutrients": {
                    "nitrogen": 170.54,
                    "phosphorous": 3.35,
                    "potassium": 104.42
                },
                "reasoning": "This cycle leverages the high nitrogen demand of maize and wheat, followed by pulses for nitrogen fixation and soil improvement. This is a balanced approach given the budget and nutrient levels."
            },
            {
                "id": 3,
                "sequence": ["Cotton", "Turmeric", "Watermelon"],
                "durations": [180, 270, 120],
                "totalTime": 570,
                "investmentUsed": 145000,
                "budgetRatio": 2.9,
                "totalYieldValue": 180000,
                "totalYieldKg": 16328,
                "updatedNutrients": {
                    "nitrogen": 150.47,
                    "phosphorous": 2.85,
                    "potassium": 92.14
                },
                "reasoning": "This cycle prioritizes high-value crops. However, the current selection significantly exceeds the time and budget constraints. Careful crop selection and potential adjustments in quantities are necessary to make this cycle feasible."
            }
        ],
        "totalBudget": float(data.get("investmentBudget", 50000))
    }
```

### 4. Project Structure for Flask

Move the HTML files to a `templates` directory and the CSS/JS files to a `static` directory:

```bash
mkdir templates static
mv index.html about.html contact.html templates/
mv styles.css script.js static/
```

### 5. Update HTML Files for Flask

Update the links in the HTML files to use Flask's `url_for`:

- Replace `href="index.html"` with `href="{{ url_for('index') }}"` 
- Replace `href="about.html"` with `href="{{ url_for('about') }}"`
- Replace `href="contact.html"` with `href="{{ url_for('contact') }}"`
- Replace `href="styles.css"` with `href="{{ url_for('static', filename='styles.css') }}"`
- Replace `src="script.js"` with `src="{{ url_for('static', filename='script.js') }}"`

### 6. Update JavaScript to Use the API

In `static/script.js`, update the form submission to use the Flask API:

```javascript
// Replace the mock data section with:

fetch('/api/crop-recommendations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formDataObj)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  displayResults(data);
  showToast('Your crop cycle recommendations are ready!', 'success');
})
.catch(error => {
  console.error('Error:', error);
  showToast('Failed to get crop recommendations. Please try again.', 'error');
})
.finally(() => {
  loadingOverlay.classList.add('hidden');
});
```

### 7. Run the Application

```bash
python app.py
```

Visit `http://127.0.0.1:5000/` in your web browser to see the application.

## Features

- Interactive form for inputting soil nutrient data and constraints
- AI-powered crop cycle recommendations
- Detailed analysis of each recommended crop cycle
- Comparison chart for easy evaluation
- Mobile-responsive design

## Requirements

- Python 3.7+
- Flask
- Google Generative AI Python SDK

## License

MIT

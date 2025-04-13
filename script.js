
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Initialize mobile menu
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('visible');
    mobileMenuButton.classList.toggle('menu-open');
  });
  
  // Initialize tabs
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.dataset.tab;
      const tabContent = document.getElementById(`tab-${tabId}`);
      const tabList = this.parentElement;
      const allTabContents = tabList.parentElement.querySelectorAll('.tab-content');
      const allTabButtons = tabList.querySelectorAll('.tab-button');
      
      allTabButtons.forEach(btn => btn.classList.remove('active'));
      allTabContents.forEach(content => content.classList.remove('active'));
      
      this.classList.add('active');
      tabContent.classList.add('active');
    });
  });
  
  // Initialize accordions
  document.addEventListener('click', function(e) {
    if (e.target.matches('.accordion-trigger') || e.target.closest('.accordion-trigger')) {
      const trigger = e.target.matches('.accordion-trigger') ? e.target : e.target.closest('.accordion-trigger');
      const content = trigger.nextElementSibling;
      
      content.classList.toggle('active');
    }
  });
  
  // Form reset button
  const resetButton = document.getElementById('resetButton');
  const cropRecommendationForm = document.getElementById('cropRecommendationForm');
  
  resetButton.addEventListener('click', function() {
    cropRecommendationForm.reset();
    showToast('All input fields have been cleared.', 'success');
  });
  
  // Form submission
  cropRecommendationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = [
      { id: 'nitrogen', label: 'Nitrogen' },
      { id: 'phosphorous', label: 'Phosphorous' },
      { id: 'potassium', label: 'Potassium' },
      { id: 'soilType', label: 'Soil Type' },
      { id: 'cultivationDuration', label: 'Cultivation Duration' },
      { id: 'investmentBudget', label: 'Investment Budget' }
    ];
    
    const missingFields = [];
    
    requiredFields.forEach(field => {
      const input = document.getElementById(field.id);
      if (!input.value.trim()) {
        missingFields.push(field.label);
      }
    });
    
    if (missingFields.length > 0) {
      showToast(`Please fill in the required fields: ${missingFields.join(', ')}`, 'error');
      return;
    }
    
    // Show loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.remove('hidden');
    
    // Collect form data
    const formData = new FormData(cropRecommendationForm);
    const formDataObj = Object.fromEntries(formData.entries());
    
    // Send request to backend
    // For demo, using setTimeout to simulate API call
    setTimeout(() => {
      // In a real application, replace with actual API call:
      /*
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
      */
      
      // Mock response data for demo purposes
      const mockData = {
        cycles: [
          {
            id: 1,
            sequence: ["Rice (Basmati)", "Pulses", "Leafy Vegetables"],
            durations: [150, 120, 60],
            totalTime: 330,
            investmentUsed: 75000,
            budgetRatio: 1.5,
            totalYieldValue: 90000,
            totalYieldKg: 16328,
            updatedNutrients: {
              nitrogen: 162.51,
              phosphorous: 3.05,
              potassium: 99.51
            },
            reasoning: "This cycle utilizes the high initial nitrogen and potassium for rice. Pulses help replenish nitrogen and improve soil structure, and leafy vegetables follow with the medium nutrients left. The cycle is profitable but might slightly exceed the budget, requiring careful cost management."
          },
          {
            id: 2,
            sequence: ["Maize (Corn)", "Wheat", "Pulses"],
            durations: [120, 150, 100],
            totalTime: 370,
            investmentUsed: 65000,
            budgetRatio: 1.3,
            totalYieldValue: 85000,
            totalYieldKg: 5670,
            updatedNutrients: {
              nitrogen: 170.54,
              phosphorous: 3.35,
              potassium: 104.42
            },
            reasoning: "This cycle leverages the high nitrogen demand of maize and wheat, followed by pulses for nitrogen fixation and soil improvement. This is a balanced approach given the budget and nutrient levels."
          },
          {
            id: 3,
            sequence: ["Cotton", "Turmeric", "Watermelon"],
            durations: [180, 270, 120],
            totalTime: 570,
            investmentUsed: 145000,
            budgetRatio: 2.9,
            totalYieldValue: 180000,
            totalYieldKg: 16328,
            updatedNutrients: {
              nitrogen: 150.47,
              phosphorous: 2.85,
              potassium: 92.14
            },
            reasoning: "This cycle prioritizes high-value crops. However, the current selection significantly exceeds the time and budget constraints. Careful crop selection and potential adjustments in quantities are necessary to make this cycle feasible."
          }
        ],
        totalBudget: 50000
      };
      
      displayResults(mockData);
      showToast('Your crop cycle recommendations are ready!', 'success');
      loadingOverlay.classList.add('hidden');
      
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('results-section');
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }, 2000);
  });
  
  // Toast notification
  function showToast(message, type = 'default') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    // Set message and type
    toastMessage.textContent = message;
    toast.className = 'toast';
    
    if (type === 'success') {
      toast.classList.add('toast-success');
    } else if (type === 'error') {
      toast.classList.add('toast-error');
    }
    
    // Show toast
    toast.classList.remove('hidden');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }
  
  // Display results
  function displayResults(data) {
    const resultsSection = document.getElementById('results-section');
    resultsSection.classList.remove('hidden');
    
    data.cycles.forEach((cycle, index) => {
      const cycleContent = document.getElementById(`cycle${index + 1}-content`);
      
      if (cycleContent) {
        let sequenceHTML = '';
        cycle.sequence.forEach((crop, i) => {
          sequenceHTML += `
            <div class="crop-badge">
              ${crop}
              <span class="crop-duration">(${cycle.durations[i]} days)</span>
            </div>
          `;
          
          if (i < cycle.sequence.length - 1) {
            sequenceHTML += '<div class="sequence-arrow">→</div>';
          }
        });
        
        cycleContent.innerHTML = `
          <div class="cycle-header">
            <h3 class="cycle-title">Crop Sequence ${index + 1}</h3>
          </div>
          
          <div class="mb-6">
            <h4 class="stats-title">Crop Sequence</h4>
            <div class="cycle-sequence">
              ${sequenceHTML}
            </div>
          </div>
          
          <div class="cycle-stats">
            <div>
              <h4 class="stats-title">Duration & Investment</h4>
              <div>
                <div class="stat-item">
                  <span class="stat-label">Total Time:</span>
                  <span class="stat-value">${cycle.totalTime} days</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Investment Used:</span>
                  <span class="stat-value">₹${cycle.investmentUsed.toLocaleString()}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Budget Usage:</span>
                  <span class="stat-value ${cycle.budgetRatio > 1 ? 'stat-negative' : 'stat-positive'}">
                    ${Math.round(cycle.budgetRatio * 100)}%
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="stats-title">Yield Statistics</h4>
              <div>
                <div class="stat-item">
                  <span class="stat-label">Total Yield Value:</span>
                  <span class="stat-value">₹${cycle.totalYieldValue.toLocaleString()}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Total Yield Weight:</span>
                  <span class="stat-value">${cycle.totalYieldKg.toLocaleString()} kg</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">ROI:</span>
                  <span class="stat-value ${cycle.totalYieldValue < cycle.investmentUsed ? 'stat-negative' : 'stat-positive'}">
                    ${Math.round((cycle.totalYieldValue / cycle.investmentUsed) * 100 - 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="accordion">
            <button class="accordion-trigger">Updated Soil Nutrient Levels</button>
            <div class="accordion-content">
              <div class="nutrients-grid">
                <div class="nutrient-box">
                  <p class="nutrient-label">Nitrogen</p>
                  <p class="nutrient-value">${cycle.updatedNutrients.nitrogen.toFixed(2)} kg/ha</p>
                </div>
                <div class="nutrient-box">
                  <p class="nutrient-label">Phosphorous</p>
                  <p class="nutrient-value">${cycle.updatedNutrients.phosphorous.toFixed(2)} kg/ha</p>
                </div>
                <div class="nutrient-box">
                  <p class="nutrient-label">Potassium</p>
                  <p class="nutrient-value">${cycle.updatedNutrients.potassium.toFixed(2)} kg/ha</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="accordion">
            <button class="accordion-trigger">Why This Sequence Was Chosen</button>
            <div class="accordion-content">
              <p>${cycle.reasoning}</p>
            </div>
          </div>
        `;
      }
    });
    
    // Create comparison chart
    const chartData = prepareChartData(data.cycles);
    createComparisonChart(chartData);
  }
  
  // Prepare chart data
  function prepareChartData(cycles) {
    return cycles.map((cycle) => ({
      name: `Cycle ${cycle.id}`,
      profit: cycle.totalYieldValue - cycle.investmentUsed,
      yield: cycle.totalYieldKg,
      time: cycle.totalTime,
      investment: cycle.investmentUsed
    }));
  }
  
  // Create comparison chart
  function createComparisonChart(data) {
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (window.comparisonChart instanceof Chart) {
      window.comparisonChart.destroy();
    }
    
    // Create new chart
    window.comparisonChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(item => item.name),
        datasets: [
          {
            label: 'Profit (₹)',
            data: data.map(item => item.profit),
            backgroundColor: '#4d7c0f',
            borderColor: '#3f6212',
            borderWidth: 1
          },
          {
            label: 'Yield (kg)',
            data: data.map(item => item.yield),
            backgroundColor: '#84cc16',
            borderColor: '#65a30d',
            borderWidth: 1
          },
          {
            label: 'Duration (days)',
            data: data.map(item => item.time),
            backgroundColor: '#ca8a04',
            borderColor: '#a16207',
            borderWidth: 1
          },
          {
            label: 'Investment (₹)',
            data: data.map(item => item.investment),
            backgroundColor: '#f59e0b',
            borderColor: '#d97706',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
});

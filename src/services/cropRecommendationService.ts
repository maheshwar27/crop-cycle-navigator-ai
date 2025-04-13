
interface CropCycle {
  id: number;
  sequence: string[];
  durations: number[];
  totalTime: number;
  investmentUsed: number;
  budgetRatio: number;
  totalYieldValue: number;
  totalYieldKg: number;
  updatedNutrients: {
    nitrogen: number;
    phosphorous: number;
    potassium: number;
  };
  reasoning: string;
}

interface ResultData {
  cycles: CropCycle[];
  totalBudget: number;
}

export interface FormData {
  nitrogen: string;
  phosphorous: string;
  potassium: string;
  organicCarbon: string;
  soilType: string;
  soilPH: string;
  electricalConductivity: string;
  sulphur: string;
  iron: string;
  zinc: string;
  copper: string;
  boron: string;
  manganese: string;
  cultivationDuration: string;
  investmentBudget: string;
}

// This function will call the Python backend API
export async function getCropRecommendations(formData: FormData): Promise<ResultData> {
  try {
    // In a production environment, replace this with the actual API endpoint
    const apiUrl = "/api/crop-recommendations";
    
    // Convert form data to the format expected by the backend
    const requestData = {
      Nitrogen: parseFloat(formData.nitrogen),
      Phosphorous: parseFloat(formData.phosphorous),
      Potassium: parseFloat(formData.potassium),
      OrganicCarbon: parseFloat(formData.organicCarbon),
      pH: parseFloat(formData.soilPH),
      EC: parseFloat(formData.electricalConductivity),
      Sulphur: parseFloat(formData.sulphur),
      Iron: parseFloat(formData.iron),
      Zinc: parseFloat(formData.zinc),
      Copper: parseFloat(formData.copper),
      Boron: parseFloat(formData.boron),
      Manganese: parseFloat(formData.manganese),
      soil_type: formData.soilType,
      total_duration: parseInt(formData.cultivationDuration),
      investment_budget: parseFloat(formData.investmentBudget),
    };

    // For now, we'll use mock data while developing the frontend integration
    console.log("Sending data to backend:", requestData);
    
    // Uncomment this code when your backend API is ready
    /*
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch crop recommendations");
    }

    return await response.json();
    */

    // Using mock data for now (this will be replaced with actual API call)
    return getMockResultData();
  } catch (error) {
    console.error("Error fetching crop recommendations:", error);
    throw error;
  }
}

// Mock data function to simulate API response
function getMockResultData(): ResultData {
  return {
    cycles: [
      {
        id: 1,
        sequence: ["Rice (Basmati)", "Pulses", "Leafy Vegetables"],
        durations: [150, 120, 60],
        totalTime: 330,
        investmentUsed: 75000,
        budgetRatio: 1.5, // Exceeds budget
        totalYieldValue: 85000,
        totalYieldKg: 16328, // Rice: 2268 kg + Pulses: 453 kg + Leafy Vegetables: 13607 kg
        updatedNutrients: {
          nitrogen: 162.51,
          phosphorous: 3.05,
          potassium: 99.51,
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
        totalYieldValue: 78000,
        totalYieldKg: 5670, // Maize: 3629kg + Wheat: 1588kg + Pulses: 453 kg
        updatedNutrients: {
          nitrogen: 170.5,
          phosphorous: 3.56,
          potassium: 104.42,
        },
        reasoning: "This cycle leverages the high nitrogen demand of maize and wheat, followed by pulses for nitrogen fixation and soil improvement. This is a balanced approach given the budget and nutrient levels."
      },
      {
        id: 3,
        sequence: ["Cotton", "Turmeric", "Watermelon"],
        durations: [180, 270, 120],
        totalTime: 570,
        investmentUsed: 145000,
        budgetRatio: 2.9, // Significantly exceeds budget
        totalYieldValue: 180000,
        totalYieldKg: 16328, // Cotton: 453 kg + Turmeric: 2268kg + Watermelon: 13607 kg
        updatedNutrients: {
          nitrogen: 150.47,
          phosphorous: 3.14,
          potassium: 92.14,
        },
        reasoning: "This cycle prioritizes high-value crops. However, the current selection significantly exceeds the time and budget constraints. Careful crop selection and potential adjustments in quantities are necessary to make this cycle feasible."
      }
    ],
    totalBudget: 50000
  };
}


import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InputForm from '@/components/InputForm';
import ResultsSection from '@/components/ResultsSection';
import HowItWorks from '@/components/HowItWorks';
import { useToast } from "@/hooks/use-toast";

// Mock data to simulate API response
const mockResultData = {
  cycles: [
    {
      id: 1,
      sequence: ["Rice", "Maize", "Wheat"],
      durations: [120, 95, 130],
      totalTime: 345,
      investmentUsed: 45000,
      budgetRatio: 0.9,
      totalYieldValue: 78500,
      totalYieldKg: 8200,
      updatedNutrients: {
        nitrogen: 75.2,
        phosphorous: 42.1,
        potassium: 60.8,
      },
      reasoning: "This cycle was chosen because rice thrives in your soil's high nitrogen content, followed by maize which helps restore soil structure. Wheat completes the cycle by utilizing the remaining nutrients efficiently. This sequence maximizes yield while maintaining soil health over the specified duration."
    },
    {
      id: 2,
      sequence: ["Soybean", "Potato", "Cotton"],
      durations: [100, 110, 160],
      totalTime: 370,
      investmentUsed: 38000,
      budgetRatio: 0.76,
      totalYieldValue: 65000,
      totalYieldKg: 6800,
      updatedNutrients: {
        nitrogen: 82.5,
        phosphorous: 39.7,
        potassium: 54.3,
      },
      reasoning: "This alternative cycle starts with soybeans, which add nitrogen to your soil naturally. Potatoes then benefit from this nitrogen boost, and cotton finalizes the cycle with its deep roots helping improve soil structure. This sequence uses less investment but provides a slightly lower yield."
    },
    {
      id: 3,
      sequence: ["Sugarcane", "Pulses"],
      durations: [210, 90],
      totalTime: 300,
      investmentUsed: 42000,
      budgetRatio: 0.84,
      totalYieldValue: 72000,
      totalYieldKg: 9500,
      updatedNutrients: {
        nitrogen: 68.9,
        phosphorous: 45.2,
        potassium: 58.1,
      },
      reasoning: "This cycle utilizes a long-duration crop (sugarcane) followed by a short-duration nitrogen-fixing crop (pulses). This combination works well with your soil's current nutrient profile and completes within your time constraints while providing a good balance between investment and returns."
    }
  ],
  totalBudget: 50000
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState<typeof mockResultData | null>(null);
  const { toast } = useToast();

  const handleFormSubmit = (formData: any) => {
    setIsLoading(true);
    // Simulate API call with a timeout
    setTimeout(() => {
      setResultData(mockResultData);
      setIsLoading(false);
      toast({
        title: "Analysis Complete",
        description: "Your crop cycle recommendations are ready!",
      });
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById("results-section");
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-agricultural-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-agricultural-800 mb-4">
                Smart Crop Cycle Recommender
              </h1>
              <p className="text-lg text-agricultural-600 mb-8">
                AI-powered recommendations for optimal crop cycles based on your soil conditions
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <InputForm onSubmit={handleFormSubmit} isLoading={isLoading} />
            
            <div id="results-section">
              <ResultsSection data={resultData} />
            </div>
            
            <HowItWorks />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

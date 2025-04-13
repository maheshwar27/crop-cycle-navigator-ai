
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InputForm from '@/components/InputForm';
import ResultsSection from '@/components/ResultsSection';
import HowItWorks from '@/components/HowItWorks';
import { useToast } from "@/hooks/use-toast";
import { getCropRecommendations, FormData } from '@/services/cropRecommendationService';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState<any | null>(null); // Type will come from the service
  const { toast } = useToast();

  const handleFormSubmit = async (formData: FormData) => {
    setIsLoading(true);
    
    try {
      // Call the backend service
      const result = await getCropRecommendations(formData);
      setResultData(result);
      
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
    } catch (error) {
      console.error("Error getting recommendations:", error);
      toast({
        title: "An error occurred",
        description: "Failed to get crop recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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

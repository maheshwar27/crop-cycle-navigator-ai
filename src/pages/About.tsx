
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, CircleDollarSign, Clock, Sprout, BarChart3, Microscope } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-agricultural-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-agricultural-800 mb-4">
                About Our Platform
              </h1>
              <p className="text-lg text-agricultural-600 mb-8">
                Learn more about the Smart Crop Cycle Recommender and our mission
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-2xl font-heading font-semibold text-agricultural-700 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                At Smart Crop Cycle Recommender, we are dedicated to empowering farmers with data-driven insights to maximize their crop yields while maintaining soil health. Our AI-powered platform helps optimize resource allocation, reduce waste, and increase agricultural productivity through intelligent crop cycle planning.
              </p>
              
              <h2 className="text-2xl font-heading font-semibold text-agricultural-700 mb-6 mt-12">
                Key Benefits
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card className="card-agricultural">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-agricultural-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Leaf className="h-5 w-5 text-agricultural-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-agricultural-700 text-lg mb-2">Optimized Crop Selection</h3>
                      <p className="text-sm text-gray-600">
                        Our system recommends crops that are best suited for your specific soil conditions and constraints.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-agricultural">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-agricultural-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <CircleDollarSign className="h-5 w-5 text-agricultural-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-agricultural-700 text-lg mb-2">Maximized Returns</h3>
                      <p className="text-sm text-gray-600">
                        Get the most out of your investment with carefully calculated crop sequences that maximize profit.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-agricultural">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-agricultural-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-agricultural-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-agricultural-700 text-lg mb-2">Time Optimization</h3>
                      <p className="text-sm text-gray-600">
                        Plan your farming calendar efficiently with crops that fit within your time constraints.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-agricultural">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-agricultural-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Sprout className="h-5 w-5 text-agricultural-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-agricultural-700 text-lg mb-2">Soil Health Maintenance</h3>
                      <p className="text-sm text-gray-600">
                        Our recommendations consider long-term soil health and nutrient preservation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-agricultural">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-agricultural-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <BarChart3 className="h-5 w-5 text-agricultural-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-agricultural-700 text-lg mb-2">Data-Driven Decisions</h3>
                      <p className="text-sm text-gray-600">
                        Make farming decisions based on scientific data rather than guesswork or tradition alone.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-agricultural">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-10 w-10 rounded-full bg-agricultural-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Microscope className="h-5 w-5 text-agricultural-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-agricultural-700 text-lg mb-2">Scientific Foundation</h3>
                      <p className="text-sm text-gray-600">
                        Our recommendations are based on agricultural research and machine learning algorithms trained on extensive datasets.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <h2 className="text-2xl font-heading font-semibold text-agricultural-700 mb-6">
                Our Technology
              </h2>
              <p className="text-gray-600 mb-6">
                The Smart Crop Cycle Recommender uses advanced machine learning algorithms trained on thousands of soil samples and crop yield data points. Our system analyzes over 20 different soil parameters along with environmental factors to predict the most suitable crop sequences for any given plot of land.
              </p>
              <p className="text-gray-600 mb-6">
                We continuously improve our recommendations by incorporating feedback from agricultural experts and real-world results from farms using our system. This feedback loop allows our AI to become more accurate and adapted to local conditions over time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

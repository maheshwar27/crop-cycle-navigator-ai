
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Leaf, Database, LineChart, Sprout } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-heading font-semibold text-agricultural-700 mb-8 text-center">
        How Our AI System Works
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="card-agricultural">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-agricultural-100 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-agricultural-600" />
            </div>
            <h3 className="font-medium text-agricultural-700 text-lg mb-2">Data Collection</h3>
            <p className="text-sm text-gray-600">
              Input your soil parameters, including nutrient levels, pH, and physical properties.
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-agricultural">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-agricultural-100 flex items-center justify-center mb-4">
              <LineChart className="h-6 w-6 text-agricultural-600" />
            </div>
            <h3 className="font-medium text-agricultural-700 text-lg mb-2">AI Analysis</h3>
            <p className="text-sm text-gray-600">
              Our AI analyzes your soil data against our database of crop requirements and growth patterns.
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-agricultural">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-agricultural-100 flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-agricultural-600" />
            </div>
            <h3 className="font-medium text-agricultural-700 text-lg mb-2">Cycle Optimization</h3>
            <p className="text-sm text-gray-600">
              The system calculates optimal crop sequences based on soil conditions, budget, and time constraints.
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-agricultural">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-agricultural-100 flex items-center justify-center mb-4">
              <Sprout className="h-6 w-6 text-agricultural-600" />
            </div>
            <h3 className="font-medium text-agricultural-700 text-lg mb-2">Results & Recommendations</h3>
            <p className="text-sm text-gray-600">
              Get detailed recommendations with expected yields, cost breakdowns, and rationale for each crop cycle.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-agricultural-600 max-w-3xl mx-auto">
          Our system uses machine learning models trained on thousands of soil samples and crop performance data across different regions. The recommendations are tailored specifically to your soil's unique characteristics and your farming constraints.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;

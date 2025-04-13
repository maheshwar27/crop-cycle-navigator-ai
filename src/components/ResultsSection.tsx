
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

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

interface ResultsSectionProps {
  data: ResultData | null;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ data }) => {
  if (!data) return null;

  // Format data for chart
  const chartData = data.cycles.map((cycle) => ({
    name: `Cycle ${cycle.id}`,
    profit: cycle.totalYieldValue,
    yield: cycle.totalYieldKg,
    time: cycle.totalTime,
    investment: cycle.investmentUsed,
  }));

  return (
    <div className="mt-8 animate-fade-in">
      <h2 className="text-2xl font-heading font-semibold text-agricultural-700 mb-6">
        Recommended Crop Cycles
      </h2>
      
      <Tabs defaultValue="cycle1" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="cycle1" className="data-[state=active]:bg-agricultural-100 data-[state=active]:text-agricultural-700">Cycle 1</TabsTrigger>
          <TabsTrigger value="cycle2" className="data-[state=active]:bg-agricultural-100 data-[state=active]:text-agricultural-700">Cycle 2</TabsTrigger>
          <TabsTrigger value="cycle3" className="data-[state=active]:bg-agricultural-100 data-[state=active]:text-agricultural-700">Cycle 3</TabsTrigger>
        </TabsList>

        {data.cycles.map((cycle, index) => (
          <TabsContent value={`cycle${index + 1}`} key={index}>
            <Card className="card-agricultural">
              <CardHeader className="bg-agricultural-50 rounded-t-lg">
                <CardTitle className="text-xl text-agricultural-700">
                  Crop Sequence {index + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-agricultural-600 mb-2">
                    Crop Sequence
                  </h3>
                  <div className="flex flex-wrap items-center">
                    {cycle.sequence.map((crop, i) => (
                      <React.Fragment key={i}>
                        <div className="bg-agricultural-100 text-agricultural-700 px-3 py-1.5 rounded-full">
                          {crop}
                          <span className="ml-2 text-xs text-agricultural-500">
                            ({cycle.durations[i]} days)
                          </span>
                        </div>
                        {i < cycle.sequence.length - 1 && (
                          <div className="mx-2 text-agricultural-400">→</div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-agricultural-600 mb-2">
                      Duration & Investment
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-earth-700">Total Time:</span>
                        <span className="font-medium">{cycle.totalTime} days</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-earth-700">Investment Used:</span>
                        <span className="font-medium">₹{cycle.investmentUsed.toLocaleString()}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-earth-700">Budget Usage:</span>
                        <span className="font-medium">{Math.round(cycle.budgetRatio * 100)}%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-agricultural-600 mb-2">
                      Yield Statistics
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-earth-700">Total Yield Value:</span>
                        <span className="font-medium">₹{cycle.totalYieldValue.toLocaleString()}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-earth-700">Total Yield Weight:</span>
                        <span className="font-medium">{cycle.totalYieldKg.toLocaleString()} kg</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-earth-700">ROI:</span>
                        <span className="font-medium">
                          {Math.round((cycle.totalYieldValue / cycle.investmentUsed) * 100 - 100)}%
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Accordion type="single" collapsible>
                  <AccordionItem value="nutrients">
                    <AccordionTrigger className="text-agricultural-600 hover:text-agricultural-700">
                      Updated Soil Nutrient Levels
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        <div className="bg-agricultural-50 p-3 rounded-md">
                          <p className="text-sm text-agricultural-500">Nitrogen</p>
                          <p className="text-xl font-medium text-agricultural-700">
                            {cycle.updatedNutrients.nitrogen.toFixed(2)} kg/ha
                          </p>
                        </div>
                        <div className="bg-agricultural-50 p-3 rounded-md">
                          <p className="text-sm text-agricultural-500">Phosphorous</p>
                          <p className="text-xl font-medium text-agricultural-700">
                            {cycle.updatedNutrients.phosphorous.toFixed(2)} kg/ha
                          </p>
                        </div>
                        <div className="bg-agricultural-50 p-3 rounded-md">
                          <p className="text-sm text-agricultural-500">Potassium</p>
                          <p className="text-xl font-medium text-agricultural-700">
                            {cycle.updatedNutrients.potassium.toFixed(2)} kg/ha
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="reasoning">
                    <AccordionTrigger className="text-agricultural-600 hover:text-agricultural-700">
                      Why This Sequence Was Chosen
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {cycle.reasoning}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Comparison Charts */}
      <Card className="card-agricultural mt-8">
        <CardHeader className="bg-agricultural-50 rounded-t-lg">
          <CardTitle className="text-xl text-agricultural-700">
            Cycle Comparison
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#4D7C0F" />
                <YAxis yAxisId="right" orientation="right" stroke="#A16207" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="profit" name="Profit (₹)" fill="#4D7C0F" />
                <Bar yAxisId="left" dataKey="yield" name="Yield (kg)" fill="#84CC16" />
                <Bar yAxisId="right" dataKey="time" name="Duration (days)" fill="#A16207" />
                <Bar yAxisId="right" dataKey="investment" name="Investment (₹)" fill="#CA8A04" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsSection;

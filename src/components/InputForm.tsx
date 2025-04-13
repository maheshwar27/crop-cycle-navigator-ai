
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { RefreshCw, SendHorizonal } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface FormData {
  // Soil Nutrients
  nitrogen: string;
  phosphorous: string;
  potassium: string;
  organicCarbon: string;
  sulphur: string;
  iron: string;
  zinc: string;
  copper: string;
  boron: string;
  manganese: string;
  
  // Soil Properties
  soilType: string;
  soilPH: string;
  electricalConductivity: string;
  
  // User Constraints
  cultivationDuration: string;
  investmentBudget: string;
}

interface InputFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<FormData>({
    nitrogen: '',
    phosphorous: '',
    potassium: '',
    organicCarbon: '',
    sulphur: '',
    iron: '',
    zinc: '',
    copper: '',
    boron: '',
    manganese: '',
    soilType: '',
    soilPH: '',
    electricalConductivity: '',
    cultivationDuration: '',
    investmentBudget: '',
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFormData({
      nitrogen: '',
      phosphorous: '',
      potassium: '',
      organicCarbon: '',
      sulphur: '',
      iron: '',
      zinc: '',
      copper: '',
      boron: '',
      manganese: '',
      soilType: '',
      soilPH: '',
      electricalConductivity: '',
      cultivationDuration: '',
      investmentBudget: '',
    });
    toast({
      title: "Form Reset",
      description: "All input fields have been cleared.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    let isValid = true;
    let missingFields: string[] = [];

    // Check required fields
    if (!formData.nitrogen) {
      isValid = false;
      missingFields.push("Nitrogen");
    }
    if (!formData.phosphorous) {
      isValid = false;
      missingFields.push("Phosphorous");
    }
    if (!formData.potassium) {
      isValid = false;
      missingFields.push("Potassium");
    }
    if (!formData.soilType) {
      isValid = false;
      missingFields.push("Soil Type");
    }
    if (!formData.cultivationDuration) {
      isValid = false;
      missingFields.push("Cultivation Duration");
    }
    if (!formData.investmentBudget) {
      isValid = false;
      missingFields.push("Investment Budget");
    }

    if (!isValid) {
      toast({
        title: "Missing Information",
        description: `Please fill in the required fields: ${missingFields.join(", ")}`,
        variant: "destructive",
      });
      return;
    }

    onSubmit(formData);
  };

  return (
    <Card className="card-agricultural">
      <CardContent className="p-6">
        <h2 className="text-2xl font-heading font-semibold text-agricultural-700 mb-6">
          Enter Your Farm Details
        </h2>
        
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="nutrients" className="w-full mb-6">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="nutrients" className="data-[state=active]:bg-agricultural-100 data-[state=active]:text-agricultural-700">Soil Nutrients</TabsTrigger>
              <TabsTrigger value="properties" className="data-[state=active]:bg-agricultural-100 data-[state=active]:text-agricultural-700">Soil Properties</TabsTrigger>
              <TabsTrigger value="constraints" className="data-[state=active]:bg-agricultural-100 data-[state=active]:text-agricultural-700">User Constraints</TabsTrigger>
            </TabsList>
            
            <TabsContent value="nutrients" className="border rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nitrogen" className="form-label">Nitrogen (kg/ha) *</Label>
                  <Input
                    id="nitrogen"
                    type="number"
                    placeholder="Enter nitrogen value"
                    value={formData.nitrogen}
                    onChange={(e) => handleChange('nitrogen', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phosphorous" className="form-label">Phosphorous (kg/ha) *</Label>
                  <Input
                    id="phosphorous"
                    type="number"
                    placeholder="Enter phosphorous value"
                    value={formData.phosphorous}
                    onChange={(e) => handleChange('phosphorous', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="potassium" className="form-label">Potassium (kg/ha) *</Label>
                  <Input
                    id="potassium"
                    type="number"
                    placeholder="Enter potassium value"
                    value={formData.potassium}
                    onChange={(e) => handleChange('potassium', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="organicCarbon" className="form-label">Organic Carbon (%)</Label>
                  <Input
                    id="organicCarbon"
                    type="number"
                    placeholder="Enter organic carbon value"
                    value={formData.organicCarbon}
                    onChange={(e) => handleChange('organicCarbon', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sulphur" className="form-label">Sulphur (ppm)</Label>
                  <Input
                    id="sulphur"
                    type="number"
                    placeholder="Enter sulphur value"
                    value={formData.sulphur}
                    onChange={(e) => handleChange('sulphur', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="iron" className="form-label">Iron (ppm)</Label>
                  <Input
                    id="iron"
                    type="number"
                    placeholder="Enter iron value"
                    value={formData.iron}
                    onChange={(e) => handleChange('iron', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="zinc" className="form-label">Zinc (ppm)</Label>
                  <Input
                    id="zinc"
                    type="number"
                    placeholder="Enter zinc value"
                    value={formData.zinc}
                    onChange={(e) => handleChange('zinc', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="copper" className="form-label">Copper (ppm)</Label>
                  <Input
                    id="copper"
                    type="number"
                    placeholder="Enter copper value"
                    value={formData.copper}
                    onChange={(e) => handleChange('copper', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="boron" className="form-label">Boron (ppm)</Label>
                  <Input
                    id="boron"
                    type="number"
                    placeholder="Enter boron value"
                    value={formData.boron}
                    onChange={(e) => handleChange('boron', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="manganese" className="form-label">Manganese (ppm)</Label>
                  <Input
                    id="manganese"
                    type="number"
                    placeholder="Enter manganese value"
                    value={formData.manganese}
                    onChange={(e) => handleChange('manganese', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="properties" className="border rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="soilType" className="form-label">Soil Type *</Label>
                  <Select 
                    value={formData.soilType} 
                    onValueChange={(value) => handleChange('soilType', value)}
                  >
                    <SelectTrigger className="w-full input-field">
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="loamy">Loamy</SelectItem>
                      <SelectItem value="sandy">Sandy</SelectItem>
                      <SelectItem value="clay">Clay</SelectItem>
                      <SelectItem value="silty">Silty</SelectItem>
                      <SelectItem value="peaty">Peaty</SelectItem>
                      <SelectItem value="chalky">Chalky</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="soilPH" className="form-label">Soil pH</Label>
                  <Input
                    id="soilPH"
                    type="number"
                    placeholder="Enter soil pH"
                    value={formData.soilPH}
                    onChange={(e) => handleChange('soilPH', e.target.value)}
                    className="input-field"
                    step="0.1"
                    min="0"
                    max="14"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="electricalConductivity" className="form-label">Electrical Conductivity (dS/m)</Label>
                  <Input
                    id="electricalConductivity"
                    type="number"
                    placeholder="Enter electrical conductivity"
                    value={formData.electricalConductivity}
                    onChange={(e) => handleChange('electricalConductivity', e.target.value)}
                    className="input-field"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="constraints" className="border rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cultivationDuration" className="form-label">Total Cultivation Duration (days) *</Label>
                  <Input
                    id="cultivationDuration"
                    type="number"
                    placeholder="Enter total cultivation duration"
                    value={formData.cultivationDuration}
                    onChange={(e) => handleChange('cultivationDuration', e.target.value)}
                    className="input-field"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="investmentBudget" className="form-label">Total Investment Budget (₹) *</Label>
                  <Input
                    id="investmentBudget"
                    type="number"
                    placeholder="Enter total investment budget"
                    value={formData.investmentBudget}
                    onChange={(e) => handleChange('investmentBudget', e.target.value)}
                    className="input-field"
                    min="0"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleReset}
              className="text-earth-700 border-earth-300 hover:bg-earth-50"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset Fields
            </Button>
            <Button 
              type="submit" 
              className="bg-agricultural-600 hover:bg-agricultural-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  <SendHorizonal className="mr-2 h-4 w-4" />
                  Generate Crop Cycle Plan
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default InputForm;

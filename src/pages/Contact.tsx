
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-agricultural-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-agricultural-800 mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-agricultural-600 mb-8">
                Have questions or feedback? We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="space-y-6">
                    <Card className="card-agricultural">
                      <CardContent className="p-6 flex items-start">
                        <div className="h-10 w-10 rounded-full bg-agricultural-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="h-5 w-5 text-agricultural-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-agricultural-700 text-lg mb-2">Our Location</h3>
                          <p className="text-sm text-gray-600">
                            123 Agricultural Way<br />
                            Tech Valley, CA 94043<br />
                            United States
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="card-agricultural">
                      <CardContent className="p-6 flex items-start">
                        <div className="h-10 w-10 rounded-full bg-agricultural-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <Phone className="h-5 w-5 text-agricultural-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-agricultural-700 text-lg mb-2">Phone</h3>
                          <p className="text-sm text-gray-600">
                            +1 (555) 123-4567<br />
                            Mon-Fri, 9am-5pm PT
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="card-agricultural">
                      <CardContent className="p-6 flex items-start">
                        <div className="h-10 w-10 rounded-full bg-agricultural-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail className="h-5 w-5 text-agricultural-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-agricultural-700 text-lg mb-2">Email</h3>
                          <p className="text-sm text-gray-600">
                            info@smartcroprecommender.com<br />
                            support@smartcroprecommender.com
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <Card className="card-agricultural">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-heading font-semibold text-agricultural-700 mb-6">
                        Send us a Message
                      </h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="form-label">Your Name</Label>
                            <Input
                              id="name"
                              placeholder="Enter your name"
                              className="input-field"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email" className="form-label">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              className="input-field"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="form-label">Subject</Label>
                          <Select>
                            <SelectTrigger className="w-full input-field">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message" className="form-label">Your Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Enter your message here..."
                            className="min-h-[150px] input-field"
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="bg-agricultural-600 hover:bg-agricultural-700 text-white w-full md:w-auto"
                        >
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

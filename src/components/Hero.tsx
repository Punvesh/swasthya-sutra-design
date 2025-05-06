
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 animate-fade-in">
              Personalized Indian 
              <span className="text-sage-600"> Diet Plans </span>
              For Your Lifestyle
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Discover the perfect balance of taste and nutrition with diet plans 
              customized to your body, goals, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 h-auto text-lg"
                onClick={() => document.getElementById('user-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Create Your Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-sage-200 hover:bg-sage-50 text-sage-700 px-8 py-6 h-auto text-lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="w-8 h-8 rounded-full bg-sage-100 border-2 border-white flex items-center justify-center text-xs font-medium text-sage-600">
                    {num}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                Join <span className="font-semibold">1,000+</span> users transforming their health
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage-100 rounded-full z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-terracotta-100 rounded-full z-0"></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-saffron-100 rounded-full z-0"></div>
              
              <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <div className="p-6 bg-sage-50 border-b border-gray-100">
                  <h3 className="font-semibold text-lg text-gray-800">Today's Meal Plan</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 rounded-lg bg-sage-100 flex items-center justify-center mr-4">
                        <span className="text-sage-600 font-semibold">B</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Breakfast</h4>
                        <p className="text-gray-600">Vegetable Upma with Coconut Chutney</p>
                        <div className="mt-2 flex space-x-3 text-xs">
                          <span className="bg-sage-50 text-sage-700 px-2 py-1 rounded">325 kcal</span>
                          <span className="bg-sage-50 text-sage-700 px-2 py-1 rounded">9g protein</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-16 h-16 rounded-lg bg-saffron-100 flex items-center justify-center mr-4">
                        <span className="text-saffron-600 font-semibold">L</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Lunch</h4>
                        <p className="text-gray-600">Rajma Chawal with Cucumber Raita</p>
                        <div className="mt-2 flex space-x-3 text-xs">
                          <span className="bg-saffron-50 text-saffron-700 px-2 py-1 rounded">520 kcal</span>
                          <span className="bg-saffron-50 text-saffron-700 px-2 py-1 rounded">18g protein</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-16 h-16 rounded-lg bg-terracotta-100 flex items-center justify-center mr-4">
                        <span className="text-terracotta-600 font-semibold">D</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Dinner</h4>
                        <p className="text-gray-600">Palak Paneer with Roti</p>
                        <div className="mt-2 flex space-x-3 text-xs">
                          <span className="bg-terracotta-50 text-terracotta-700 px-2 py-1 rounded">480 kcal</span>
                          <span className="bg-terracotta-50 text-terracotta-700 px-2 py-1 rounded">22g protein</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

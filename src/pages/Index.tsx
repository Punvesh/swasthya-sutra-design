
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UserForm from "@/components/UserForm";
import DietPlanSection from "@/components/DietPlanSection";
import NutritionSummary from "@/components/NutritionSummary";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

// Sample nutrition data for demo
const nutritionData = {
  calorieTarget: 2200,
  calorieConsumed: 1850,
  macros: [
    { name: "Protein", value: 95, color: "#86c53d" },
    { name: "Carbs", value: 240, color: "#fdd335" },
    { name: "Fat", value: 65, color: "#fc7a3c" },
  ],
  nutrients: [
    { name: "Fiber", consumed: 28, target: 30, unit: "g" },
    { name: "Calcium", consumed: 800, target: 1000, unit: "mg" },
    { name: "Iron", consumed: 14, target: 18, unit: "mg" },
    { name: "Vitamin C", consumed: 75, target: 90, unit: "mg" },
    { name: "Vitamin D", consumed: 15, target: 20, unit: "μg" },
  ],
};

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturesSection />
        
        <HowItWorksSection />
        
        <section id="user-form" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Start Your Personalized Journey
              </h2>
              <p className="text-gray-600">
                Enter your details below to create your customized Indian diet plan
              </p>
            </div>
            <UserForm />
          </div>
        </section>
        
        <DietPlanSection />
        
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Your Nutrition Overview
              </h2>
              <p className="text-gray-600">
                Track your daily nutritional intake and progress
              </p>
            </div>
            <NutritionSummary 
              calorieTarget={nutritionData.calorieTarget}
              calorieConsumed={nutritionData.calorieConsumed}
              macros={nutritionData.macros}
              nutrients={nutritionData.nutrients}
            />
          </div>
        </section>
        
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

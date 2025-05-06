
import React from "react";
import { ChefHat, Dices, Heart, BarChart4 } from "lucide-react";

const steps = [
  {
    icon: <ChefHat className="h-8 w-8 text-white" />,
    title: "Share Your Information",
    description: "Tell us about your body metrics, lifestyle, and dietary preferences"
  },
  {
    icon: <Dices className="h-8 w-8 text-white" />,
    title: "AI Analysis",
    description: "Our system analyzes your needs and creates a personalized diet plan"
  },
  {
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Get Your Plan",
    description: "Receive a custom meal plan that includes traditional Indian dishes"
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-white" />,
    title: "Track & Adjust",
    description: "Monitor your progress and fine-tune your plan for optimal results"
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            How Swasthya Sutra Works
          </h2>
          <p className="text-gray-600">
            Getting your personalized Indian diet plan is simple, quick, and effective
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-16 h-[calc(100%-120px)] w-0.5 bg-sage-200 -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative ${index % 2 === 1 ? 'lg:translate-y-24' : ''}`}
              >
                <div className="gradient-card p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-sage-500 to-sage-600 rounded-full p-3 mr-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="hidden lg:block absolute top-6 w-6 h-6 rounded-full bg-white border-4 border-sage-500 z-10">
                  {index % 2 === 0 ? (
                    <div className="absolute left-6 top-1/2 w-10 h-0.5 bg-sage-200 -translate-y-1/2"></div>
                  ) : (
                    <div className="absolute right-6 top-1/2 w-10 h-0.5 bg-sage-200 -translate-y-1/2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

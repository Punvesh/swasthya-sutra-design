
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Circle, Heart, Search, BarChart4, Clock, Carrot } from "lucide-react";

const features = [
  {
    icon: <Heart className="h-12 w-12 text-sage-500" />,
    title: "Personalized Plans",
    description: "Diet plans customized to your body type, health goals, and preferences"
  },
  {
    icon: <BarChart4 className="h-12 w-12 text-sage-500" />,
    title: "Nutrition Tracking",
    description: "Monitor your calorie intake and nutritional balance with smart analytics"
  },
  {
    icon: <Carrot className="h-12 w-12 text-sage-500" />,
    title: "Authentic Indian Recipes",
    description: "Access a library of traditional Indian recipes adapted for your health goals"
  },
  {
    icon: <Search className="h-12 w-12 text-sage-500" />,
    title: "Ingredient Analysis",
    description: "Learn about the health benefits of ingredients in your meal plan"
  },
  {
    icon: <Circle className="h-12 w-12 text-sage-500" />,
    title: "Cultural Sensitivity",
    description: "Plans that respect regional preferences and cultural dietary practices"
  },
  {
    icon: <Clock className="h-12 w-12 text-sage-500" />,
    title: "Meal Scheduling",
    description: "Optimize your meal timing based on your daily routine"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Personalized Nutrition at Your Fingertips
          </h2>
          <p className="text-gray-600">
            Our AI-powered system creates custom meal plans that blend modern nutrition 
            science with the wisdom of traditional Indian cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                <div className="mb-5 rounded-full bg-sage-50 p-3 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

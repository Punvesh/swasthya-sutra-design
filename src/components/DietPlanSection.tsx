import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MealCard from "./MealCard";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Sample data
const sampleDietPlan = {
  Sunday: {
    breakfast: {
      dishName: "Vegetable Upma with Coconut Chutney",
      calories: 325,
      protein: 9,
      carbs: 48,
      fat: 12,
      ingredients: ["Semolina", "Mixed Vegetables", "Coconut", "Curry Leaves"],
    },
    lunch: {
      dishName: "Rajma Chawal with Cucumber Raita",
      calories: 520,
      protein: 18,
      carbs: 75,
      fat: 15,
      ingredients: ["Kidney Beans", "Rice", "Yogurt", "Cucumber", "Spices"],
    },
    dinner: {
      dishName: "Palak Paneer with Roti",
      calories: 480,
      protein: 22,
      carbs: 42,
      fat: 22,
      ingredients: ["Spinach", "Paneer", "Whole Wheat Flour", "Spices"],
    },
    snack: {
      dishName: "Roasted Makhana",
      calories: 120,
      protein: 4,
      carbs: 18,
      fat: 3,
      ingredients: ["Fox Nuts", "Olive Oil", "Rock Salt"],
    },
  },
  Monday: {
    breakfast: {
      dishName: "Oats Idli with Sambar",
      calories: 310,
      protein: 12,
      carbs: 44,
      fat: 10,
      ingredients: ["Oats", "Rice", "Lentils", "Vegetables"],
    },
    lunch: {
      dishName: "Brown Rice Pulao with Dal Tadka",
      calories: 490,
      protein: 16,
      carbs: 80,
      fat: 12,
      ingredients: ["Brown Rice", "Lentils", "Mixed Vegetables", "Spices"],
    },
    dinner: {
      dishName: "Baingan Bharta with Jowar Roti",
      calories: 430,
      protein: 14,
      carbs: 56,
      fat: 18,
      ingredients: ["Eggplant", "Jowar Flour", "Tomatoes", "Onions"],
    },
    snack: {
      dishName: "Sprouts Chaat",
      calories: 145,
      protein: 8,
      carbs: 22,
      fat: 2,
      ingredients: ["Mixed Sprouts", "Onions", "Tomatoes", "Lemon"],
    },
  },
  // Other days similarly...
};

const DietPlanSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Your Personalized Diet Plan
          </h2>
          <p className="text-gray-600">
            Nutritionally balanced meals crafted with authentic Indian flavors
          </p>
        </div>

        <Tabs defaultValue="Sunday" className="w-full">
          <div className="mb-8 overflow-x-auto">
            <TabsList className="inline-flex min-w-max">
              {daysOfWeek.map((day) => (
                <TabsTrigger
                  key={day}
                  value={day}
                  className="px-4 py-2 data-[state=active]:bg-sage-100 data-[state=active]:text-sage-700"
                >
                  {day}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {daysOfWeek.map((day) => (
            <TabsContent key={day} value={day} className="animate-fade-in">
              {sampleDietPlan[day as keyof typeof sampleDietPlan] ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <MealCard
                    mealType="Breakfast"
                    dishName={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]
                        ?.breakfast?.dishName || "Sample Breakfast"
                    }
                    calories={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]
                        ?.breakfast?.calories || 0
                    }
                    protein={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]
                        ?.breakfast?.protein || 0
                    }
                    carbs={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]
                        ?.breakfast?.carbs || 0
                    }
                    fat={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]
                        ?.breakfast?.fat || 0
                    }
                    ingredients={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]
                        ?.breakfast?.ingredients
                    }
                  />
                  <MealCard
                    mealType="Lunch"
                    dishName={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.lunch
                        ?.dishName || "Sample Lunch"
                    }
                    calories={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.lunch
                        ?.calories || 0
                    }
                    protein={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.lunch
                        ?.protein || 0
                    }
                    carbs={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.lunch
                        ?.carbs || 0
                    }
                    fat={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.lunch
                        ?.fat || 0
                    }
                    ingredients={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.lunch
                        ?.ingredients
                    }
                  />
                  <MealCard
                    mealType="Dinner"
                    dishName={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.dinner
                        ?.dishName || "Sample Dinner"
                    }
                    calories={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.dinner
                        ?.calories || 0
                    }
                    protein={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.dinner
                        ?.protein || 0
                    }
                    carbs={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.dinner
                        ?.carbs || 0
                    }
                    fat={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.dinner
                        ?.fat || 0
                    }
                    ingredients={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.dinner
                        ?.ingredients
                    }
                  />
                  <MealCard
                    mealType="Snack"
                    dishName={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.snack
                        ?.dishName || "Sample Snack"
                    }
                    calories={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.snack
                        ?.calories || 0
                    }
                    protein={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.snack
                        ?.protein || 0
                    }
                    carbs={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.snack
                        ?.carbs || 0
                    }
                    fat={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.snack
                        ?.fat || 0
                    }
                    ingredients={
                      sampleDietPlan[day as keyof typeof sampleDietPlan]?.snack
                        ?.ingredients
                    }
                  />
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    No meal plan available for {day}. Please generate a plan.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DietPlanSection;

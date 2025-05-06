
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MealCard from "./MealCard";
import { geminiService } from "@/services/geminiService";
import { Button } from "@/components/ui/button";
import GeminiApiKeyModal from "./GeminiApiKeyModal";
import { Cog, Save } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Sample data structure (for TypeScript typing)
interface MealData {
  dishName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
}

interface DayMeals {
  breakfast: MealData;
  lunch: MealData;
  dinner: MealData;
  snack: MealData;
}

interface DietPlan {
  [day: string]: DayMeals;
}

interface MealPlan {
  id: string;
  user_id: string;
  meals: DietPlan;
  created_at: string;
}

const DietPlanSection: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [dietPlan, setDietPlan] = useState<DietPlan | null>(null);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [activeDay, setActiveDay] = useState("Monday");
  const [savedMealPlans, setSavedMealPlans] = useState<MealPlan[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  // Load user's meal plans
  useEffect(() => {
    const fetchSavedMealPlans = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('meal_plans')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          setSavedMealPlans(data);
          
          // Load the most recent meal plan if none is selected
          if (!dietPlan && !selectedPlanId) {
            setSelectedPlanId(data[0].id);
            setDietPlan(data[0].meals);
          }
        }
      } catch (error) {
        console.error("Error fetching meal plans:", error);
      }
    };
    
    fetchSavedMealPlans();
  }, [user, dietPlan]);

  // Listen for diet plan changes in localStorage (for newly generated plans)
  useEffect(() => {
    const handleStorageChange = () => {
      const storedDietPlan = localStorage.getItem('generatedDietPlan');
      if (storedDietPlan) {
        try {
          const parsedPlan = JSON.parse(storedDietPlan);
          setDietPlan(parsedPlan);
          setSelectedPlanId(null); // Clear selected saved plan
          
          // Set active day to the first available day in the plan
          const firstAvailableDay = Object.keys(parsedPlan)[0];
          if (firstAvailableDay) {
            setActiveDay(firstAvailableDay);
          }
        } catch (error) {
          console.error("Error parsing stored diet plan:", error);
        }
      }
    };

    // Call once on mount
    handleStorageChange();
    
    // Add listener for changes
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event listener for local updates (without page refresh)
    window.addEventListener('dietPlanGenerated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('dietPlanGenerated', handleStorageChange);
    };
  }, []);

  // Handle selecting a saved meal plan
  const handleSelectMealPlan = (planId: string) => {
    const selectedPlan = savedMealPlans.find(plan => plan.id === planId);
    if (selectedPlan) {
      setDietPlan(selectedPlan.meals);
      setSelectedPlanId(planId);
      
      // Set active day to the first available day in the plan
      const firstAvailableDay = Object.keys(selectedPlan.meals)[0];
      if (firstAvailableDay) {
        setActiveDay(firstAvailableDay);
      }
    }
  };

  return (
    <section id="diet-plan-section" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Your Personalized Diet Plan
          </h2>
          <p className="text-gray-600">
            Nutritionally balanced meals crafted with authentic Indian flavors
          </p>
          <div className="mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowApiKeyModal(true)}
              className="flex items-center gap-1 mx-auto text-xs"
            >
              <Cog className="w-3 h-3" />
              Configure Gemini API
            </Button>
          </div>
        </div>

        {!user ? (
          <div className="text-center py-6 bg-sage-50 rounded-lg mb-8">
            <p className="mb-2">Sign in to save and access your meal plans</p>
            <Button asChild>
              <Link to="/auth">Sign In or Create Account</Link>
            </Button>
          </div>
        ) : savedMealPlans.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Your Saved Meal Plans</h3>
            <div className="flex flex-wrap gap-2">
              {savedMealPlans.map((plan) => (
                <Button 
                  key={plan.id}
                  variant={selectedPlanId === plan.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleSelectMealPlan(plan.id)}
                >
                  {new Date(plan.created_at).toLocaleDateString()}
                </Button>
              ))}
            </div>
          </div>
        )}

        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
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
              {dietPlan && dietPlan[day] ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <MealCard
                    mealType="Breakfast"
                    dishName={dietPlan[day]?.breakfast?.dishName || "Sample Breakfast"}
                    calories={dietPlan[day]?.breakfast?.calories || 0}
                    protein={dietPlan[day]?.breakfast?.protein || 0}
                    carbs={dietPlan[day]?.breakfast?.carbs || 0}
                    fat={dietPlan[day]?.breakfast?.fat || 0}
                    ingredients={dietPlan[day]?.breakfast?.ingredients || []}
                  />
                  <MealCard
                    mealType="Lunch"
                    dishName={dietPlan[day]?.lunch?.dishName || "Sample Lunch"}
                    calories={dietPlan[day]?.lunch?.calories || 0}
                    protein={dietPlan[day]?.lunch?.protein || 0}
                    carbs={dietPlan[day]?.lunch?.carbs || 0}
                    fat={dietPlan[day]?.lunch?.fat || 0}
                    ingredients={dietPlan[day]?.lunch?.ingredients || []}
                  />
                  <MealCard
                    mealType="Dinner"
                    dishName={dietPlan[day]?.dinner?.dishName || "Sample Dinner"}
                    calories={dietPlan[day]?.dinner?.calories || 0}
                    protein={dietPlan[day]?.dinner?.protein || 0}
                    carbs={dietPlan[day]?.dinner?.carbs || 0}
                    fat={dietPlan[day]?.dinner?.fat || 0}
                    ingredients={dietPlan[day]?.dinner?.ingredients || []}
                  />
                  <MealCard
                    mealType="Snack"
                    dishName={dietPlan[day]?.snack?.dishName || "Sample Snack"}
                    calories={dietPlan[day]?.snack?.calories || 0}
                    protein={dietPlan[day]?.snack?.protein || 0}
                    carbs={dietPlan[day]?.snack?.carbs || 0}
                    fat={dietPlan[day]?.snack?.fat || 0}
                    ingredients={dietPlan[day]?.snack?.ingredients || []}
                  />
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    No meal plan available for {day}. Please generate a plan using the form above.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <GeminiApiKeyModal 
        isOpen={showApiKeyModal} 
        onClose={() => setShowApiKeyModal(false)}
        onApiKeySave={() => {}}
      />
    </section>
  );
};

export default DietPlanSection;

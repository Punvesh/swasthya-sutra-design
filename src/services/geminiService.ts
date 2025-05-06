
import { useToast } from "@/hooks/use-toast";

// Define the interface for our API response
export interface FoodGenerationResponse {
  success: boolean;
  data?: {
    meals: {
      [mealType: string]: {
        dishName: string;
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
        ingredients: string[];
      }
    }[];
  };
  error?: string;
}

interface GenerateFoodPlanParams {
  age: string;
  gender: string;
  weight: string;
  height: string;
  activityLevel: string;
  dietPreference: string;
}

// Temporary storage for API key in local storage
const GEMINI_API_KEY_STORAGE = "gemini_api_key";

export const geminiService = {
  getApiKey: (): string | null => {
    return localStorage.getItem(GEMINI_API_KEY_STORAGE);
  },
  
  setApiKey: (apiKey: string): void => {
    localStorage.setItem(GEMINI_API_KEY_STORAGE, apiKey);
  },
  
  clearApiKey: (): void => {
    localStorage.removeItem(GEMINI_API_KEY_STORAGE);
  },
  
  isApiKeySet: (): boolean => {
    return !!localStorage.getItem(GEMINI_API_KEY_STORAGE);
  },

  generateFoodPlan: async (params: GenerateFoodPlanParams): Promise<FoodGenerationResponse> => {
    try {
      const apiKey = localStorage.getItem(GEMINI_API_KEY_STORAGE);
      if (!apiKey) {
        return { 
          success: false, 
          error: "API key not set. Please add your Gemini API key in settings." 
        };
      }

      const prompt = `Generate a 7-day Indian food diet plan for a person with the following details:
        - Age: ${params.age}
        - Gender: ${params.gender}
        - Weight: ${params.weight} kg
        - Height: ${params.height} cm
        - Activity Level: ${params.activityLevel}
        - Diet Preference: ${params.dietPreference}
        
        For each day, provide 4 meals (breakfast, lunch, dinner, snack) that are authentic Indian dishes.
        
        Each meal should include:
        - Dish name (authentic Indian dish)
        - Caloric content (in kcal)
        - Protein (in grams)
        - Carbohydrates (in grams)
        - Fat (in grams)
        - List of key ingredients (4-6 ingredients)
        
        Create a nutritionally balanced plan that follows Indian culinary traditions. Focus ONLY on Indian cuisine dishes.
        
        Return the response in JSON format with this exact structure:
        {
          "Monday": {
            "breakfast": {
              "dishName": "dish name",
              "calories": number,
              "protein": number,
              "carbs": number,
              "fat": number,
              "ingredients": ["ingredient1", "ingredient2", "ingredient3", "ingredient4"]
            },
            "lunch": {...},
            "dinner": {...},
            "snack": {...}
          },
          "Tuesday": {...},
          ...and so on for each day of the week
        }
        
        Do not include any explanations, only return valid JSON.`;

      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.4,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Gemini API error:", errorData);
        return { 
          success: false, 
          error: `API Error: ${errorData.error?.message || response.statusText}` 
        };
      }

      const result = await response.json();
      
      // Extract the text response and parse it as JSON
      const textResponse = result.candidates[0]?.content?.parts?.[0]?.text;
      if (!textResponse) {
        return { success: false, error: "No response from Gemini API" };
      }

      // Find the JSON part within the response (in case there's any explanation text)
      let jsonStr = textResponse;
      const jsonMatch = textResponse.match(/({[\s\S]*})/);
      if (jsonMatch && jsonMatch[0]) {
        jsonStr = jsonMatch[0];
      }

      // Parse the JSON
      const dietPlan = JSON.parse(jsonStr);

      return {
        success: true,
        data: {
          meals: dietPlan
        }
      };
    } catch (error) {
      console.error("Error generating food plan:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error occurred" 
      };
    }
  }
};

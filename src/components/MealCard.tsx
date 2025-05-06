
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils } from "lucide-react";

interface MealCardProps {
  mealType: string;
  dishName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  imgSrc?: string;
  ingredients?: string[];
}

const MealCard: React.FC<MealCardProps> = ({
  mealType,
  dishName,
  calories,
  protein,
  carbs,
  fat,
  imgSrc,
  ingredients,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={dishName}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-r from-sage-100 to-sage-200 flex items-center justify-center">
            <Utensils className="h-16 w-16 text-sage-500" />
          </div>
        )}
        <Badge className="absolute top-3 left-3 bg-white text-sage-700">
          {mealType}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>{dishName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="text-center p-2 bg-sage-50 rounded">
            <p className="text-sm text-gray-500">Calories</p>
            <p className="font-semibold">{calories}</p>
          </div>
          <div className="text-center p-2 bg-sage-50 rounded">
            <p className="text-sm text-gray-500">Protein</p>
            <p className="font-semibold">{protein}g</p>
          </div>
          <div className="text-center p-2 bg-sage-50 rounded">
            <p className="text-sm text-gray-500">Carbs</p>
            <p className="font-semibold">{carbs}g</p>
          </div>
          <div className="text-center p-2 bg-sage-50 rounded">
            <p className="text-sm text-gray-500">Fat</p>
            <p className="font-semibold">{fat}g</p>
          </div>
        </div>

        {ingredients && ingredients.length > 0 && (
          <div>
            <h4 className="font-medium text-sm mb-2">Key Ingredients:</h4>
            <div className="flex flex-wrap gap-1">
              {ingredients.map((ingredient, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-terracotta-50 text-terracotta-700 border-terracotta-200"
                >
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MealCard;

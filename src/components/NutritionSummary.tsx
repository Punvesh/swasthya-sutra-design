
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface NutritionSummaryProps {
  calorieTarget: number;
  calorieConsumed: number;
  macros: {
    name: string;
    value: number;
    color: string;
  }[];
  nutrients: {
    name: string;
    consumed: number;
    target: number;
    unit: string;
  }[];
}

const NutritionSummary: React.FC<NutritionSummaryProps> = ({
  calorieTarget,
  calorieConsumed,
  macros,
  nutrients,
}) => {
  const caloriePercentage = Math.min(100, (calorieConsumed / calorieTarget) * 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Calorie Intake</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold">{calorieConsumed}</span>
                <span className="text-sm text-gray-500">of {calorieTarget} kcal</span>
              </div>
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#86c53d"
                  strokeWidth="10"
                  strokeDasharray={`${caloriePercentage * 2.51} 251`}
                  strokeDashoffset="62.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-center text-gray-600 mt-2">
              {calorieTarget - calorieConsumed > 0
                ? `${calorieTarget - calorieConsumed} kcal remaining`
                : "Daily target reached"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Macronutrients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={macros}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {macros.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {macros.map((macro, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span
                    className="text-sm"
                    style={{ color: macro.color }}
                  >
                    {macro.name}
                  </span>
                  <span className="text-sm text-gray-500">{macro.value}g</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Micronutrients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {nutrients.map((nutrient, index) => {
              const percentage = Math.min(
                100,
                (nutrient.consumed / nutrient.target) * 100
              );
              return (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{nutrient.name}</span>
                    <span className="text-sm text-gray-500">
                      {nutrient.consumed}/{nutrient.target} {nutrient.unit}
                    </span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NutritionSummary;

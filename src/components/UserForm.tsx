
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  age: string;
  gender: string;
  weight: string;
  height: string;
  activityLevel: string;
  dietPreference: string;
}

const UserForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    activityLevel: "",
    dietPreference: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: keyof FormData) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile information saved",
      description: "Your diet plan is being generated.",
    });
    console.log("Form submitted:", formData);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg animate-scale-in">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Create Your Profile
        </CardTitle>
        <CardDescription className="text-center">
          Enter your details to generate a personalized diet plan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="age" className="text-sm font-medium">
                Age
              </label>
              <Input
                id="age"
                name="age"
                type="number"
                placeholder="Years"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="gender" className="text-sm font-medium">
                Gender
              </label>
              <Select
                value={formData.gender}
                onValueChange={(value) => handleSelectChange(value, "gender")}
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="weight" className="text-sm font-medium">
                Weight
              </label>
              <Input
                id="weight"
                name="weight"
                type="number"
                placeholder="kg"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="height" className="text-sm font-medium">
                Height
              </label>
              <Input
                id="height"
                name="height"
                type="number"
                placeholder="cm"
                value={formData.height}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="activityLevel" className="text-sm font-medium">
              Activity Level
            </label>
            <Select
              value={formData.activityLevel}
              onValueChange={(value) => handleSelectChange(value, "activityLevel")}
            >
              <SelectTrigger id="activityLevel">
                <SelectValue placeholder="Select your activity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
                <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                <SelectItem value="veryActive">Very Active (intense exercise daily)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="dietPreference" className="text-sm font-medium">
              Diet Preference
            </label>
            <Select
              value={formData.dietPreference}
              onValueChange={(value) => handleSelectChange(value, "dietPreference")}
            >
              <SelectTrigger id="dietPreference">
                <SelectValue placeholder="Select your diet preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="nonVegetarian">Non-Vegetarian</SelectItem>
                <SelectItem value="vegan">Vegan</SelectItem>
                <SelectItem value="jain">Jain</SelectItem>
                <SelectItem value="glutenFree">Gluten-Free</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700">
            Generate Diet Plan
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserForm;

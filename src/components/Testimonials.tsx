
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  role: string;
  image?: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Fitness Enthusiast",
    quote: "The personalized diet plan has been a game-changer for me. I've lost 8kg in 3 months while enjoying all my favorite Indian dishes!",
  },
  {
    name: "Rahul Verma",
    role: "IT Professional",
    quote: "As someone with a busy schedule, having meals planned out that match my preferences has helped me stay on track with my health goals.",
  },
  {
    name: "Ananya Patel",
    role: "Yoga Instructor",
    quote: "I recommend Swasthya Sutra to all my clients. The balance of modern nutrition with traditional Indian cooking principles is perfect.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Users Say</h2>
          <p className="text-gray-600">
            Join thousands who have transformed their health with our personalized diet plans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    {testimonial.image ? (
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    ) : (
                      <AvatarFallback className="bg-sage-100 text-sage-700">
                        {testimonial.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <blockquote className="mb-4">
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

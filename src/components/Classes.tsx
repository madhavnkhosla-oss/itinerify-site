import { Card, CardContent } from "@/components/ui/card";
import yogaImage from "@/assets/yoga-pilates.jpg";
import aquaImage from "@/assets/aqua-aerobics.jpg";
import { Heart, Waves, CheckCircle2 } from "lucide-react";

const classes = [
  {
    title: "Yoga & Pilates",
    subtitle: "Mind-Body Harmony",
    image: yogaImage,
    icon: Heart,
    description: "A calm, powerful blend of Yoga and Pilates designed for all fitness levels.",
    benefits: [
      "Core strengthening",
      "Flexibility & mobility",
      "Posture correction",
      "Breath-body coordination",
      "Stress relief & mindfulness",
    ],
    color: "from-primary to-primary-glow",
  },
  {
    title: "Aqua Aerobics",
    subtitle: "Water Wellness",
    image: aquaImage,
    icon: Waves,
    description: "A fun, low-impact, high-energy workout done in the pool, perfect for all age groups.",
    benefits: [
      "Full-body conditioning",
      "Improved endurance & cardio",
      "Low impact on joints",
      "Enhanced mobility",
      "Refreshing workout experience",
    ],
    color: "from-secondary to-orange-400",
  },
];

const Classes = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Fitness Classes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our expertly designed programs, perfect for every resident
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {classes.map((classItem, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${classItem.color} opacity-40 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <classItem.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{classItem.subtitle}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{classItem.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-foreground mb-4">{classItem.description}</p>
                
                <div className="space-y-2">
                  {classItem.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;

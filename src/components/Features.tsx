import { Users, Calendar, CreditCard, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Coaches",
    description: "Professional fitness instructors or your existing coaches, all managed through one platform",
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Simple class registration with automatic reminders and attendance tracking",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Society-funded or resident-paid models - choose what works for your community",
  },
  {
    icon: BarChart3,
    title: "Complete Management",
    description: "Track registrations, payments, attendance, and get detailed insights - all in one place",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need in <span className="text-gradient">One Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your community fitness programs with our comprehensive management system
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

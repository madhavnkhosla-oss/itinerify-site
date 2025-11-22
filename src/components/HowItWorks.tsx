import { Building2, UserCircle2, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: UserCircle2,
    title: "For Residents",
    color: "bg-primary",
    features: [
      "Browse available classes in your society",
      "Easy one-tap registration",
      "Receive class reminders & updates",
      "Track your attendance history",
      "Pay directly or through society (depending on model)",
    ],
  },
  {
    icon: Building2,
    title: "For Societies",
    color: "bg-secondary",
    features: [
      "Choose between society-funded or resident-funded models",
      "Manage schedules, registrations & payments",
      "Access detailed reports & insights",
      "Use our coaches or your existing trainers",
      "Switch models anytime as needed",
    ],
  },
  {
    icon: GraduationCap,
    title: "For Coaches",
    color: "bg-primary-glow",
    features: [
      "Get paid per session based on attendance",
      "Access structured course materials",
      "Manage classes through the app",
      "Track your performance metrics",
      "All communication stays within the platform",
    ],
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed for everyone in your community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <div className={`w-16 h-16 ${audience.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <audience.icon className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-6">{audience.title}</h3>
              <ul className="space-y-3">
                {audience.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">FitGrouper</h3>
            <p className="text-background/80">
              Bringing professional fitness to residential communities. One platform for classes, coaches, and community wellness.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-background/80 mb-2">
              Ready to bring fitness to your community?
            </p>
            <p className="text-background/80">
              Get in touch to learn more about FitGrouper
            </p>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> for healthier communities
          </p>
          <p className="text-background/60 text-sm mt-2">
            © 2025 FitGrouper. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

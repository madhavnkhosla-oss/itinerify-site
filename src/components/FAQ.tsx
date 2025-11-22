import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const faqData = {
  residents: [
    {
      question: "What is this app for?",
      answer: "It's a central platform where you can browse fitness classes available in your society, register for a session, and make payments if required.",
    },
    {
      question: "How do I register for a class?",
      answer: "Just open the app → select a class → tap Register. Your spot is instantly reserved.",
    },
    {
      question: "Can I cancel after registering?",
      answer: "No. Once a class is confirmed, cancellations aren't allowed as coaches and class resources are scheduled in advance.",
    },
    {
      question: "Who are the coaches?",
      answer: "Your building may use coaches provided by us, or existing coaches already associated with your society. Either way, all coaches on the app are approved by your society.",
    },
    {
      question: "Will I get reminders?",
      answer: "Yes. Class timings and reminders are shared in advance through the app.",
    },
  ],
  societies: [
    {
      question: "What are the two operating models?",
      answer: "Model A (Society-Funded): The society pays per registered resident, and residents attend at zero or subsidized cost. Model B (Resident-Funded): Residents pay directly for each class, with no cost to the society.",
    },
    {
      question: "Who manages the coaches?",
      answer: "You can use coaches supplied by our platform, or your own in-house/existing coaches. Both are easily managed through the app.",
    },
    {
      question: "What does the app manage for us?",
      answer: "The app handles class scheduling, registration, attendance tracking, coach payments, resident payments, and provides detailed reports & insights.",
    },
    {
      question: "Can we switch operating models later?",
      answer: "Yes, societies can move between Model A and Model B anytime.",
    },
  ],
  coaches: [
    {
      question: "How will I get paid?",
      answer: "Coaches are paid per session based on session completion, attendance, and performance metrics. In some cases, coaches may receive a share of registration revenue, depending on the model chosen by the building.",
    },
    {
      question: "Is there a fixed session payment?",
      answer: "Yes. For initial sessions, we offer a pre-agreed payment between the coach and the society/platform.",
    },
    {
      question: "Do I need to create my own course for aqua aerobics?",
      answer: "We provide structured course instructional videos that serve as the base curriculum. Coaches are free to include small modifications or personal touches, as long as the core structure remains intact.",
    },
    {
      question: "Can I contact residents directly?",
      answer: "For any communication related to the sessions or courses, all interactions must remain inside the app. Coaches cannot contact residents outside the platform for the same program.",
    },
    {
      question: "How are class timings set?",
      answer: "Class timings are shared with the coach in advance. Once confirmed by both sides, time slots cannot be cancelled.",
    },
  ],
};

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about FitGrouper
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="residents" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="residents">Residents</TabsTrigger>
              <TabsTrigger value="societies">Societies</TabsTrigger>
              <TabsTrigger value="coaches">Coaches</TabsTrigger>
            </TabsList>
            
            {Object.entries(faqData).map(([key, faqs]) => (
              <TabsContent key={key} value={key}>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

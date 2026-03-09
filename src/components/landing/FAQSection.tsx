import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Do I need to invest any money?",
    a: "No investment required. i3 Technologies covers 100% of the machine, installation, and maintenance costs.",
  },
  {
    q: "Who handles maintenance?",
    a: "Fully handled by i3 Technologies. We monitor, service, and restock the machine regularly.",
  },
  {
    q: "What space is required?",
    a: "Just 3ft × 3ft of floor space — a small corner is all you need.",
  },
  {
    q: "How often do I get paid?",
    a: "Payouts are processed twice monthly with transparent profit reports.",
  },
  {
    q: "Can I remove the machine later?",
    a: "Yes, with prior notice as per the partnership agreement.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

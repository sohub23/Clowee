import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  restaurantName: z.string().trim().min(1, "Required").max(100),
  ownerName: z.string().trim().min(1, "Required").max(100),
  location: z.string().trim().min(1, "Required").max(200),
  phone: z.string().trim().min(1, "Required").max(20),
  dailyCustomer: z.string().trim().min(1, "Required"),
});

const CTASection = () => {
  const [form, setForm] = useState({
    restaurantName: "",
    ownerName: "",
    location: "",
    phone: "",
    dailyCustomer: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Application submitted! We'll contact you soon.");
        setForm({ restaurantName: "", ownerName: "", location: "", phone: "", dailyCustomer: "" });
      } else {
        toast.error(data.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <section id="apply" className="section-padding section-alt-bg">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Start Earning From Your Empty Space — <span className="text-primary">The Smart Way</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              No Investment. No Machine Purchase. Only Partnership.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>✓ Free installation & setup</p>
              <p>✓ 50-50 profit sharing</p>
              <p>✓ Payouts twice monthly</p>
              <p>✓ Full maintenance included</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-4"
          >
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">Apply for Partnership</h3>
            <div>
              <Label htmlFor="restaurantName" className="text-foreground">Restaurant/Business Name *</Label>
              <Input id="restaurantName" value={form.restaurantName} onChange={(e) => update("restaurantName", e.target.value)} maxLength={100} />
            </div>
            <div>
              <Label htmlFor="ownerName" className="text-foreground">Restaurant Location *</Label>
              <Input id="ownerName" value={form.ownerName} onChange={(e) => update("ownerName", e.target.value)} maxLength={100} />
            </div>
            <div>
              <Label htmlFor="location" className="text-foreground">Email *</Label>
              <Input id="location" value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="example@email.com" maxLength={200} type="email" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
              <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} type="tel" maxLength={20} />
            </div>
            <div>
              <Label className="text-foreground mb-3 block">Daily Customer *</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "50-100", value: "50-100" },
                  { label: "100-150", value: "100-150" },
                  { label: "150-200", value: "150-200" }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => update("dailyCustomer", option.value)}
                    className={`px-3 py-4 rounded-lg border-2 text-center font-semibold text-sm transition-all ${
                      form.dailyCustomer === option.value
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-card text-foreground hover:border-primary/50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

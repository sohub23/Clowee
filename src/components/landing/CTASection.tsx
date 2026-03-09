import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Application submitted! We'll contact you soon.");
    setForm({ restaurantName: "", ownerName: "", location: "", phone: "", dailyCustomer: "" });
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
              <Label htmlFor="ownerName" className="text-foreground">Owner Name *</Label>
              <Input id="ownerName" value={form.ownerName} onChange={(e) => update("ownerName", e.target.value)} maxLength={100} />
            </div>
            <div>
              <Label htmlFor="location" className="text-foreground">Location *</Label>
              <Input id="location" value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Area, Dhaka" maxLength={200} />
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
              <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} type="tel" maxLength={20} />
            </div>
            <div>
              <Label htmlFor="dailyCustomer" className="text-foreground">Daily Customer *</Label>
              <Select value={form.dailyCustomer} onValueChange={(value) => update("dailyCustomer", value)}>
                <SelectTrigger id="dailyCustomer">
                  <SelectValue placeholder="Select daily customer count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="80">80</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Submit Application
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

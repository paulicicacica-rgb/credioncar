import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Mail,
    title: "Email us",
    value: "support@creditoncar.com",
    detail: "We reply within one business day.",
  },
  {
    icon: Phone,
    title: "Call us",
    value: "(800) 555-0142",
    detail: "Mon–Fri, 8am–8pm ET.",
  },
  {
    icon: MessageCircle,
    title: "Live chat",
    value: "In-app messaging",
    detail: "Available to approved members.",
  },
  {
    icon: Clock,
    title: "Support hours",
    value: "Mon–Fri, 8am–8pm ET",
    detail: "Weekend email support too.",
  },
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // No backend yet — acknowledge locally and reset.
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll get back to you within one business day.");
    }, 600);
  };

  return (
    <PageLayout
      eyebrow="Contact"
      title="We're here to help."
      subtitle="Questions about your rate, your car, or your account? Send us a note and our team will get back to you."
      showCta={false}
    >
      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact form */}
        <Card className="p-6 md:p-8 border-border">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                rows={5}
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-lg w-full sm:w-auto"
            >
              {submitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </Card>

        {/* Contact methods */}
        <div className="space-y-5">
          {contactMethods.map((method) => (
            <Card key={method.title} className="p-6 border-border flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <method.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{method.title}</h3>
                <p className="text-foreground">{method.value}</p>
                <p className="text-sm text-muted-foreground">{method.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

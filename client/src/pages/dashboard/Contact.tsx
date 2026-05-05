import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground">
          We'd love to hear from you. Get in touch with our team
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="card-professional p-4">
            <div className="flex items-start gap-3">
              <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">
                  support@subscriptionshub.com
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          <div className="card-professional p-4">
            <div className="flex items-start gap-3">
              <Phone size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  +91 98765 43210
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Mon-Fri, 9AM-6PM IST
                </p>
              </div>
            </div>
          </div>

          <div className="card-professional p-4">
            <div className="flex items-start gap-3">
              <MapPin size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Address</h3>
                <p className="text-sm text-muted-foreground">
                  Tech Hub, Mumbai<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          <div className="card-professional p-4">
            <div className="flex items-start gap-3">
              <Clock size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="card-professional p-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <MessageSquare size={24} className="text-primary" />
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  required
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          <div className="card-professional p-4">
            <h3 className="font-bold text-foreground mb-2">
              How do I add a subscription?
            </h3>
            <p className="text-sm text-muted-foreground">
              Click the "Add Subscription" button on the dashboard and fill in the details
              of your subscription service.
            </p>
          </div>

          <div className="card-professional p-4">
            <h3 className="font-bold text-foreground mb-2">
              Is my data secure?
            </h3>
            <p className="text-sm text-muted-foreground">
              Yes, we use industry-standard encryption and never store sensitive payment
              information.
            </p>
          </div>

          <div className="card-professional p-4">
            <h3 className="font-bold text-foreground mb-2">
              Can I export my data?
            </h3>
            <p className="text-sm text-muted-foreground">
              Yes, you can export your subscription data as CSV or PDF from your account
              settings.
            </p>
          </div>

          <div className="card-professional p-4">
            <h3 className="font-bold text-foreground mb-2">
              Do you offer customer support?
            </h3>
            <p className="text-sm text-muted-foreground">
              Yes, our support team is available Monday-Friday, 9AM-6PM IST via email or phone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

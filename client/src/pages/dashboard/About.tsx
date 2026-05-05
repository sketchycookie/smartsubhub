import { Heart, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          About Smart Subscription Hub
        </h1>
        <p className="text-lg text-muted-foreground">
          Your complete solution for managing digital subscriptions
        </p>
      </div>

      {/* Mission */}
      <div className="card-professional p-6">
        <div className="flex items-start gap-4">
          <Target size={32} className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">
              Our Mission
            </h2>
            <p className="text-muted-foreground">
              We believe managing subscriptions shouldn't be complicated. Smart Subscription Hub
              helps you take control of your digital subscriptions, save money, and discover
              services that truly add value to your life.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card-professional p-4">
            <div className="flex items-start gap-3 mb-3">
              <Zap size={24} className="text-accent flex-shrink-0" />
              <h3 className="font-bold text-foreground">Smart Tracking</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Keep all your subscriptions in one place with automatic renewal reminders
            </p>
          </div>

          <div className="card-professional p-4">
            <div className="flex items-start gap-3 mb-3">
              <Heart size={24} className="text-destructive flex-shrink-0" />
              <h3 className="font-bold text-foreground">Savings Insights</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover how much you're spending and find opportunities to save
            </p>
          </div>

          <div className="card-professional p-4">
            <div className="flex items-start gap-3 mb-3">
              <Users size={24} className="text-primary flex-shrink-0" />
              <h3 className="font-bold text-foreground">Recommendations</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Get personalized suggestions based on your usage patterns
            </p>
          </div>

          <div className="card-professional p-4">
            <div className="flex items-start gap-3 mb-3">
              <Target size={24} className="text-green-600 flex-shrink-0" />
              <h3 className="font-bold text-foreground">Analytics</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Understand your spending trends with detailed charts and insights
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card-professional p-4 text-center">
          <div className="text-3xl font-bold text-primary mb-2">10K+</div>
          <p className="text-sm text-muted-foreground">Active Users</p>
        </div>
        <div className="card-professional p-4 text-center">
          <div className="text-3xl font-bold text-accent mb-2">₹2M+</div>
          <p className="text-sm text-muted-foreground">Saved by Users</p>
        </div>
        <div className="card-professional p-4 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
          <p className="text-sm text-muted-foreground">Supported Services</p>
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Our Values</h2>
        <div className="space-y-3">
          <div className="card-professional p-4">
            <h3 className="font-bold text-foreground mb-2">Transparency</h3>
            <p className="text-sm text-muted-foreground">
              We believe in clear, honest communication about subscription costs and benefits
            </p>
          </div>
          <div className="card-professional p-4">
            <h3 className="font-bold text-foreground mb-2">Privacy</h3>
            <p className="text-sm text-muted-foreground">
              Your data is yours. We never sell or share your subscription information
            </p>
          </div>
          <div className="card-professional p-4">
            <h3 className="font-bold text-foreground mb-2">Empowerment</h3>
            <p className="text-sm text-muted-foreground">
              We empower users to make informed decisions about their subscriptions
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">
          Ready to Take Control?
        </h3>
        <p className="text-muted-foreground mb-4">
          Start managing your subscriptions smarter today
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          Get Started
        </Button>
      </div>
    </div>
  );
}

import { Search, Filter, Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import RecommendationCard from "@/components/RecommendationCard";

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Entertainment", "Productivity", "Music", "Design", "Storage"];

  const allSubscriptions = [
    {
      name: "YouTube Premium",
      description: "Ad-free videos and offline viewing",
      originalPrice: 129,
      discountedPrice: 99,
      discount: 14,
      reason: "You watch videos daily - save with annual plan",
      category: "Entertainment",
      rating: 4.7,
    },
    {
      name: "Microsoft 365",
      description: "Office + Cloud Storage",
      originalPrice: 489,
      discountedPrice: 360,
      discount: 30,
      reason: "Student discount available - you're eligible",
      category: "Productivity",
      rating: 4.6,
    },
    {
      name: "Figma",
      description: "Collaborative design tool",
      originalPrice: 1399,
      discountedPrice: 1250,
      discount: 17,
      reason: "Perfect for your design workflow",
      category: "Design",
      rating: 4.8,
    },
    {
      name: "Notion",
      description: "All-in-one workspace",
      originalPrice: 559,
      discountedPrice: 449,
      discount: 10,
      reason: "Great for organization and productivity",
      category: "Productivity",
      rating: 4.5,
    },
    {
      name: "Dropbox Plus",
      description: "2TB cloud storage",
      originalPrice: 879,
      discountedPrice: 712,
      discount: 17,
      reason: "Upgrade your storage capacity",
      category: "Storage",
      rating: 4.4,
    },
    {
      name: "Apple Music",
      description: "Millions of songs",
      originalPrice: 99,
      discountedPrice: 79,
      discount: 18,
      reason: "Seamless integration with Apple devices",
      category: "Music",
      rating: 4.6,
    },
  ];

  const filteredSubscriptions = allSubscriptions.filter((sub) => {
    const matchesSearch = sub.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || sub.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Explore Subscriptions
        </h1>
        <p className="text-muted-foreground">
          Discover new subscriptions and find deals tailored to you
        </p>
      </div>

      {/* Search & Filter */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search subscriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Filter Button */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-foreground">
            <Filter size={18} />
            <span className="hidden sm:inline">Advanced</span>
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ₹{
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={20} className="text-accent" />
          <span className="font-bold text-accent">Trending Now</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Save up to 40% with Annual Plans
        </h3>
        <p className="text-muted-foreground mb-4">
          Switch to annual billing and unlock significant savings on your favorite subscriptions
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          View Annual Deals
        </Button>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Showing {filteredSubscriptions.length} subscriptions
        </span>
        <select className="px-3 py-1 border border-border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
          <option>Most Popular</option>
          <option>Best Savings</option>
          <option>Highest Rated</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Subscriptions Grid */}
      <div>
        {filteredSubscriptions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSubscriptions.map((sub) => (
              <RecommendationCard key={sub.name} {...sub} />
            ))}
          </div>
        ) : (
          <div className="card-professional p-12 text-center">
            <p className="text-muted-foreground mb-4">
              No subscriptions found matching your criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

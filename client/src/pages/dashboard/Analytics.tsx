import { BarChart3, TrendingUp, Users, Zap } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  // 🔹 Same data source (keep consistent across app)
  const subscriptions = [
    {
      name: "Netflix",
      price: 199,
      billingCycle: "monthly",
      category: "Entertainment",
    },
    {
      name: "Spotify",
      price: 119,
      billingCycle: "monthly",
      category: "Music",
    },
    {
      name: "Adobe Creative Cloud",
      price: 3489,
      billingCycle: "monthly",
      category: "Productivity",
    },
    {
      name: "Microsoft 365",
      price: 489,
      billingCycle: "monthly",
      category: "Productivity",
    },
    {
      name: "Amazon Prime",
      price: 1499,
      billingCycle: "yearly",
      category: "Shopping",
    },
    {
      name: "Google Drive",
      price: 130,
      billingCycle: "monthly",
      category: "Storage",
    },
  ];

  // 🔹 Core Metrics
  const totalSubscriptions = subscriptions.length;

  const monthlyCost = subscriptions.reduce((sum, sub) => {
    return sum + (sub.billingCycle === "yearly" ? sub.price / 12 : sub.price);
  }, 0);

  const avgPerSub = monthlyCost / totalSubscriptions;

  const usageScore = Math.min(100, 60 + totalSubscriptions * 5);

  // 🔹 Weekly Spending (derived)
  const weeklyBase = monthlyCost / 4;

  const spendingData = [
    { week: "Week 1", amount: weeklyBase * 0.95 },
    { week: "Week 2", amount: weeklyBase },
    { week: "Week 3", amount: weeklyBase * 1.05 },
    { week: "Week 4", amount: weeklyBase },
  ];

  // 🔹 Category Breakdown (dynamic)
  const categoryMap: Record<string, number> = {};

  subscriptions.forEach((sub) => {
    const monthly =
      sub.billingCycle === "yearly" ? sub.price / 12 : sub.price;

    categoryMap[sub.category] =
      (categoryMap[sub.category] || 0) + monthly;
  });

  const categoryData = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Analytics
        </h1>
        <p className="text-muted-foreground">
          Deep insights into your subscription usage and spending patterns
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Total Subscriptions
            </span>
            <Zap size={18} className="text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            {totalSubscriptions}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Active services
          </p>
        </div>

        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Monthly Cost
            </span>
            <BarChart3 size={18} className="text-accent" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            ₹{monthlyCost.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Across all subscriptions
          </p>
        </div>

        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Avg. Per Subscription
            </span>
            <TrendingUp size={18} className="text-green-600" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            ₹{avgPerSub.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Monthly average
          </p>
        </div>

        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Usage Score
            </span>
            <Users size={18} className="text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            {usageScore}%
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Estimated engagement
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Spending */}
        <div className="card-professional p-4">
          <h3 className="font-semibold text-foreground mb-4">
            Weekly Spending
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={spendingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="week" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                formatter={(value: any) =>
                  `₹${Number(value).toFixed(2)}`
                }
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="amount" fill="#1e3a8a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="card-professional p-4">
          <h3 className="font-semibold text-foreground mb-4">
            Category Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" />
              <YAxis
                dataKey="name"
                type="category"
                stroke="#64748b"
                width={120}
              />
              <Tooltip
                formatter={(value: any) =>
                  `₹${Number(value).toFixed(2)}`
                }
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" fill="#2563eb" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">
          Recommendations
        </h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Consider reviewing low-usage subscriptions</li>
          <li>• Switch to yearly plans to save more</li>
          <li>• Bundle services where possible</li>
        </ul>
      </div>
    </div>
  );
}
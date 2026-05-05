import { TrendingDown, TrendingUp, DollarSign, Zap, IndianRupee } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function SavingsTracker() {
  const monthlyData = [
    { month: "Jan", spent: 3200, saved: 900 },
    { month: "Feb", spent: 3500, saved: 1100 },
    { month: "Mar", spent: 3807, saved: 1200 },
    { month: "Apr", spent: 3400, saved: 1500 },
    { month: "May", spent: 3900, saved: 1700 },
    { month: "Jun", spent: 3600, saved: 2000 },
  ];

  const categorySpending = [
    { name: "Entertainment", value: 21.98, color: "#1e3a8a" },
    { name: "Productivity", value: 64.98, color: "#2563eb" },
    { name: "Music", value: 5.99, color: "#0891b2" },
    { name: "Storage", value: 1.99, color: "#06b6d4" },
    { name: "Shopping", value: 139.0, color: "#3b82f6" },
  ];

  const totalSpent = monthlyData.reduce((sum, m) => sum + m.spent, 0);
  const totalSaved = monthlyData.reduce((sum, m) => sum + m.saved, 0);
  const averageMonthly = (totalSpent / monthlyData.length).toFixed(2);
  const potentialSavings = 156.0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Savings Tracker
        </h1>
        <p className="text-muted-foreground">
          Monitor your spending and discover savings opportunities
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Average Monthly
            </span>
            <IndianRupee size={18} className="text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            ₹{averageMonthly}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Last 6 months
          </p>
        </div>

        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Total Spent
            </span>
            <TrendingUp size={18} className="text-destructive" />
          </div>
          <div className="text-2xl font-bold text-foreground">
            ₹{totalSpent.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            6 months total
          </p>
        </div>

        <div className="card-professional p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Already Saved
            </span>
            <TrendingDown size={18} className="text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600">
            ₹{totalSaved.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Through smart choices
          </p>
        </div>

        <div className="card-professional p-4 border-accent/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Potential Savings
            </span>
            <Zap size={18} className="text-accent" />
          </div>
          <div className="text-2xl font-bold text-accent">
            ₹{potentialSavings.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Available now
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending Trend */}
        <div className="card-professional p-4">
          <h3 className="font-semibold text-foreground mb-4">Spending Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="spent"
                stroke="#1e3a8a"
                strokeWidth={2}
                dot={{ fill: "#1e3a8a" }}
                name="Amount Spent"
              />
              <Line
                type="monotone"
                dataKey="saved"
                stroke="#16a34a"
                strokeWidth={2}
                dot={{ fill: "#16a34a" }}
                name="Amount Saved"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Breakdown */}
        <div className="card-professional p-4">
          <h3 className="font-semibold text-foreground mb-4">
            Spending by Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categorySpending}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ₹${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categorySpending.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip  
                formatter={(value: any) => `₹${Number(value).toFixed(2)}`}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Breakdown Table */}
      <div className="card-professional p-4">
        <h3 className="font-semibold text-foreground mb-4">Monthly Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-muted-foreground font-medium">
                  Month
                </th>
                <th className="text-right py-2 text-muted-foreground font-medium">
                  Amount Spent
                </th>
                <th className="text-right py-2 text-muted-foreground font-medium">
                  Amount Saved
                </th>
                <th className="text-right py-2 text-muted-foreground font-medium">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-3 text-foreground font-medium">{row.month}</td>
                  <td className="text-right py-3 text-foreground">
                    ₹{row.spent.toFixed(2)}
                  </td>
                  <td className="text-right py-3 text-green-600 font-medium">
                    ₹{row.saved.toFixed(2)}
                  </td>
                  <td className="text-right py-3 text-foreground font-medium">
                    ₹{(row.spent + row.saved).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
        <h3 className="font-semibold text-foreground mb-3">Insights</h3>
        <ul className="space-y-2 text-sm text-foreground">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>Your spending has increased by 12.9% since January</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>Productivity apps are your largest expense category</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>You could save ₹156 by switching to annual plans</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

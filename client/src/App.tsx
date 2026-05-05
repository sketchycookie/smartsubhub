import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import DashboardLayout from "./components/DashboardLayout";

// Auth Pages
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

// Dashboard Pages
import Home from "./pages/dashboard/Home";
import Subscriptions from "./pages/dashboard/Subscriptions";
import RenewalCalendar from "./pages/dashboard/RenewalCalendar";
import SavingsTracker from "./pages/dashboard/SavingsTracker";
import Categories from "./pages/dashboard/Categories";
import Explore from "./pages/dashboard/Explore";
import Analytics from "./pages/dashboard/Analytics";
import About from "./pages/dashboard/About";
import Contact from "./pages/dashboard/Contact";

function Router() {
  return (
    <Switch>
      {/* Auth Routes */}
      <Route path="/" component={Signup} />
      <Route path="/login" component={Login} />

      {/* Dashboard Routes */}
      <Route path="/dashboard/home">
        {() => (
          <DashboardLayout>
            <Home />
          </DashboardLayout>
        )}
      </Route>
      <Route path="/dashboard/subscriptions">
        {() => (
          <DashboardLayout>
            <Subscriptions />
          </DashboardLayout>
        )}
      </Route>
      <Route path="/dashboard/calendar">
        {() => (
          <DashboardLayout>
            <RenewalCalendar />
          </DashboardLayout>
        )}
      </Route>
      <Route path="/dashboard/savings">
        {() => (
          <DashboardLayout>
            <SavingsTracker />
          </DashboardLayout>
        )}
      </Route>
      <Route path="/dashboard/categories">
        {() => (
          <DashboardLayout>
            <Categories />
          </DashboardLayout>
        )}
      </Route>
      <Route path="/dashboard/explore">
        {() => (
          <DashboardLayout>
            <Explore />
          </DashboardLayout>
        )}
      </Route>
      <Route path="/dashboard/analytics">
        {() => (
          <DashboardLayout>
            <Analytics />
          </DashboardLayout>
        )}
      </Route>
      <Route path="/dashboard/about">
        {() => (
          <DashboardLayout>
            <About />
          </DashboardLayout>
        )}
      </Route>
      <Route path="/dashboard/contact">
        {() => (
          <DashboardLayout>
            <Contact />
          </DashboardLayout>
        )}
      </Route>

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

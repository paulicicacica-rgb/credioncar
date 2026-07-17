import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Disclosures from "@/pages/Disclosures";
import FAQ from "@/pages/FAQ";
import HowItWorks from "@/pages/HowItWorks";
import NotFound from "@/pages/NotFound";
import Pricing from "@/pages/Pricing";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/how-it-works"} component={HowItWorks} />
      <Route path={"/pricing"} component={Pricing} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/about"} component={About} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/disclosures"} component={Disclosures} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - Light theme with warm cream background and deep charcoal text
// - Orange accent color for CTAs and key elements
// - Poppins for headers, Inter for body text

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

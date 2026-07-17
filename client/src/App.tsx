/**
 * Forensic Ember routing: a focused editorial journey separates investor,
 * counsel, approach, and firm narratives while preserving one brand system.
 * Blog routes added 2026-07-17.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Approach from "./pages/Approach";
import Investors from "./pages/Investors";
import Counsel from "./pages/Counsel";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import SiteLayout from "./components/SiteLayout";


function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/approach"} component={Approach} />
        <Route path={"/investors"} component={Investors} />
        <Route path={"/counsel"} component={Counsel} />
        <Route path={"/about"} component={About} />
        <Route path={"/blog"} component={Blog} />
        <Route path={"/blog/:slug"} component={BlogPost} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

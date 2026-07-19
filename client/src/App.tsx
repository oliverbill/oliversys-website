/**
 * Forensic Ember routing: a focused editorial journey separates investor,
 * counsel, approach, and firm narratives while preserving one brand system.
 * Blog routes added 2026-07-17.
 * i18n routes added 2026-07-19: /pt/... and /es/... locale prefixes.
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
import ServiceRedFlagScan from "./pages/ServiceRedFlagScan";
import ServiceFullTDD from "./pages/ServiceFullTDD";
import ServiceSpotCheck from "./pages/ServiceSpotCheck";
import SiteLayout from "./components/SiteLayout";
import { LocaleProvider } from "./i18n";

// Pages shared across all locale prefixes.
const ROUTES = [
  { path: "/", component: Home },
  { path: "/approach", component: Approach },
  { path: "/investors", component: Investors },
  { path: "/counsel", component: Counsel },
  { path: "/about", component: About },
  { path: "/blog", component: Blog },
  { path: "/blog/:slug", component: BlogPost },
  { path: "/services/spot-check", component: ServiceSpotCheck },
  { path: "/services/spot-check/", component: ServiceSpotCheck },
  { path: "/services/red-flag-scan", component: ServiceRedFlagScan },
  { path: "/services/red-flag-scan/", component: ServiceRedFlagScan },
  { path: "/services/full-technical-due-diligence", component: ServiceFullTDD },
  { path: "/services/full-technical-due-diligence/", component: ServiceFullTDD },
];

// Build route list: bare paths + /pt/... + /es/... prefixed paths.
function buildRoutes() {
  const prefixes = ["", "/pt", "/es"];
  return prefixes.flatMap((prefix) =>
    ROUTES.map(({ path, component }) => ({
      path: prefix + path,
      component,
    })),
  );
}

function Router() {
  return (
    <LocaleProvider>
      <SiteLayout>
        <Switch>
          {buildRoutes().map(({ path, component: Component }) => (
            <Route key={path} path={path} component={Component} />
          ))}
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </SiteLayout>
    </LocaleProvider>
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

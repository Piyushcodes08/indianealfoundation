import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Events from "@/pages/Events";
import OurWork from "@/pages/OurWork";
import WomenEmpowerment from "@/pages/WomenEmpowerment";
import ChildEducation from "@/pages/ChildEducation";
import HealthNutrition from "@/pages/HealthNutrition";
import AnimalWelfare from "@/pages/AnimalWelfare";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/our-work" component={OurWork} />
          <Route path="/women-empowerment" component={WomenEmpowerment} />
          <Route path="/child-education" component={ChildEducation} />
          <Route path="/health-nutrition" component={HealthNutrition} />
          <Route path="/animal-welfare" component={AnimalWelfare} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;

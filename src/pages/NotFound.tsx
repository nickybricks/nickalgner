import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageTransition } from "@/components/PageTransition";
import { Header } from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex min-h-[80vh] items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-semibold text-foreground">404</h1>
            <p className="text-lg text-muted-foreground">Page not found</p>
            <a 
              href="/" 
              className="inline-block mt-4 text-sm text-primary hover:text-primary/80 transition-colors duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;

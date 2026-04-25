import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main id="main-content" className="relative">
      <Navbar />
      {children}
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default PageLayout;

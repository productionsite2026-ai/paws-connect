import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { content, navLinks } from "@/data/content";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Aller au contenu principal
      </a>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-lg text-primary">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-hero-gradient shadow-elegant">
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="leading-tight">
            Artisan <span className="text-accent">Saint Louis</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-smooth relative ${
                location.pathname === l.href ? "text-accent" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {l.label}
              {location.pathname === l.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button size="sm" variant="accent-outline" asChild className="gap-2">
            <a href={`tel:${content.company.contact.mobileRaw}`}>
              <Phone className="h-4 w-4" /> {content.company.contact.phoneMobile}
            </a>
          </Button>
          <Button size="sm" variant="accent" asChild>
            <a href="#devis">Devis gratuit</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 space-y-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`block py-2.5 text-sm font-medium transition-smooth ${
                    location.pathname === l.href ? "text-accent" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-3">
                <Button size="sm" variant="accent-outline" asChild className="w-full gap-2">
                  <a href={`tel:${content.company.contact.mobileRaw}`}>
                    <Phone className="h-4 w-4" /> {content.company.contact.phoneMobile}
                  </a>
                </Button>
                <Button size="sm" variant="accent" asChild className="w-full">
                  <a href="#devis">Devis gratuit</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Explore", href: "#home" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "How it works", href: "#how-it-works" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef(null);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    clickCount.current += 1;
    clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 1500);

    if (clickCount.current === 5) {
      setEasterEgg(true);
      clickCount.current = 0;
      setTimeout(() => setEasterEgg(false), 2600);
    }
  };

  useEffect(() => () => clearTimeout(clickTimer.current), []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-ivory)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <button
          onClick={handleLogoClick}
          className="text-xl font-extrabold tracking-tight text-[var(--color-charcoal)] cursor-pointer"
          aria-label="ROAM home"
        >
          ROAM
        </button>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-charcoal-soft)] transition-colors hover:text-[var(--color-forest)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#booking"
            className="inline-flex items-center rounded-full bg-[var(--color-forest)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-forest-dark)]"
          >
            Find a car
          </a>
        </div>

        <button
          className="md:hidden text-[var(--color-charcoal)]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-[var(--color-border)] md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-[var(--color-charcoal-soft)] hover:bg-[var(--color-ivory-soft)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-forest)] px-5 py-3 text-base font-semibold text-white"
              >
                Find a car
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {easterEgg && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 rounded-full bg-[var(--color-charcoal)] px-4 py-2 text-sm font-medium text-[var(--color-ivory)] shadow-lg"
          >
            You found the shortcut. 🚗
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

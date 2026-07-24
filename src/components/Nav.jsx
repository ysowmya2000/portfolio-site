import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-ink-100 bg-white/60 backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-accent-500 to-sky-400"
      />

      <nav className="mx-auto flex max-w-[min(92%,1280px)] items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-2xl font-semibold tracking-tight text-ink-950">
          {name}
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm transition-colors ${
                    active === l.href
                      ? "font-medium text-accent-600"
                      : "text-ink-500 hover:text-ink-900"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="text-ink-900 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-ink-100 bg-white px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm ${
                  active === l.href
                    ? "font-medium text-accent-600"
                    : "text-ink-700"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

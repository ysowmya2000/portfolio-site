import { motion } from "framer-motion";
import { SectionHeading } from "./About";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Skills({ profile }) {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-ink-100 bg-ink-50">
      <div
        aria-hidden="true"
        className="animate-blob absolute -right-24 -top-16 h-80 w-80 rounded-full bg-accent-400/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob-slow absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sky-400/35 blur-3xl"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-[min(92%,1280px)] px-6 py-28 md:py-36">
        <SectionHeading number="05" eyebrow="Skills" title="What I work with" />

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {profile.skills.map((group, i) => (
            <motion.div
              key={group.category}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-xs font-medium uppercase tracking-widest text-ink-400">
                {group.category}
              </p>
              <div className="mt-2 border-t border-ink-200" />

              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="font-serif text-lg text-ink-950">
                    {item.name}
                    {item.note && (
                      <span className="ml-1.5 text-base italic text-ink-400">
                        {item.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { SectionHeading } from "./About";
import CompanyLogo from "./CompanyLogo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Education({ profile }) {
  return (
    <section id="education" className="relative overflow-hidden border-t border-ink-100 bg-ink-50">
      <div
        aria-hidden="true"
        className="animate-blob absolute -left-20 -top-16 h-80 w-80 rounded-full bg-accent-400/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob-slow absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-sky-400/35 blur-3xl"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-[min(92%,1280px)] px-6 py-28 md:py-36">
        <SectionHeading number="04" eyebrow="Education" title="Where I learned" />

        <div className="grid gap-6 sm:grid-cols-2">
          {profile.education.map((ed, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="rounded-2xl border border-white/70 bg-white/35 p-7 shadow-xl shadow-ink-900/10 backdrop-blur-2xl transition-all duration-300 hover:border-white/90 hover:bg-white/60 hover:shadow-2xl hover:shadow-ink-900/20 hover:backdrop-blur-3xl"
            >
              <CompanyLogo name={ed.school} logoUrl={ed.logo} size={64} />

              <h3 className="mt-5 font-serif text-xl font-semibold text-ink-950">
                {ed.school}
              </h3>
              <p className="mt-1 text-sm text-ink-700">{ed.degree}</p>

              {ed.coursework && ed.coursework.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-ink-400">
                    Select coursework
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {ed.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-ink-200 bg-white px-3 py-1 text-sm text-ink-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-ink-100 pt-5 text-sm text-ink-500">
                <span>{ed.period}</span>
                {ed.location && (
                  <>
                    <span className="text-ink-300">·</span>
                    <span>{ed.location}</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

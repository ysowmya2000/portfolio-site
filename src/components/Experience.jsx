import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./About";
import CompanyLogo from "./CompanyLogo";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Experience({ profile }) {
  return (
    <section id="experience" className="relative overflow-hidden border-t border-ink-100 bg-ink-50">
      <div
        aria-hidden="true"
        className="animate-blob absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-accent-400/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob-slow absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sky-400/35 blur-3xl"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-[min(92%,1280px)] px-6 py-28 md:py-36">
        <SectionHeading number="02" eyebrow="Experience" title="Where I've worked" />

        <div className="overflow-hidden rounded-3xl border border-white/70 shadow-xl shadow-ink-900/10 backdrop-blur-2xl">
          {profile.experience.map((job, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4, scale: 1.005 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative z-0 grid grid-cols-1 gap-4 border-b border-ink-100 p-6 last:border-b-0 hover:z-10 hover:border-transparent hover:bg-white/70 hover:shadow-2xl hover:shadow-ink-900/15 md:grid-cols-[7rem_17rem_minmax(10rem,1fr)_1.5rem] md:items-start md:gap-6 md:p-8 ${
                i % 2 === 0 ? "bg-white/50" : "bg-white/20"
              }`}
            >
              <p className="font-mono text-sm tracking-wide text-ink-700">
                {job.period}
              </p>

              <div className="flex items-start gap-3">
                <CompanyLogo name={job.org} logoUrl={job.logo} size={62} />
                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-semibold leading-tight text-ink-950">
                    {job.org}
                  </h3>
                  <p className="text-base text-ink-900">{job.role}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {job.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-base leading-relaxed text-ink-900"
                  >
                    <span className="mt-0.5 shrink-0 text-accent-500">→</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="hidden self-center text-ink-300 md:block">
                <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

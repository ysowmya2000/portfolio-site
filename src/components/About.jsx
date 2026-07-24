import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About({ profile }) {
  return (
    <section id="about" className="relative overflow-hidden border-t border-ink-100 bg-ink-950 py-28 md:py-36">
      <div
        aria-hidden="true"
        className="animate-blob absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob-slow absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-400/25 blur-3xl"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-[0.06]" />

      <div className="relative mx-auto max-w-[min(92%,1024px)] px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-accent-300">
            01 · About
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            A bit about me
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl"
        >
          <div className="space-y-5 text-balance leading-relaxed text-ink-200">
            {profile.about.map((p, i) => (
              <p
                key={i}
                className="text-lg [&_strong]:font-semibold [&_strong]:text-white"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeading({ number, eyebrow, title }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="mb-14"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-accent-500">
        {number ? `${number} · ${eyebrow}` : eyebrow}
      </p>
      <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}

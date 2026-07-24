import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DETAILS = [
  { label: "Email", value: "swmyerraguntla@gmail.com" },
  { label: "Phone", value: "" },
  { label: "Based in", value: "New York", note: "Willing to relocate" },
  { label: "Status", value: "Open to full-time roles and research collaborations" },
];

export default function Contact({ profile }) {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-ink-100 bg-ink-900">
      <div
        aria-hidden="true"
        className="animate-blob absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob-slow absolute right-1/4 bottom-0 h-64 w-64 translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto max-w-[min(92%,1024px)] px-6 py-24 md:py-32"
      >
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-400">
            06 · Contact
          </p>
          <h2 className="mt-2 text-balance font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Let's talk
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-lg leading-relaxed text-ink-200">
            Interested in discussing opportunities, collaboration, or just
            want to chat about evolving AI? I'd love to hear and learn from
            you!
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-accent-400 hover:via-accent-500 hover:to-sky-400"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-accent-400 hover:via-accent-500 hover:to-sky-400"
            >
              <GithubIcon size={20} />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {DETAILS.map((d) => (
              <div key={d.label}>
                <p className="text-sm font-medium uppercase tracking-widest text-ink-400">
                  {d.label}
                </p>
                {d.value && (
                  <p className="mt-2 text-lg font-medium text-white">{d.value}</p>
                )}
                {d.note && (
                  <p className="mt-1 text-base font-medium text-violet-400">{d.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <footer className="relative border-t border-ink-700 px-6 py-6 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} {profile.name}. Designed & built with my experience.
      </footer>
    </section>
  );
}

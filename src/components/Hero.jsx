import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Avatar from "./Avatar";

const OPEN_ROLES = [
  "AI Engineer",
  "ML Engineer",
  "LLM Engineer",
  "Data Scientist",
  "Data Engineer",
];

export default function Hero({ profile }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid px-6 pb-24 pt-20 md:pb-32 md:pt-28"
    >
      <div
        aria-hidden="true"
        className="animate-blob absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl md:h-96 md:w-96"
      />
      <div
        aria-hidden="true"
        className="animate-blob-slow absolute -right-16 top-32 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl md:h-80 md:w-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/60 to-white"
      />

      <div className="relative mx-auto flex max-w-[min(92%,1280px)] flex-col-reverse items-center gap-20 md:flex-row md:items-center md:justify-center md:gap-20">
        <div className="w-full md:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-1.5 text-sm font-medium text-accent-600 shadow-lg shadow-ink-900/5 backdrop-blur-2xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-5xl"
          >
            Hi, I'm {profile.name.split(" ")[0]} —{" "}
            <span className="bg-gradient-to-r from-accent-500 to-sky-400 bg-clip-text text-transparent">
              building AI that reasons, retrieves & scales.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-500"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl rounded-xl border border-violet-300/40 bg-violet-500/10 p-5 shadow-lg shadow-violet-900/5 backdrop-blur-2xl"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <p className="text-sm font-medium text-violet-700">
                Open to full-time roles, Dec 2026
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {OPEN_ROLES.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-violet-300/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 backdrop-blur-xl"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.resumeUrl}
              className="rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              download
            >
              Download resume
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-medium text-ink-900 transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-accent-400 hover:via-accent-500 hover:to-sky-400 hover:text-white"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-medium text-ink-900 transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-accent-400 hover:via-accent-500 hover:to-sky-400 hover:text-white"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowRight size={16} />
            </a>

            <a
              href={profile.socials.email}
              className="ml-1 text-ink-400 transition-colors hover:text-ink-900"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href="#about"
            className="mt-24 hidden items-center gap-2 text-xs font-medium uppercase tracking-widest text-ink-400 md:flex"
          >
            Scroll <ArrowDown size={14} />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Avatar
            name={profile.name}
            photoUrl={profile.photoUrl}
            width={252}
            height={332}
            className="md:!h-[25rem] md:!w-[19rem]"
          />
        </motion.div>
      </div>
    </section>
  );
}

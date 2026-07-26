import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./About";
import { GithubIcon } from "./icons";
import ProjectImage from "./ProjectImage";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Projects({ profile }) {
  return (
    <section id="projects" className="relative overflow-hidden border-t border-ink-100">
      <div
        aria-hidden="true"
        className="animate-blob absolute -left-24 top-0 h-80 w-80 rounded-full bg-sky-400/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob-slow absolute -right-16 bottom-10 h-96 w-96 rounded-full bg-accent-400/35 blur-3xl"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-[min(92%,1280px)] px-6 py-28 md:py-36">
        <SectionHeading number="03" eyebrow="Projects" title="What I've built" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/35 shadow-xl shadow-ink-900/10 backdrop-blur-2xl transition-shadow hover:shadow-2xl hover:shadow-ink-900/15"
            >
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/60">
                <ProjectImage src={p.image} alt={p.title} index={i} />
              </div>

              <div className="flex flex-1 flex-col p-7">
                {(p.category || p.year) && (
                  <p className="text-xs font-medium uppercase tracking-widest text-accent-500">
                    {p.category}
                    {p.category && p.year && " · "}
                    {p.year}
                  </p>
                )}

                <h3 className="mt-2 font-serif text-lg font-semibold text-ink-950">
                  {p.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5 border-t border-ink-100/60 pt-5">
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink-700 transition-colors hover:text-ink-900"
                    >
                      <GithubIcon size={18} />
                      GitHub
                    </a>
                  )}
                  {p.links.demo && (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-ink-700 transition-colors hover:text-ink-900"
                    >
                      Live demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

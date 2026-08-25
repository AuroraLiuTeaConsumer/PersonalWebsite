import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import AuroraBackground from "./components/AuroraBackground";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import { GithubIcon } from "./components/icons";

const links = {
  github: "https://github.com/AuroraLiuTeaConsumer",
  email: "auroraliu39@gmail.com",
  borealis: "https://www.borealisstudio.ca",
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AuroraBackground />

      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        {/* Hero */}
        <section className="animate-fade-up">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
            <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-fuchsia-400 via-pink-400 to-purple-500 opacity-70 blur-md" />
              <Image
                src="/profile.png"
                alt="Haiyang Liu"
                fill
                priority
                sizes="112px"
                className="relative rounded-full border-2 border-white object-cover shadow-lg shadow-purple-200/60"
              />
            </div>

            <div>
              <h1 className="font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                Haiyang Liu{" "}
                <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  (Aurora)
                </span>
              </h1>
              <p className="mt-2 text-lg font-light text-slate-500">
                Full-stack &amp; Web3 builder — founder of{" "}
                <a
                  href={links.borealis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 underline decoration-purple-300 underline-offset-4 transition hover:decoration-purple-500"
                >
                  Borealis Studio
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <a
              href={links.borealis}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-300/50 transition hover:-translate-y-0.5 hover:shadow-purple-400/60"
            >
              Borealis Studio
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-purple-200 hover:bg-purple-50/50"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-purple-200 hover:bg-purple-50/50"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              Email
            </a>
          </div>
        </section>

        {/* Now building */}
        <section
          className="animate-fade-up mt-28"
          style={{ animationDelay: "0.05s" }}
        >
          <SectionHeading eyebrow="Now building" />

          <a
            href={links.borealis}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-200/40 sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-fuchsia-300/25 blur-3xl transition-colors duration-300 group-hover:bg-fuchsia-300/40"
            />
            <div className="relative flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
                  Borealis Studio
                </h3>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600">
                  An independent studio exploring digital tools and experimental
                  software systems — the home for JobHunter, QuantBlock, and
                  whatever comes next. Built slowly and selectively.
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-purple-600" />
            </div>
            <p className="relative mt-6 text-sm font-medium text-purple-600">
              www.borealisstudio.ca
            </p>
          </a>
        </section>

        {/* Projects */}
        <section
          className="animate-fade-up mt-28"
          style={{ animationDelay: "0.1s" }}
        >
          <SectionHeading eyebrow="Projects" />
          <div className="grid gap-5 sm:grid-cols-2">
            <ProjectCard
              name="JobHunter"
              status="Live"
              statusTone="live"
              description="AI-powered job application automation — fetches listings and helps submit applications, so the tedious parts run themselves."
              href="https://github.com/AuroraLiuTeaConsumer/AutoJobAI"
            />
            <ProjectCard
              name="QuantBlock"
              status="Beta"
              statusTone="beta"
              description="A quantum computing platform designed for everyone — making quantum trading and programming approachable for newcomers."
              href="https://github.com/AuroraLiuTeaConsumer/QuantBlocks"
            />
          </div>
        </section>

        {/* About */}
        <section
          className="animate-fade-up mt-28"
          style={{ animationDelay: "0.15s" }}
        >
          <SectionHeading eyebrow="About" />
          <div className="space-y-5 text-[17px] leading-relaxed text-slate-600">
            <p>
              I&apos;m a developer who cares about building tools that actually
              help people. Currently studying at McGill University, Class of
              2027, while working across full-stack development and Web3 — trying
              to figure out where technology can make things easier instead of
              more complicated.
            </p>
            <p>
              I&apos;m drawn to problems that involve automation, accessibility,
              and making technical systems more approachable. Most of my work
              happens in the overlap between practical applications and emerging
              tech, which is what led me to start{" "}
              <a
                href={links.borealis}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 underline decoration-purple-300 underline-offset-4 transition hover:decoration-purple-500"
              >
                Borealis Studio
              </a>
              .
            </p>
          </div>
        </section>

        {/* Outside of code */}
        <section
          className="animate-fade-up mt-28"
          style={{ animationDelay: "0.2s" }}
        >
          <SectionHeading eyebrow="Outside of code" />
          <p className="text-[17px] leading-relaxed text-slate-600">
            I spend time traveling when I can, practicing pilates to balance out
            too many hours at a desk, and learning mixology — because making a
            good drink is surprisingly similar to debugging: precision,
            patience, and knowing when to start over.
          </p>
        </section>

        {/* Footer */}
        <footer
          className="animate-fade-up mt-28 flex flex-col items-center gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:justify-between"
          style={{ animationDelay: "0.25s" }}
        >
          <p>© {new Date().getFullYear()} Haiyang Liu</p>
          <div className="flex items-center gap-5">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-purple-600"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-1.5 transition hover:text-purple-600"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              {links.email}
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

import { ArrowUpRight } from "lucide-react";
import Badge from "./Badge";
import { GithubIcon } from "./icons";

export default function ProjectCard({
  name,
  status,
  statusTone,
  description,
  href,
}: {
  name: string;
  status: string;
  statusTone: "live" | "beta";
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-200/40 sm:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-300/0 blur-3xl transition-colors duration-300 group-hover:bg-fuchsia-300/30"
      />

      <div className="relative flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-medium tracking-tight text-slate-900 sm:text-2xl">
          {name}
        </h3>
        <Badge tone={statusTone}>{status}</Badge>
      </div>

      <p className="relative mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
        {description}
      </p>

      <div className="relative mt-6 flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors group-hover:text-purple-700">
        <GithubIcon className="h-4 w-4" />
        <span>View on GitHub</span>
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </div>
    </a>
  );
}

const styles = {
  live: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  beta: "bg-amber-50 text-amber-700 ring-amber-600/20",
  neutral: "bg-slate-50 text-slate-600 ring-slate-500/15",
} as const;

export default function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: keyof typeof styles;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${styles[tone]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === "live"
            ? "bg-emerald-500"
            : tone === "beta"
              ? "bg-amber-500"
              : "bg-slate-400"
        }`}
      />
      {children}
    </span>
  );
}

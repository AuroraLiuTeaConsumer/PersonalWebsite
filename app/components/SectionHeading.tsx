export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title?: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-purple-500">
        {eyebrow}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
      {title && (
        <span className="hidden text-sm text-slate-500 sm:block">{title}</span>
      )}
    </div>
  );
}

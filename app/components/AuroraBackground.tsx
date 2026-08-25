export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf2f8] via-white to-white" />

      <div className="animate-drift absolute -top-52 left-1/2 h-[40rem] w-[52rem] -translate-x-1/2 rounded-full bg-fuchsia-300/40 blur-[120px]" />
      <div
        className="animate-drift absolute -top-24 left-[8%] h-[26rem] w-[30rem] rounded-full bg-pink-300/35 blur-[110px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-drift absolute -top-10 right-[6%] h-[28rem] w-[32rem] rounded-full bg-purple-300/35 blur-[110px]"
        style={{ animationDelay: "-11s" }}
      />
      <div
        className="animate-drift absolute top-[38%] left-1/2 h-[22rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-200/30 blur-[130px]"
        style={{ animationDelay: "-3s" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
    </div>
  );
}

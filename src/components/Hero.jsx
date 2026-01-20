import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 bg-orange-500 text-black px-4 py-1 text-xs font-bold tracking-wide rotate-[-1deg]">
        💀 900+ DEAD STARTUPS
      </div>

      {/* Main headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-black">
        THE FOUNDER<br />
        AFTER-LIFE
      </h1>

      {/* Subheadline */}
      <p className="max-w-xl text-lg md:text-xl text-slate-700 mb-2">
        Where venture-backed startups died —
      </p>

      <p className="max-w-xl text-lg md:text-xl text-slate-700 mb-6">
        and what their founders and investors did next.
      </p>

      {/* Highlight line */}
      <p className="text-sm text-slate-500 mb-10 italic">
        “Failure didn’t end the story. It rewrote it. Well, for some”
      </p>

      {/* CTA row */}
      <div className="flex items-center gap-6">
        <a
          href="#afterlife"
          className="bg-orange-500 text-black px-6 py-3 font-bold rotate-[-2deg] hover:rotate-0 transition"
        >
          LOOT THE AFTER-LIFE
        </a>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>

      {/* Decorative grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </section>
  );
}

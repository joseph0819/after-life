import { ArrowDownRight } from "lucide-react";

/* -----------------------------
   Floating bubbles / dust
------------------------------ */
function Bubbles() {
  const bubbles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((_, i) => (
        <span
          key={i}
          className="absolute bottom-0 w-1 h-1 rounded-full bg-slate-400 opacity-20 animate-bubble"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 10}s`,
            transform: `scale(${0.5 + Math.random()})`,
          }}
        />
      ))}
    </div>
  );
}

/* -----------------------------
   Hero section
------------------------------ */
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Floating bubbles */}
      <Bubbles />

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 bg-orange-500 text-black px-4 py-1 text-xs font-bold tracking-wide rotate-[-2deg] shadow">
        💀 900+ DEAD STARTUPS
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 text-black">
        THE FOUNDER
        <br />
        AFTER-LIFE
      </h1>

      {/* Narrative */}
      <p className="max-w-xl text-lg md:text-xl text-slate-700 mb-3">
        Venture-backed startups died here.
      </p>
      <p className="max-w-xl text-lg md:text-xl text-slate-700 mb-8">
        The founders didn’t.
      </p>

      {/* Quote */}
      <p className="text-sm text-slate-500 italic mb-10">
        “Failure didn’t end the story. It just changed the chapter.”
      </p>

      {/* CTA */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <a
          href="#afterlife"
          className="bg-orange-500 text-black px-6 py-3 font-bold rotate-[-2deg] hover:rotate-0 transition shadow"
        >
          LOOT THE AFTER-LIFE
        </a>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Scroll to explore</span>
          <ArrowDownRight className="w-4 h-4 animate-bounce" />
        </div>
      </div>

      {/* Footer whisper */}
      <div className="absolute bottom-6 text-xs text-slate-400 tracking-wide">
        ONE PAGE · REAL CAREERS · NO COPIUM
      </div>
    </section>
  );
}

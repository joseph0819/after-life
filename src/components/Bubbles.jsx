export default function Bubbles() {
    const bubbles = Array.from({ length: 18 });
  
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 w-1 h-1 rounded-full bg-slate-400 opacity-20 animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
      </div>
    );
  }
  
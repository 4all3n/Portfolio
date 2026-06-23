import { useEffect, useState } from "react";

export function BackgroundGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none bg-[color:var(--bg)]">
      {/* Radial Gradient Blur Orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-35 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--accent-rgb), 0.35) 0%, transparent 70%)",
          top: "-10%",
          left: "-10%",
          animation: "drift1 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(219, 188, 127, 0.28) 0%, transparent 70%)",
          bottom: "-10%",
          right: "-10%",
          animation: "drift2 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(127, 187, 179, 0.22) 0%, transparent 70%)",
          top: "40%",
          left: "30%",
          animation: "drift1 30s ease-in-out infinite reverse",
        }}
      />
      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
        }}
      />
    </div>
  );
}

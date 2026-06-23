import { useState } from "react";
import { motion } from "framer-motion";

export function MockEditor() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRunningProgress, setIsRunningProgress] = useState(false);
  const [progressLines, setProgressLines] = useState<string[]>([]);

  const handleRun = () => {
    setIsPlaying(true);
    setIsRunningProgress(true);
    setProgressLines([]);

    const lines = [
      "> npm run dev",
      "> Initializing HarshProfile component...",
      "> Rendering profile-container div...",
      "> [useState] loaded: false (rendering button)",
      "> Button clicked: setLoaded(true)",
      "> [useState] loaded: true (rendering profile image)",
      "> Loading /harsh.jpg successfully resolved!",
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setProgressLines((prev) => [...prev, line]);
        if (index === lines.length - 1) {
          setTimeout(() => {
            setIsRunningProgress(false);
          }, 400);
        }
      }, index * 200);
    });
  };

  const reactCode = (
    <div className="text-xs sm:text-sm leading-relaxed font-mono select-text">
      <div>
        <span className="text-[#e67e80]">import</span> {"{"}{" "}
        <span className="text-[#dbbc7f]">useState</span> {"}"}{" "}
        <span className="text-[#e67e80]">from</span>{" "}
        <span className="text-[#a7c080]">"react"</span>;
      </div>
      <div className="mt-2">
        <span className="text-[#e67e80]">export default function</span>{" "}
        <span className="text-[#7fbbb3]">HarshProfile</span>() {"{"}
      </div>
      <div className="pl-4">
        <div>
          <span className="text-[#e67e80]">const</span> [
          <span className="text-[#dbbc7f]">loaded</span>,{" "}
          <span className="text-[#7fbbb3]">setLoaded</span>] ={" "}
          <span className="text-[#7fbbb3]">useState</span>(
          <span className="text-[#dbbc7f]">false</span>);
        </div>
        <div className="mt-3">
          <span className="text-[#e67e80]">return</span> (
        </div>
        <div className="pl-4">
          <div>
            &lt;<span className="text-[#dbbc7f]">div</span> className=
            <span className="text-[#a7c080]">"profile-container"</span>&gt;
          </div>
          <div className="pl-4">
            <div>
              {"{"}
              <span className="text-[#dbbc7f]">loaded</span> ? (
            </div>
            <div className="pl-4">
              <div>
                &lt;<span className="text-[#dbbc7f]">img</span> src=
                <span className="text-[#a7c080]">"/harsh.jpg"</span> alt=
                <span className="text-[#a7c080]">"Harsh"</span> /&gt;
              </div>
            </div>
            <div>) : (</div>
            <div className="pl-4">
              <div>
                &lt;<span className="text-[#dbbc7f]">button</span> onClick={"{"}
                () =&gt; <span className="text-[#7fbbb3]">setLoaded</span>(
                <span className="text-[#dbbc7f]">true</span>){"}"}&gt;
              </div>
              <div className="pl-4 text-[#859289]">Load Profile</div>
              <div>
                &lt;/<span className="text-[#dbbc7f]">button</span>&gt;
              </div>
            </div>
            <div>){"}"}</div>
          </div>
          <div>
            &lt;/<span className="text-[#dbbc7f]">div</span>&gt;
          </div>
        </div>
        <div>);</div>
      </div>
      <div>{"}"}</div>
    </div>
  );

  return (
    <div className="mock-editor surface-card-strong relative w-full overflow-hidden rounded-2xl border border-[color:var(--line-strong)] shadow-2xl h-[420px] md:h-[520px] lg:h-[600px] flex flex-col">
      {/* Editor Header */}
      <div className="flex items-center justify-between border-b border-[color:var(--line)] bg-[color:var(--bg-soft)] px-4 py-3 shrink-0">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs text-[color:var(--muted)] font-mono">
          VS Code - harsh_portfolio
        </span>
        <div className="w-12" />
      </div>

      {/* Editor Tabs & Controls */}
      <div className="flex items-center justify-between border-b border-[color:var(--line)] bg-[color:var(--bg-soft)] text-xs text-[color:var(--muted)] font-mono shrink-0">
        <div className="flex">
          <div className="flex items-center gap-2 border-r border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-2 text-[color:var(--text)] font-semibold">
            <span className="text-[#7fbbb3] font-bold">JS</span>{" "}
            HarshProfile.jsx
          </div>
          {isPlaying && (
            <div className="flex items-center gap-2 border-r border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-2 text-[#a7c080] font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#a7c080] animate-ping" />{" "}
              Live Preview
            </div>
          )}
        </div>

        {/* Play/Reset Button */}
        <div className="pr-3 flex gap-2">
          {!isPlaying ? (
            <button
              onClick={handleRun}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#a7c080] text-[color:var(--bg)] hover:scale-[1.02] transition font-bold font-sans text-xs tracking-wide shadow-md"
            >
              Run Code ▶
            </button>
          ) : (
            <button
              onClick={() => setIsPlaying(false)}
              className="flex items-center gap-1.5 px-3 py-1 rounded border border-[color:var(--line-strong)] hover:bg-[color:var(--bg)] transition text-[color:var(--text)] font-sans text-xs"
            >
              Reset ↩
            </button>
          )}
        </div>
      </div>

      {/* Code / Preview Area */}
      <div className="p-4 flex-1 bg-[color:var(--bg)] overflow-y-auto overflow-x-auto relative flex flex-col justify-center">
        {isPlaying ? (
          isRunningProgress ? (
            <div className="text-left font-mono text-xs sm:text-sm space-y-2 text-[#a7c080] self-start w-full">
              {progressLines.map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.startsWith("> npm")
                      ? "text-[#dbbc7f] font-semibold"
                      : ""
                  }
                >
                  {line}
                </div>
              ))}
              <span className="inline-block h-4 w-1.5 bg-[#a7c080] animate-pulse ml-0.5" />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center p-2 text-center w-full"
            >
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full border-4 border-[#a7c080]/30 overflow-hidden shadow-[var(--shadow-soft)] hover:border-[#a7c080] hover:scale-[1.03] transition duration-500">
                <img
                  src="/harsh.jpg"
                  alt="Harsh Pratap Singh"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Harsh Pratap Singh
              </h3>
              <p className="text-xs text-[color:var(--muted)] font-mono uppercase tracking-[0.2em] mt-1">
                Full-Stack Developer
              </p>
              <p className="text-xs text-[#a7c080] font-mono mt-1">
                ✓ component successfully rendered
              </p>

              <button
                onClick={() => setIsPlaying(false)}
                className="mt-4 button-secondary py-1.5 px-4 text-xs hover-lift"
              >
                Back to Code
              </button>
            </motion.div>
          )
        ) : (
          reactCode
        )}
      </div>
    </div>
  );
}

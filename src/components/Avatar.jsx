import { useState } from "react";

export default function Avatar({
  name,
  photoUrl,
  width = 260,
  height = 320,
  className = "",
}) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width, height }}
    >
      <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-accent-400 via-accent-500 to-sky-400 opacity-80 blur-md" />
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-xl shadow-ink-900/10 backdrop-blur">
        {photoUrl && !errored ? (
          <img
            src={photoUrl}
            alt={name}
            onError={() => setErrored(true)}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="flex h-[calc(100%-8px)] w-[calc(100%-8px)] items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-accent-500 to-sky-400">
            <span
              className="font-display font-semibold text-white"
              style={{ fontSize: Math.min(width, height) * 0.3 }}
            >
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

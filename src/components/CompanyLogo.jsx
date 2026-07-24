import { useState } from "react";

export default function CompanyLogo({ name, logoUrl, size = 52 }) {
  const [errored, setErrored] = useState(false);
  const initial = name ? name[0].toUpperCase() : "?";

  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-ink-100 bg-white shadow-sm shadow-ink-900/5"
      style={{ width: size, height: size }}
    >
      {logoUrl && !errored ? (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          onError={() => setErrored(true)}
          className="h-full w-full object-contain p-1"
        />
      ) : (
        <span
          className="font-display font-semibold text-accent-500"
          style={{ fontSize: size * 0.4 }}
        >
          {initial}
        </span>
      )}
    </div>
  );
}

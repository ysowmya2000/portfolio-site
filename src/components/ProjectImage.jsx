import { useState } from "react";
import { Code2 } from "lucide-react";

const GRADIENTS = [
  "from-accent-100 to-sky-100",
  "from-sky-100 to-lime-100",
  "from-lime-100 to-accent-100",
];

export default function ProjectImage({ src, alt, index = 0 }) {
  const [errored, setErrored] = useState(false);

  if (src && !errored) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]}`}
    >
      <Code2 size={40} className="text-ink-900/20" strokeWidth={1.5} />
    </div>
  );
}

import { useState, useEffect, useRef } from "react";

const MAX_LEN = 50;

const VimCursor = ({ className = "" }) => {
  const [typed, setTyped] = useState("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const handleKeyDown = (e) => {
      const active = document.activeElement;
      if (active?.tagName === "INPUT" || active?.tagName === "TEXTAREA"
          || active?.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "Backspace") {
        e.preventDefault();
        setTyped((t) => t.slice(0, -1));
      } else if (e.key.length === 1) {
        e.preventDefault();
        setTyped((t) => (t.length < MAX_LEN ? t + e.key : t));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {typed}
      <span className="vim-cursor" />
    </span>
  );
};

export default VimCursor;

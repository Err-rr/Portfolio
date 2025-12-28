import { useRef } from "react";
import "./Row.css";

export default function AutoScrollRow({ title }) {
  const rowRef = useRef(null);

  const handleWheel = (e) => {
    if (!rowRef.current) return;

    // Only hijack vertical scroll when hovering row
    e.preventDefault();

    rowRef.current.scrollBy({
      left: e.deltaY * 1.2,
      behavior: "smooth",
    });
  };

  return (
    <section className="row">
      <h2>{title}</h2>

      <div
        className="row-posters"
        ref={rowRef}
        onWheel={handleWheel}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="poster" />
        ))}
      </div>
    </section>
  );
}

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Row.css";

export default function AutoScrollRow({ title, items = [] }) {
  const rowRef = useRef(null);
  const navigate = useNavigate();

  const handleWheel = (e) => {
    if (!rowRef.current) return;
    e.preventDefault();

    rowRef.current.scrollBy({
      left: e.deltaY * 1.2,
      behavior: "smooth",
    });
  };

  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>

      <div
        className="row-posters"
        ref={rowRef}
        onWheel={handleWheel}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="poster"
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => navigate(item.link)}
          >
            <div className="poster-overlay" />
            <span className="poster-title">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

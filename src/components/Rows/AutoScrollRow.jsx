import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Row.css";

export default function AutoScrollRow({
  title,
  items = [],
  onItemClick,
  disableInteractions = false,
}) {
  const rowRef = useRef(null);
  const navigate = useNavigate();

  const handleWheel = (e) => {
    if (!rowRef.current || disableInteractions) return;
    e.preventDefault();

    rowRef.current.scrollBy({
      left: e.deltaY * 1.2,
      behavior: "smooth",
    });
  };

  const handlePosterClick = (item, e) => {
    if (disableInteractions) return;

    const shouldNavigate = onItemClick ? onItemClick(item, e) : true;
    if (shouldNavigate === false) return;

    navigate(item.link);
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
            onClick={(e) => handlePosterClick(item, e)}
          >
            <div className="poster-overlay" />
            <span className="poster-title">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

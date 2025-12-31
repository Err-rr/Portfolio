import { useNavigate } from "react-router-dom";
import "./Row.css";

export default function Row({ title, items = [] }) {
  const navigate = useNavigate();

  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>

      <div className="row-posters">
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

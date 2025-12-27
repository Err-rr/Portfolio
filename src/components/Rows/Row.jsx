import "./Row.css";

export default function Row({ title }) {
  return (
    <section className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="poster" />
        ))}
      </div>
    </section>
  );
}

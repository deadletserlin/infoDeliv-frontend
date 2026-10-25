import KartuGerai from "./KartuGerai";

function DaftarGerai({ dataGerai }) {
  return (
    <section className="panel">
      <div className="list-heading">
        <div>
          <h2>Daftar Gerai</h2>
          <p className="panel-description">
            Informasi gerai yang tersedia.
          </p>
        </div>

        <span className="list-count">
          {dataGerai.length} gerai
        </span>
      </div>

      {dataGerai.length === 0 ? (
        <p className="empty-state">
          Belum ada data Gerai
        </p>
      ) : (
        <div className="gerai-list">
          {dataGerai.map((gerai) => (
            <KartuGerai
              key={gerai.id}
              gerai={gerai}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default DaftarGerai;
function KartuGerai({ gerai }) {
    return (
      <article className="gerai-card">
        <div className="gerai-card-top">
          <span className="gerai-icon">🏪</span>
          <span className="gerai-status">Aktif</span>
        </div>
  
        <h3>{gerai.nama}</h3>
  
        <p className="gerai-region">
          📍 {gerai.wilayah}
        </p>
  
        <div className="gerai-fee">
          <span>Ongkos kirim</span>
          <strong>
            Rp{Number(gerai.ongkir).toLocaleString("id-ID")}
          </strong>
        </div>
      </article>
    );
  }
  
  export default KartuGerai;
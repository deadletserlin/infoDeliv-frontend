function RingkasanGerai({ jumlahGerai }) {
    return (
      <section className="summary">
        <div>
          <p className="summary-label">Total Gerai</p>
          <h2>{jumlahGerai}</h2>
        </div>
  
        <span className="summary-icon">🏪</span>
      </section>
    );
  }
  
  export default RingkasanGerai;
function FormGerai({ formData, onChange, onSubmit }) {
    return (
      <section className="panel">
        <h2>Tambah Gerai</h2>
        <p className="panel-description">
          Masukkan informasi gerai baru.
        </p>
  
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="nama">Nama Gerai</label>
            <input
              id="nama"
              name="nama"
              type="text"
              placeholder="Contoh: Gerai Seblakk"
              value={formData.nama}
              onChange={onChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="wilayah">Wilayah</label>
            <input
              id="wilayah"
              name="wilayah"
              type="text"
              placeholder="Contoh: Bandung"
              value={formData.wilayah}
              onChange={onChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="ongkir">Ongkos Kirim (Rp)</label>
            <input
              id="ongkir"
              name="ongkir"
              type="number"
              min="0"
              placeholder="Contoh: 5000"
              value={formData.ongkir}
              onChange={onChange}
              required
            />
          </div>
  
          <button type="submit" className="button-primary">
            + Tambah Gerai
          </button>
        </form>
      </section>
    );
  }
  
  export default FormGerai;
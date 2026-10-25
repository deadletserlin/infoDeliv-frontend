import { useState } from "react";
import Header from "./components/Header";
import RingkasanGerai from "./components/RingkasanGerai";
import FormGerai from "./components/FormGerai";
import DaftarGerai from "./components/DaftarGerai";
import "./App.css";

function App() {
  const [dataGerai, setDataGerai] = useState([]);

  const [formData, setFormData] = useState({
    nama: "",
    wilayah: "",
    ongkir: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const geraiBaru = {
      id: Date.now(),
      nama: formData.nama,
      wilayah: formData.wilayah,
      ongkir: formData.ongkir,
    };

    setDataGerai([...dataGerai, geraiBaru]);

    setFormData({
      nama: "",
      wilayah: "",
      ongkir: "",
    });
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="page-heading">
          <div>
            <p className="eyebrow">DASHBOARD</p>
            <h2>Kelola Data Gerai</h2>
            <p>
              Kelola informasi gerai dan ongkos kirim
              dengan mudah.
            </p>
          </div>
        </div>

        <RingkasanGerai
          jumlahGerai={dataGerai.length}
        />

        <div className="content-grid">
          <FormGerai
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

          <DaftarGerai
            dataGerai={dataGerai}
          />
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 InfoDeliv - Informasi Layanan Delivery</p>
      </footer>
    </div>
  );
}

export default App;
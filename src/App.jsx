import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { Card } from "reactstrap";

const ekMalzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

const boyutlar = ["Küçük", "Orta", "Büyük"];

const initialSiparis = {
  boyut: "",
  hamur: "",
  "ek-malzeme": "",
  "siparis-notu": "",
  adet: "1",
  fiyat: "",
};

const initialErrors = {
  boyut: "",
  hamur: "",
};

const errorMessages = {
  boyut: "Lütfen pizza boyutu seçiniz",
  hamur: "Lütfen hamur tipi seçiniz",
};

const pizza_boyut = ["küçük", "orta", "büyük"];
const pizza_ucreti = 85.5;

function App() {
  const [siparis, setSiparis] = useState(initialSiparis);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const [adet, setAdet] = useState(1);

  useEffect(() => {
    if (siparis.boyut !== "" && siparis.hamur !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [siparis]);

  function handleInputChange(event) {
    let { id, name, value } = event.target;

    //state'i güncelle
    if (id === "cikar") {
      setAdet((adet) => adet - 1);
    } else if (id === "ekle") {
      setAdet((adet) => adet + 1);
    }

    if (name === "ek-malzeme") {
      if (siparis["ek-malzeme"].includes(value)) {
        setSiparis({
          ...siparis,
          [name]: siparis["ek-malzeme"].filter((malzeme) => malzeme !== value),
        });
      } else {
        setSiparis({
          ...siparis,
          [name]: [...siparis["ek-malzeme"], value],
        });
      }
    } else {
      setSiparis({ ...siparis, [name]: value });
    }

    //validation kuralları
    if (name === "boyut") {
      if (siparis.boyut === "") {
        setErrors({ ...errors, [name]: errorMessages.boyut });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
    if (name === "hamur") {
      if (siparis.hamur === "") {
        setErrors({ ...errors, [name]: errorMessages.hamur });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
  }
  console.log(siparis);
  return (
    <>
    <section className="siparis-page">
      <Header />
      <Card>
      <Content ucret={pizza_ucreti} />
      <section className="boyut-hamur-area">
        <div className="boyut-area">
          <h3>Boyut seç</h3>
          {boyutlar.map((boyut, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="boyut"
                  value={boyut}
                  onChange={handleInputChange}
                  checked={siparis.boyut === boyut}
                />{" "}
                {boyut}
              </label>
            );
          })}
          {errors.boyut && <p className="error-message">{errors.boyut}</p>}
        </div>
        <div className="hamur-area">
          <h3>Hamur seç</h3>
          <label className="bold-label">
            <select
              value={siparis.hamur}
              name="hamur"
              onChange={handleInputChange}
            >
              <option value="İnce">İnce Hamur</option>
              <option value="Orta">Orta Hamur</option>
              <option value="Kalın">Kalın Hamur</option>
            </select>
          </label>
          {errors.hamur && <p className="error-message">{errors.hamur}</p>}
        </div>
      </section>
      <section className="ek-malzeme-area">
        <h3>Ek Malzemeler</h3>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="malzemeler">
        {ekMalzemeler.map((malzeme, index) => {
          return (
            <label key={index} className="malzeme">
              <input
                type="checkbox"
                name="ek-malzeme"
                value={malzeme}
                onChange={handleInputChange}
                checked={siparis["ek-malzeme"].includes(malzeme)}
              />{" "}
              {malzeme}
            </label>
          );
        })}
        </div>
      </section>
      <section className="siparis-notu">
        <h3>Sipariş Notu</h3>
        <label className="bold-label">
          <textarea
            id="siparis-notu"
            name="siparis-notu"
            value={siparis["siparis-notu"]}
            onChange={handleInputChange}
          />
        </label>
      </section>
      <section className="hesap-butonlari">
        <div className="adet-butonlari">
          <button
            id="cikar"
            name="adet"
            value={adet}
            onClick={handleInputChange}
          >
            -
          </button>
          <p id="adettendir" >{adet}</p>
          <button
            id="ekle"
            name="adet"
            value={adet}
            onClick={handleInputChange}
          >
            +
          </button>
        </div>
        <div className="siparis-toplami">
          <h3>Sipariş Toplamı</h3>
          <p>Seçimler..........{siparis["ek-malzeme"].length * 5}</p>
          <p id="kirmizi">
            Toplam..........
            {(pizza_ucreti + siparis["ek-malzeme"].length * 5) * adet}
          </p>
          <button disabled={!isValid} type="submit">
            SİPARİŞ VER
          </button>
        </div>
      </section>
      </Card>
      </section>
    </>
  );
}

export default App;

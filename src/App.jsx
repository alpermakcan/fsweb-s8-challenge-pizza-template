import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Content from "./assets/components/Content";
import { FormGroup, Input, Label } from "reactstrap";

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
const initialSiparis = {
  boyut: "",
  hamur: "",
  "ek-malzeme": "",
  siparis_notu: "",
  adet: "",
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

function App() {
  const [siparis, setSiparis] = useState(initialSiparis);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);

  function handleInputChange(event) {
    let { name, value, type, checked } = event.target;

    //state'i güncelle
    if (name === 'ek-malzeme') {
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
    

  }
  console.log(siparis);
  return (
    <>
      <Header />
      <Content />
      <div className="boyut-hamur-area">
        <div className="multiple-area">
          <h3>Departman seçiniz:</h3>
          <label>
            <input
              type="radio"
              name="boyut"
              value="küçük"
              onChange={handleInputChange}
              checked={siparis.boyut === "küçük"}
            />{" "}
            Küçük
          </label>
          <label>
            <input
              type="radio"
              name="boyut"
              value="orta"
              onChange={handleInputChange}
              checked={siparis.boyut === "orta"}
            />{" "}
            Orta
          </label>
          <label>
            <input
              type="radio"
              name="boyut"
              value="büyük"
              onChange={handleInputChange}
              checked={siparis.boyut === "büyük"}
            />{" "}
            Büyük
          </label>
          {errors.boyut && <p className="error-message">{errors.boyut}</p>}
        </div>
        <div className="multiple-area">
          <label className="bold-label">
            Hamur Seç
            <select
              value={siparis.hamur}
              name="hamur"
              onChange={handleInputChange}
            >
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalın</option>
            </select>
          </label>
        </div>
      </div>
      <div className="ek-malzeme-area">
        {ekMalzemeler.map((malzeme, index) => {
          return (
            <label key={index}>
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
    </>
  );
}

export default App;

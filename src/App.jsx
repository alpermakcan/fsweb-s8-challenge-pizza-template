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

const boyutlar = [
  "Küçük",
  "Orta",
  "Büyük"
]

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
          <h3>Boyut seç</h3>
          {boyutlar.map((boyut, index) => {
            return <label key={index}>
            <input
              type="radio"
              name="boyut"
              value={boyut}
              onChange={handleInputChange}
              checked={siparis.boyut === boyut}
            />{" "}
            {boyut}
          </label>
          })}
        </div>
        <div className="multiple-area">
          <h3>Hamur seç</h3>
          <label className="bold-label">
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

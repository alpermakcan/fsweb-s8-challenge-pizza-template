import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import Header from "./assets/components/Header";
import Content from "./assets/components/Content";

const initialSiparis = {
  boyut: "",
  hamur: "",
  ek_malzeme: "",
  siparis_notu: "",
  adet: "",
  fiyat: "",
};

const pizza_boyut = ["küçük", "orta", "büyük"];

function App() {
  const [siparis, setSiparis] = useState(initialSiparis);

  return (
    <>
      <Header />
      <Content />
      <div>
        <h3>Boyut seç</h3>
        {
          pizza_boyut.map((element, index) => {
            return <label>
          <input
            key={index}
            type="radio"
            name="boyut"
            value={element}
            checked={siparis.boyut == {element}}
          />
          {element}
        </label>
          })
        }
      </div>
    </>
  );
}

export default App;

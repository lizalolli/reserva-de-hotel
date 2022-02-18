import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Hoteles from "./components/Hoteles";
import { hotelsData } from "./Data";
import "./App.css";
import "./style.css";
import FilterOpciones from "./components/FilterOpciones";

function App() {
  const [pais, setPais] = useState("todos");
  const [precio, setPrecio] = useState("todos");
  const [tamaño, setTamaño] = useState("todos");
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");

  //ACA VAN LOS FILTROSSSSSS

  //FILTRO PAIS
  const hotelesFiltradosPorPais = hotelsData
    .filter((hotel) => {
      if (pais === "todos") {
        return true;
      } else {
        return hotel.country.toLowerCase() === pais.toLowerCase();
        //usamos toLowerCase para que el props y la categoría sean iguales exactamente y puedan ser llamados por el filtro.
      }
      //este segundo filtro, itera sobre los hoteles ya filtrados por país, luego se aplica
      //la llógica correspondiente para devolver el objeto hotel que tenga el tamaño que se pide.
    })
    .filter((hotel) => {
      if (tamaño === "todos") {
        return true;
      } else {
        if (tamaño === "todos") {
          return hotel.rooms <= 10;
        } else if (tamaño === "mediano") {
          return hotel.rooms > 10 && hotel.rooms < 20;
        } else {
          return hotel.rooms >= 20;
        }
      }
      //el 3er filtro actúa sobre los dos filtros anteriores, el esstringh se pasará a un número con .lenght.
      //Esta propiedad nos dirá cuántos "$" hay en precio y así podremos contrastar contra la propiedad
      //'price', la cuál es numérica.
    })
    .filter((hotel) => {
      if (precio === "todos") {
        return true;
      } else {
        let nivelPrecioNumero = precio.length;
        return hotel.price === nivelPrecioNumero;
      }
    })
    .filter((hotel) => {
      if (desde !== "" && hasta !== "") {
        let dayInMillis = 24 * 3600000;
        return (
          Math.floor(hotel.availabilityFrom / dayInMillis) <=
            Math.floor(new Date(desde + "T00:00:00").getTime() / dayInMillis) &&
          Math.floor(hotel.availabilityTo / dayInMillis) >=
            Math.floor(new Date(hasta + "T00:00:00").getTime() / dayInMillis)
        );
      }
      return hotel;
    });

  /*if (hotelesFiltradosPorPais.length == 0){
    alert("no hay hoteles :(")
    /*let tituloTexto = document.getElementById("hotelesContainer");
   tituloTexto = document.createElement("h2");
    let textoSinHotel = document.createTextNode("no hay hotels :(");
    tituloTexto.appendChild(textoSinHotel);*/

  // }

  return (
    <Fragment>
      <div className="container-body">
        <Header
          pais={pais}
          tamaño={tamaño}
          precio={precio}
          desde={desde}
          hasta={hasta}
        />

        {/*Llamamos las propiedades de cada filtro a través de props desde App para hacer
        estados globales */}
        <FilterOpciones
          pais={pais}
          tamaño={tamaño}
          precio={precio}
          desde={desde}
          hasta={hasta}
          setPais={setPais}
          setPrecio={setPrecio}
          setTamaño={setTamaño}
          setDesde={setDesde}
          setHasta={setHasta}
        />

        <Hoteles
          titulo="Lista de hoteles"
          filtros={hotelesFiltradosPorPais}
          id="hotelesContainer"
        />
      </div>
    </Fragment>
  );
}

export default App;

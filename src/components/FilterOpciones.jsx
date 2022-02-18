import React, { Fragment, useState } from "react";
import App from "../App";

function FilterOpciones({
  //props
  pais,
  precio,
  tamaño,
  desde,
  hasta,
  setPais,
  setPrecio,
  setTamaño,
  setDesde,
  setHasta
  //se pueden llamar así directamente o como props, añadiendo props.App a cada select en su value
  //props
}) {
  //SELECTORES DE FECHA
  const selectCambioDesde = (evento) => {
    setDesde(evento.target.value);
  };
  const selectCambioHasta = (evento) => {
    setHasta(evento.target.value);
  };

  //PAIS
  //vamos a controlar este select (pais) a través de un estado
  //const [country, setCountry] = useState("todos")
  //este estado inicial, 'country' se lo pasamos a 'select'
  //a través de 'value={country}' y le decimos que la primera opción del select
  //será 'todos' , es la manera dinámica de pasar el valor al select.

  //TAMAÑO
  //const [size, setSize] = useState("todos");

  //PRECIO
  //const [price, setPrice] = useState("todos");

  const selectPais = (evento) => {
    const paisSeleccionado = evento.target.value;
    //si hacemos console log conn este evento 'onChange' podemos encontrar en consola
    //dónde está el value de nuestros options, está en la proopiedad target.value (donde está el valor del país)
    //console.log(paisSeleccionado)
    //con este console puedo ver el país seleccionado en consola.
    setPais(paisSeleccionado);
    //set country actualiza el estado inicial
    //también podría ser: actualizarPais(evento.target.value);
  };

  const selectTamaño = (evento) => {
    const tamanoSeleccionado = evento.target.value;
    setTamaño(tamanoSeleccionado);
  };

  const selectPrecio = (evento) => {
    const precioSeleccionado = evento.target.value;
    setPrecio(precioSeleccionado);
  };
  //todos los eventos de etiqueta como 'onChange' reciben de forma gratuita
  //el objeto 'evento', este tiene info sobre el evento que se acaba de disparar en el momento.
  //esta función se ejecuta cuando hay un cambio en el 'select'

  const resetFiltros = () => {
    // resetear los filtros a su estado inicial
    setPais("todos");
    setPrecio("todos");
    setTamaño("todos");
    setDesde("");
    setHasta("");
  };

  return (
    <div className="container-filter">
      <div className="container">
        {/*FECHA DESDE*/}
        <div className="row filtros d-flex">
          <div className="col-6 col-md-3 col-lg-2 mb-3">
            <div className="fecha desde">
              <span>desde</span>
              <input onChange={selectCambioDesde} value={desde} type="date" />
            </div>
          </div>

          {/*FECHA HASTA*/}
          <div className="col-6 col-md-3 col-lg-2 mb-3">
            <div className="fecha hasta">
              <span>hasta</span>
              <input onChange={selectCambioHasta} value={hasta} type="date" />
            </div>
          </div>

          {/*El 'onChange' tenddrá una función que se encargará de pasar el estado por nosotros
                    para que al seleccionar los diferentes países, estos se filtren cuando
                    se seleccione uno en específico. ->selectPais -> nuestra función referenciada*/}
          {/*SELECT PAIS*/}
          <div className="col-6 col-md-3 col-lg-2 mb-3">
            <select value={pais} onChange={selectPais} name="" id="pais">
              <option value="todos">Todos los países</option>
              <option value="argentina">Argentina</option>
              <option value="brasil">Brasil</option>
              <option value="chile">Chile</option>
              <option value="uruguay">Uruguay</option>
            </select>
          </div>

          {/*SELECT TAMAÑO*/}
          <div className="col-6 col-md-3 col-lg-2 mb-3">
            <select value={tamaño} onChange={selectTamaño} name="" id="tamano">
              <option value="todos">Todos los tamaños</option>
              <option value="pequeño">Pequeño</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>
          </div>

          {/*SELECT PRECIO*/}
          <div className="col-6 col-md-3 col-lg-2 mb-3">
            <select value={precio} onChange={selectPrecio} name="" id="precio">
              <option value="todos">Todos los precios</option>
              <option value="$">Económico</option>
              <option value="$$">Confort</option>
              <option value="$$$">Lujos</option>
              <option value="$$$$">Magnífico</option>
            </select>
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-3">
            <button onClick={resetFiltros}>Limpiar filtros</button>
          </div>
        </div>
      </div>
    </div>
  );

  //en resumen, necesito el string de value para pasarlo a setCountry.
  //Ejemplo, si presiono 'uruguay' voy a pasar ese value a la const 'paisSeleccionado'
  //essta const la paso a través de 'setCountry', que actualiza el estado
  //setCountry va a tomar uruguay y va a decir que 'country' vale 'uruguay'
  //React renderiza de vuelta la interfaz gráfica con toda esta info
  //y dice que el 'select' -> value='uruguay' ya q está fijado en 'country' y 'country' es 'uruguay'
  //se pregunta quién es usuray hasta que encuentra la opción correcta, entonces ea es la opción que se muestra seleccionada en el select.
  //Esto pasará cada vez que se realice un cambio (onChange) en el select.

  //podré hacer un filter con country
}

export default FilterOpciones;

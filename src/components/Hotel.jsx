import React, { Fragment } from "react";

function Hotel(props) {
  //necesito 'activar' props pasándolo como parámetro a la función Hotel.
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="hotel d-flex card ">
          {/*aquí llamo las props de 'hoteles' que están en la etiqueta 'hotel'. cada prop
                    se llama desde una etiqueta del html, donde debe ir cada una (ej, en h4, el nombre del hotel.
                    se llaman como 'props' + el nombre que se le dió en la etiqueta 'hotel' en 'hoteles'*/}
          <img className="card-img-top" src={props.imagen} alt="1" />
          <h3>{props.nombre}</h3>
          <h5>Desde el {new Date(props.fechaIda).toLocaleDateString()}</h5>
          <h5>Hasta el {new Date(props.fechaVuelta).toLocaleDateString()}</h5>
          <div className="module overflow">
            <p>{props.descripcion}</p>
          </div>
          <h6>
            <i className="fas fa-map-marker-alt"></i>
            {props.pais}
          </h6>
          <div className="habitacion-precio d-flex">
            <h6>
              <i className="fas fa-bed"></i>habitaciones: {props.habitaciones}
            </h6>
            <h6>${props.precio}</h6>
          </div>
          <button>Reservar</button>
        </div>
      </div>
    </>
  );
}

export default Hotel;

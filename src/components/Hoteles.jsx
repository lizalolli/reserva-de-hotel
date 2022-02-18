import React, { Fragment } from "react";
import Hotel from "./Hotel";

function Hoteles(props) {
  //console.log(props.filtros.length)
  return (
    <>
      <div className="container-hoteles d-flex">
        <div className="hoteles d-flex">
          {props.filtros.length ? (
            props.filtros.map((hotel) => {
              /*acá creo el props que me llevará los datos hasta 'hotel'. en hotel los llamaré conmo
                props.name props.country. -> el nombre country, por ejemplo, proviene del mapeo
                que se realizo de 'listaHoteles' en data.jsx. se llama con el nombre que tienen
                allí como parámetro y para pasarlo desde hoteles lo llamo con el nomnbre del prop
                que se le  puso aquí
                */

              return (
                <Hotel
                  key={hotel.slug}
                  nombre={hotel.name}
                  pais={hotel.country}
                  imagen={hotel.photo}
                  fechaIda={hotel.availabilityFrom}
                  fechaVuelta={hotel.availabilityTo}
                  descripcion={hotel.description}
                  habitaciones={hotel.rooms}
                  precio={hotel.price}
                />
              );
            })
          ) : (
            <div className="errorMessage">
              <h4 className="my-5">
                No hay ningún hotel con estas características :(
              </h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Hoteles;

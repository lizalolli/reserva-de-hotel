import React, { Fragment, useState } from "react";
import { today } from "../Data";
import hotelsData from "../Data";

//revisar qué daross son los que debe traer eñ header realmente
function Header({ pais, tamaño, precio, desde, hasta }) {
  return (
    <>
      <div className="container-header">
        <div className="container">
          <h1 className="">Hoteles</h1>
          <h3 className="">
            {desde === "" ? (
              "Desde cualquier fecha, "
            ) : (
              <strong>
                Desde el:{" "}
                {new Date(desde).toLocaleDateString("es-CL", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC"
                })}{" "}
              </strong>
            )}
            {hasta === "" ? (
              "hasta cualquier fecha."
            ) : (
              <strong>
                , hasta el:{" "}
                {new Date(hasta).toLocaleDateString("es-CL", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC"
                })}{" "}
              </strong>
            )}
          </h3>
          <h5>El precio es: {precio}</h5>
          <h5>El tamaño es: {tamaño}</h5>
          <h5>El país es: {pais}</h5>
          {/*en este párrafo se refleja setCountry como 'country' realizando el 
                cambio de estado cuando ocurre un cambio en el selector*/}
        </div>
      </div>
    </>
  );
}
// Dentro del H2 deber reflejarse los resultados de los filtros

export default Header;

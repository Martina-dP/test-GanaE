import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";

function Card ({name, document, _id }){

    return(
        <div className={style.all}>
            <h2> {_id} </h2>
            <h2> {name} </h2>
            <h2> {document} </h2>
            <div>
            <Link to="/modifycontract">
              <button> Editar </button>
            </Link>
            <button> Eliminar </button>
            </div>
        </div>
    )} 

export default Card ;
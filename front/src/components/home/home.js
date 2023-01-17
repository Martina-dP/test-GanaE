import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./home.module.css";

const Home = () => {


  return (
    <div>
      <Link to="/form">
        <button className={style.btn}> Nuevo </button>
      </Link>
      <div className={style.title} >

          <h2> Id </h2>
          <h2> Nombre </h2>
          <h2> Documento </h2>
          <h2> Accion </h2>

      </div>
      <div className={style.info} >

          <h2>  </h2>
          <h2>  </h2>
          <h2>  </h2>
          <div>
            <button> Editar </button>
            <button> Eliminar </button>
          </div>

      </div>
    </div>
  );
};
export default Home;
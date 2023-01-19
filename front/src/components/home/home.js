import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContracts, getMunicipalitis } from "../../action/index"
import { Link  } from "react-router-dom";
import Foto1 from "../../img/plus.png"
import Card from "../card/card";
import style from "./home.module.css";

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() =>{ 
    dispatch(getContracts())
    dispatch(getMunicipalitis())
  },[dispatch])

  const contracts = useSelector(state => state.contract) 
  console.log(contracts, "contracts")

  return (
    <div>
      <Link to="/addcontract">
        <button className={style.btn}> 
          Nuevo <img className={style.img} src={Foto1} alt="notFound"/>
        </button>
      </Link>
      <div className={style.all} >
        <div className={style.title}>

          <h2 className={style.text}> Id </h2>
          <h2 className={style.text}> Nombre </h2>
          <h2 className={style.text}> Documento </h2>
          <h2 className={style.text}> Accion </h2>

        </div>
        <div className={style.info}>
          { contracts?.length > 0 ? (
            contracts.map((us) => {
              return (
                <Card 
                  key={us._id}
                  _id={us._id}
                  name = {us.name}
                  document = {us.document}
                />
              );
            }) ) : (
          <div>
            <p className={style.out}>No se encontraron usuarios</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
export default Home;
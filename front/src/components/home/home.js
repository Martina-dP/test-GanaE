import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContracts } from "../../action/index"
import { Link } from "react-router-dom";
import Card from "../card/card";
import style from "./home.module.css";

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() =>{ 
    dispatch(getContracts())
  },[dispatch])

  const contracts = useSelector(state => state.contract) 
  console.log(contracts, "contracts")

  return (
    <div>
      <Link to="/addcontract">
        <button> Nuevo </button>
      </Link>
      <div className={style.all} >
        <div className={style.title}>

          <h2> Id </h2>
          <h2> Nombre </h2>
          <h2> Documento </h2>
          <h2> Accion </h2>

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
            <p>No se encontraron usuarios</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
export default Home;
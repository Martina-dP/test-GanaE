import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { putContracts, getMunicipalitis } from "../../action/index"
import style from "./putDetail.module.css"

const Update = () => {

  const dispatch = useDispatch()
  const { _id } = useParams();

  useEffect(() =>{ 
    dispatch(putContracts(_id))
    dispatch(getMunicipalitis())
  },[dispatch])

  const contractDetails = useSelector(state => state.contractDetail) 
  console.log(contractDetails, "contractDetails")

  const municipalities = useSelector(state => state.municipalities) 
  console.log(municipalities, "municipalities")

  const [input, setInput] = useState({
    name: contractDetails.name,
    lastName1: contractDetails.name,
    lastName2: contractDetails.name,
    documentType: contractDetails.name,
    document: contractDetails.name,
    postalCode: contractDetails.name,
    location: contractDetails.name,
    address: contractDetails.name,
    phone: contractDetails.name,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(putContracts(_id, input));
  };
  
  return (
    <div className={style.all}>
      <h1 className={style.title}> Editar datos </h1>
      <form onSubmit = {e => handleSubmit(e)}>
        <div className={style.form}>
          <div className={style.fields}>
            <label className={style.label}> Nombre : </label>
            <input
              className={style.input}
              type = "text"
              placeholder={contractDetails.name}
              name = "name"
            />
            <label className={style.label} > Apellido 1 : </label>
            <input
              className={style.input}
              type = "text"
              placeholder={contractDetails.lastName1}
              name = "lastName1"
            />
            <label className={style.label} > Apellido 2 : </label>
            <input
              className={style.input}
              type = "text"
              placeholder={contractDetails.lastName2}
              name = "lastName2"
            />
            <label className={style.label} > Telefono : </label>
            <input
              className={style.input}
              type = "text"
              placeholder={contractDetails.phone}
              name = "phone"
            />
          </div>
          <div className={style.fields}>
            <label className={style.label}> Numero de Identidad : </label>
            <div className={style.doc}>
              <select className={style.type} name = "documentType">
                <option value=""> - </option>
                <option value="DNI"> DNI </option>
                <option value="NIE"> NIE </option>
                <option value="NIF"> NIF </option>
                <option value="CIF"> CIF </option>
              </select>
              <input
                className={style.input}
                type = "text"
                placeholder={contractDetails.document}
                name = "document"
              />
            </div>
            <label className={style.label} > Codigo Postal : </label>
            <input
              className={style.input}
              type = "text"
              placeholder={contractDetails.postalCode}
              name = "postalCode"
            />
            <label className={style.label} > Localidad : </label>
            <input
              className={style.inputLocation}
              placeholder={contractDetails.location}
              type = "text"
              name = "location"
              readonly="readonly"
            />
            <label className={style.label}> Direccion : </label>
            <input
              className={style.input}
              type = "text"
              placeholder={contractDetails.address}
              name = "address"
            />
          </div>
        </div>
        <button className={style.createBTN} type = "submit"> Guardar </button>
      </form>
      <Link to="/">
        <h2 className={style.btn}> Volver al inicio </h2>
      </Link>
    </div>
  );
};

export default Update;
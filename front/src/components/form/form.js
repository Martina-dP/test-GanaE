import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postContracts, getMunicipalitis, filterCP } from "../../action/index"
import style from "./form.module.css"

function validate(input) {
  const errors = {};
  if ( !input.name ) {
      errors.name = "Nombre es requerido";
  }
  if ( input.documentType === "NIF" || input.documentType === "NIE") {
    if ( !input.lastName1) {
      errors.lastName1 = "Apellido es requerido";
    }
  } 
  if ( !input.documentType) {
    errors.documentType = "Seleccione una opcion";
  }
  if ( input.documentType === "DNI") {
    if ( !input.document || /^([KLM][\d]{7}|[\d]{8})[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(input.document)) {
      errors.document = "Documento invalido";
    } 
  } 
  if (input.documentType === "CIF"){
    if ( !input.document || /^[ABCDEFGHJNPQRSUVW][\d]{7}[\dA-J]$/i.test(input.document)) {
      errors.document = "Documento invalido";
    } 
  }
  if ( input.documentType === "NIE"){
    if ( !input.document || /^[XYZ][\d]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i.test(input.document)) {
      errors.document = "Documento invalido";
    } 
  }
  if ( input.documentType === "NIF"){
    if ( input.document === null || /^([KLMXYZ][\d]{7}|[\d]{8})[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(input.document)) {
      errors.document = "Documento invalido";
    } 
  }
  if ( /^3[\d]{9}$/i.test(input.phone) || !input.phone || input.phone.length < 9){
    errors.phone = "Numero de telefono invalido";
  }
  return errors;
}

const Form = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() =>{ 
    dispatch(getMunicipalitis())
  },[dispatch])

  const municipalitiDetails = useSelector(state => state.municipaliti) 
  console.log(municipalitiDetails, "contmunicipalitiDetailsractDetails")

  const dataLocation = useSelector(state => state.dataFilter) 
  console.log(dataLocation, "dataLocation")

  const [errors, setError] = useState({ });
  const [input, setInput] = useState({
    name: "",
    lastName1: "",
    lastName2: "",
    documentType: "",
    document: "",
    postalCode: "",
    location: "",
    address: "",
    phone: "",
  })

  function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
}

function handelSelect(e) {
  dispatch(filterCP(e.target.value))
  setInput({
      ...input,
      postalCode : e.target.value,
      location : dataLocation.municipio_nombre
  })
}


function handleSubmit(e){
    e.preventDefault()
    if (errors.length >= 1) return('Completa la informacion solicitada')
    else {
      dispatch(postContracts(input))
      alert("Contrato Creado")
    }
    setInput({
      name: "",
      lastName1: "",
      lastName2: "",
      documentType: "",
      document: "",
      postalCode: "",
      location: "",
      address: "",
      phone: "",
    })
    return setTimeout(()=>navigate("/"),1000)
}

  return (
    <div className={style.all}>
      <h1 className={style.title}> Nuevo contrato </h1>
      <form onSubmit = {e => handleSubmit(e)}>
        <div className={style.form}>
          <div className={style.fields}>
            <label className={style.label}> Nombre : </label>
            <input
              className={style.input}
              type = "name"
              id="name"
              placeholder="Ana"
              name = "name"
              value={input.name}
              onChange={e => handleChange(e)}
            />
            {errors.name && <p className={style.errors}> {errors.name} </p>}
            <label className={style.label} > Apellido 1 : </label>
            <input
              className={style.input}
              type = "text"
              placeholder="Gonzales"
              name = "lastName1"
              value={input.lastName1}
              onChange={e => handleChange(e)}
            />
            {errors.lastName1 && <p className={style.errors}> {errors.lastName1} </p>}
            <label className={style.label} > Apellido 2 : </label>
            <input
              className={style.input}
              type = "text"
              placeholder="Heredia"
              name = "lastName2"
              value={input.lastName2}
              onChange={e => handleChange(e)}
            />
            <label className={style.label} > Telefono : </label>
            <input
              className={style.input}
              type = "text"
              placeholder="+541168525749"
              name = "phone"
              value={input.phone}
              onChange={e => handleChange(e)}
            />
            {errors.phone && <p className={style.errors}> {errors.phone} </p>}
          </div>
          <div className={style.fields}>
            <label className={style.label}> Numero de Identidad : </label>
            <div className={style.doc}>
              <div>
                <select className={style.type} onChange={e => handleChange(e)} name = "documentType">
                  <option value=""> - </option>
                  <option value="DNI"> DNI </option>
                  <option value="NIE"> NIE </option>
                  <option value="NIF"> NIF </option>
                  <option value="CIF"> CIF </option>
                </select>
                {errors.documentType && <p className={style.errorsDT}> {errors.documentType} </p>}
              </div>
              <div>
              <input
                className={style.input}
                type = "text"
                placeholder="94869832"
                name = "document"
                value={input.document}
                onChange={e => handleChange(e)}
              />
              {errors.document && <p className={style.errors}> {errors.document} </p>}
              </div>
            </div>
            <label className={style.label} > Codigo Postal : </label>
              <select className={style.input} onChange = {e => handelSelect(e) }>
              <option value="">Select</option>
                {municipalitiDetails.map(c => (
                    <option key={c._id} value={c.postalCode} > {c.codigo_postal} </option>
                ))}
              </select> 
            <label className={style.label} > Localidad : </label>
            <input
              className={style.inputLocation}
              onChange = {e => handelSelect(e) }
              value={input.location}
              placeholder="Palermo"
              name = "location"
              readOnly="readonly"
            />
            <label className={style.label}> Direccion : </label>
            <input
              className={style.input}
              type = "text"
              placeholder="Arenales 8321"
              name = "address"
              value={input.address}
              onChange={e => handleChange(e)}
            />
          </div>
        </div>
        <button className={style.createBTN} type="submit"> Dar de alta </button>
      </form>
      <Link to="/">
        <h2 className={style.btn}> Volver al inicio </h2>
      </Link>
    </div>
  );
};

export default Form;
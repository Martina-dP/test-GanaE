import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postContracts } from "../../action/index"
import style from "./form.module.css"

const Form = () => {

  const dispatch = useDispatch();

  const [errors, setError] = useState({});
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

  function validate(input) {
    const errors = {};
    if (input.name === null || input.name.length === 0) {
        errors.name = "Nombre es requerido";
    }
    if (input.documentType === "NIF" || input.documentType === "NIE") {
      errors.lastName1 = "Apellido es requerido";
    } 
    if( input.documentType === null || input.documentType === 0 ) {
      errors.documentType = "Campo obligatorio, seleccione una opcion";
    }
    if (input.document === "DNI"){
      if (input.document === null || /^([KLM][\d]{7}|[\d]{8})[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(input.document)) {
        errors.document = "Documento invalido";
      } 
    } 
    if (input.document === "CIF"){
      if (input.document === null || /^[ABCDEFGHJNPQRSUVW][\d]{7}[\dA-J]$/i.test(input.document)) {
        errors.document = "Documento invalido";
      } 
    }
    if (input.document === "NIE"){
      if (input.document === null || /^[XYZ][\d]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i.test(input.document)) {
        errors.document = "Documento invalido";
      } 
    }
    if (input.document === "NIF"){
      if (input.document === null || /^([KLMXYZ][\d]{7}|[\d]{8})[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(input.document)) {
        errors.document = "Documento invalido";
      } 
    }
    if( input.postalCode === null || input.postalCode === 0 ) {
      errors.postalCode = "Campo obligatorio, seleccione una opcion";
    }
    if ( /^\+\d{2,3}\s\d{9}$/.test(input.phone) || input.phone === null){
      errors.phone = "Numero de telefono invalido";
    }
    return errors;
}

  function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setError(validate({
        ...input,
        [e.target.name] : e.target.value
    }))
}

// function handelSelect(e) {
//     setInput({
//         ...input,
//         country : [...input.country, e.target.value],
//     })
// }

function handleSubmit(e){
    e.preventDefault()
    dispatch(postContracts())
    alert("Activitie Created")
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
              type = "text"
              placeholder="Ana"
              name = "name"
            />
            <label className={style.label} > Apellido 1 : </label>
            <input
              className={style.input}
              type = "text"
              placeholder="Gonzales"
              name = "lastName1"
            />
            <label className={style.label} > Apellido 2 : </label>
            <input
              className={style.input}
              type = "text"
              placeholder="Heredia"
              name = "lastName2"
            />
            <label className={style.label} > Telefono : </label>
            <input
              className={style.input}
              type = "text"
              placeholder="+54 1168525749"
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
                placeholder="94869832"
                name = "document"
              />
            </div>
            <label className={style.label} > Codigo Postal : </label>
            <input
              className={style.input}
              type = "text"
              placeholder="1425"
              name = "postalCode"
            />
            <label className={style.label} > Localidad : </label>
            <input
              className={style.inputLocation}
              placeholder="Palermo"
              type = "text"
              name = "location"
              readonly="readonly"
            />
            <label className={style.label}> Direccion : </label>
            <input
              className={style.input}
              type = "text"
              placeholder="Arenales 8321"
              name = "address"
            />
          </div>
        </div>
        <button className={style.createBTN} type = "submit"> Dar de alta </button>
      </form>
      <Link to="/">
        <h2 className={style.btn}> Volver al inicio </h2>
      </Link>
    </div>
  );
};

export default Form;
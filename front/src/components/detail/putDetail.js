import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { putContracts,  filterCP } from "../../action/index"
import style from "./putDetail.module.css"

const Update = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { _id } = useParams();

  useEffect(() =>{ 
    dispatch(putContracts(_id, input))
  },[dispatch])

  const contracts = useSelector(state => state.contract) 
  console.log(contracts, "contracts")
  const item = contracts.find(e => e._id === _id)
  console.log(item, "item")

  const municipalitiDetails = useSelector(state => state.municipaliti) 
  console.log(municipalitiDetails, "contmunicipalitiDetailsractDetails")

  const dataLocation = useSelector(state => state.dataFilter) 
  console.log(dataLocation, "dataLocation")

  const [input, setInput] = useState({
    name: item.name,
    lastName1: item.lastName1,
    lastName2: item.lastName2,
    documentType: item.documentType,
    document: item.document,
    postalCode: item.postalCode,
    location: item.location,
    address: item.address,
    phone: item.phone,
  })

  function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}

  function handelSelect(e) {
    dispatch(filterCP(e.target.value))
    setInput({
        ...input,
        postalCode : e.target.value,
        location : dataLocation.municipio_nombre
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(putContracts(_id, input));
    navigate("/")
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
              placeholder={item.name}
              name = "name"
              onChange={e => handleChange(e)}
            />
            <label className={style.label} > Apellido 1 : </label>
            <input
              className={style.input}
              type = "text"
              placeholder={item.lastName1}
              name = "lastName1"
              onChange={e => handleChange(e)}
            />
            <label className={style.label} > Apellido 2 : </label>
            <input
              className={style.input}
              type = "text"
              placeholder={item.lastName2}
              name = "lastName2"
              onChange={e => handleChange(e)}
            />
            <label className={style.label} > Telefono : </label>
            <input
              className={style.input}
              type = "text"
              placeholder={item.phone}
              name = "phone"
              onChange={e => handleChange(e)}
            />
          </div>
          <div className={style.fields}>
            <label className={style.label}> Numero de Identidad : </label>
            <div className={style.doc}>
              <select className={style.type} onChange={e => handleChange(e)} name = "documentType">
                <option value=""> - </option>
                <option value="DNI"> DNI </option>
                <option value="NIE"> NIE </option>
                <option value="NIF"> NIF </option>
                <option value="CIF"> CIF </option>
              </select>
              <input
                className={style.input}
                type = "text"
                placeholder={item.document}
                name = "document"
                onChange={e => handleChange(e)}
              />
            </div>
            <label className={style.label} > Codigo Postal : </label>
              <select className={style.input} onChange = {e => handelSelect(e) }>
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
              placeholder={item.address}
              name = "address"
              onChange={e => handleChange(e)}
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
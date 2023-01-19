import React from "react";
import { useDispatch } from "react-redux";
import { deleteContracts } from "../../action/index"
import { Link } from "react-router-dom";
import Foto2 from "../../img/edit.png"
import Foto3 from "../../img/delete.png"
import style from "./card.module.css";

function Card ({name, document, _id }){

    const dispatch = useDispatch();

    function handleOnClickDelete(_id, e) {
        dispatch(deleteContracts(_id))
    }

    const handleSubmit = e => {
        e.preventDefault(); 
      };
    

    return(
        <div className={style.all}>
            <h2 className={style.text}> {_id} </h2>
            <h2 className={style.text}> {name} </h2>
            <h2 className={style.text}> {document} </h2>
            <div className={style.btns && style.text} onChange={e => handleSubmit(e)}>
                <Link to={`/modifycontract/${_id}`}>
                    <button className={style.btn}> 
                        Editar <img className={style.img} src={Foto2} alt="notFound"/>
                    </button>
                </Link>
                    <button className={style.btn} type="submit" onClick={(e) => handleOnClickDelete(_id, e)}> 
                        Eliminar <img className={style.img} src={Foto3} alt="notFound"/>
                    </button>
            </div>
        </div>
    )} 

export default Card ;
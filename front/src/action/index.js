import axios from "axios";

export const GET_CONTRACTS = "GET_CONTRACTS";
export const POST_CONTRACTS = "POST_CONTRACTS";
export const PUT_CONTRACTS = "PUT_CONTRACTS";
export const DELETE_CONTRACTS = "DELETE_CONTRACTS";

export const GET_MUNICIPALITIS = "GET_MUNICIPALITIS";

export function getContracts () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/listcontracts")
        return dispatch({
            type : "GET_CONTRACTS",
            payload : json.data
        })
    }
}

export function postContracts () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/addcontract")
        return dispatch({
            type : "POST_CONTRACTS",
            payload : json.data
        })
    }
}

export function putContracts (_id, detail) {
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/modifycontract/${_id}`, detail)
        return dispatch({
            type : "PUT_CONTRACTS",
            payload : json.data
        })
    }
}

export function deleteContracts () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/deletecontract")
        return dispatch({
            type : "DELETE_CONTRACTS",
            payload : json.data
        })
    }
}

export function getMunicipalitis() {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/getlocalidad")
        console.log(json, "action")
        return dispatch({
            type : "GET_MUNICIPALITIS",
            payload : json.data
        })
    }
}

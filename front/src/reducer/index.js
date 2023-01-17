import { 
    GET_CONTRACTS,
    POST_CONTRACTS,
    PUT_CONTRACTS,
    DELETE_CONTRACTS,
    GET_MUNICIPALITIS
    } from "../action/index"

const initialState = {
    contract: {},
    allContracts: [],
    contractDetail: {},
    municipalities: {},
    allMunicipalities: [],
  };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        case GET_CONTRACTS :
            return {
                ...state,
                contract : payload,
                allContracts : payload
            };
        case POST_CONTRACTS :
            return {
                ...state,
                contract : payload,
            };
        case PUT_CONTRACTS :
            return {
                ...state,
                contractDetail : payload,
            };
        case DELETE_CONTRACTS :
            return {
                ...state,
                contract : payload,
            };
        case GET_MUNICIPALITIS :
            return {
                ...state,
                municipalities : payload,
                allMunicipalities : payload
            };
        default: return state;
    }
}

export default rootReducer;
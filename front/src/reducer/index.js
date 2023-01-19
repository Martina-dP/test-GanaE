import { 
    GET_CONTRACTS,
    POST_CONTRACTS,
    PUT_CONTRACTS,
    DELETE_CONTRACTS,
    GET_MUNICIPALITIS,
    FILTER_CP
    } from "../action/index"

const initialState = {
    contract: {},
    allContracts: [],
    contractDetail: {},
    municipaliti: {},
    allMunicipalities: [],
    dataFilter: [],
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
                municipaliti : payload,
                allMunicipalities : payload
            };
        case FILTER_CP :
            const locationFilter = state.municipaliti.find(e => e.codigo_postal === payload)
            console.log(locationFilter, "locationFilter")
            return {
                ...state,
                dataFilter : locationFilter,
            };
        default: return state;
    }
}

export default rootReducer;
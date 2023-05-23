import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS,SORT_DATA } from "./actionTypes";



const initState={
    hotel:[],
    isLoading:false,
    isError:false,
}


const reducer=(state=initState,{type, payload})=>{
    switch(type){
        case DATA_REQUEST:return{...state, isLoading:true, isError:false}
        case DATA_SUCCESS:return{...state, hotel:payload,isLoading:false, isError:false}
        case DATA_FAILURE:return{...state, isLoading:false, isError:true}
        case SORT_DATA:return { ...state, hotel:payload };
        default:{return state}
    }
}

export {reducer}
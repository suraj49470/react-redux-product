import * as types from '.././actions/productTypes';
import initialState from './initialState';



export default function productReducer(state = initialState.products , action){

     switch(action.type){

     	case types.LOAD_PRODUCTS_SUCCESS :
     	   return action.products
     	break;

     	default : 
     	    return state;
     	break;

     }
}
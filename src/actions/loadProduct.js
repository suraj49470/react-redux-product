import productApi from '.././api/productApi';
import * as types from './productTypes';


export function loadProduct(){
    
       return function(dispatch){

	       	  productApi.getProductList()

		       	  .then(products => {

			       	  	dispatch(loadProductListSuccess(products));

		       	  })

		       	  .catch(error =>{

			       	  	throw(error);

		       	  });

       };

}

export function loadProductListSuccess(products){

  return {type: types.LOAD_PRODUCTS_SUCCESS, products};

}
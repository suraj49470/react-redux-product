import fetch from 'node-fetch';
class productApi{

		static getProductList(){
            return fetch('https://jsonplaceholder.typicode.com/photos').then(response => {
                            return response.json();
              }).catch(error => {
                      return error;
              });			
		}
}

export default productApi;
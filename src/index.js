import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { Provider }  from 'react-redux';
import {loadProduct} from './actions/loadProduct';
import registerServiceWorker from './registerServiceWorker';



const store = configureStore();
store.dispatch(loadProduct());

ReactDOM.render(
	 <Provider store={store}>
	     <App />
     </Provider>
	, document.getElementById('root'));
registerServiceWorker();

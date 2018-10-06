import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers } from 'redux';
import errorReducer from './reducers/errorReducer';
import authReducer from './reducers/authReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer
});

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,

	document.getElementById('root'));
registerServiceWorker();

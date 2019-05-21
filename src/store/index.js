import { createStore } from 'redux';
import reducer from './reducer';

//the second param is designed to use redux-devtools in chrome
const store = new createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./Reducer/index" 
import thunk from "redux-thunk" // para que podamos hacer acciones con promesas


const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)) );


export default store;
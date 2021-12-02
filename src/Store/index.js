import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loginReducer from './Reducers/loginReducers'
import projectReducer from './Reducers/getProjectsReducers'
import newsReducer from "./Reducers/getNewsReducers"


const rootReducer = combineReducers({
    // aca van los reducers
    login: loginReducer,
    project: projectReducer,
    new: newsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))    

export default store;
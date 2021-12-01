import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loginReducer from './Reducers/loginReducers'
import projectReducer from './Reducers/getProjectsReducers'


const rootReducer = combineReducers({
    // aca van los reducers
    login: loginReducer,
    project: projectReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))    

export default store;
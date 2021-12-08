import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState} from './tokensave.js'


import loginReducer from './Reducers/loginReducers'
import projectReducer from './Reducers/getProjectsReducers'
import newsReducer from "./Reducers/getNewsReducers"
import articlesReducers from './Reducers/articlesReducers';
import donationsReducers from './Reducers/donationsReducers';
import refheshReducerArticles from './Reducers/refheshArticlesReducer'

const initialData = loadState()

const rootReducer = combineReducers({
    // aca van los reducers
    login: loginReducer,
    project: projectReducer,
    new: newsReducer,
    articles: articlesReducers,
    donations: donationsReducers,
    refreshArticles : refheshReducerArticles
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,initialData, composeEnhancers(applyMiddleware(thunk)))

store.subscribe ( function () {
    saveState(store.getState())
})
export default store;
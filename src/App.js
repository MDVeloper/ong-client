import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from './Components/Login/Login';
import Home from "./Components/Home/Home";
import Register from "./Components/Register/register";
import TermsAndConditions from "./Components/Terms and Conditions/termsAndConditions.jsx"
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";

import Projects from "./Components/Projects/Projects.jsx";
import ProjectDetail from "./Components/Projects/ProjectsDetail/ProjectDetail.jsx"
import {getProject} from "./Store/Actions/actionGetProjects"


import News from "./Components/News/News";
import NewsDetail from "./Components/News/NewsDetail/NewsDetail";
import { getNews } from "./Store/Actions/actionGetNews";



function App() {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProject())
        dispatch(getNews())
    })


return (
    <Router>
            <Switch >
                <Route path='/login' component={Login}/>
                <Route exact path='/' component={Home}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/project" component={Projects}/>   
                <Route exact path="/project/:id" component={ProjectDetail}/> 
                <Route exact path="/news" component={News}/>
                <Route exact path="/news/:id" component={NewsDetail}/>
                <Route exact path="/termsAndConditions" component={TermsAndConditions}/>
                <Route exact path='/aboutUs' component={AboutUs}/>
            </Switch>
        <Footer />
    </Router>

    
    
);
}

export default App;

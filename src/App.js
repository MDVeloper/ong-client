import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/register";
import TermsAndConditions from "./Components/Terms and Conditions/termsAndConditions.jsx";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Userpanel from "./Components/User Panel/Userpanel.jsx";
import ErrorComponent from "./Components/Error/ErrorComponent";
import Donation from "./Components/Donation/Donation";
import Formulario from "./Components/Formulario/Formulario";
import Projects from "./Components/Projects/Projects.jsx";
import MercadoPagoForm from "./Components/MERCA/MercadoPagoForm.jsx";
import ProjectDetail from "./Components/Projects/ProjectsDetail/ProjectDetail.jsx";
import { getProject } from "./Store/Actions/actionGetProjects";
import News from "./Components/News/News";
import NewsDetail from "./Components/News/NewsDetail/NewsDetail";
import { getNews } from "./Store/Actions/actionGetNews";
import Users from "./Components/Users/Users.jsx";
import PrivateRoute from "./Store/PrivateRoute";

function App() {



  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject());
    dispatch(getNews());
  });

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/error" component={ErrorComponent} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/proyectos" component={Projects} />
        <Route exact path="/proyectos/:id" component={ProjectDetail} />
        <Route exact path="/noticias" component={News} />
        <Route exact path="/noticias/:id" component={NewsDetail} />
        <Route exact path="/terminosYCondiciones" component={TermsAndConditions} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/donaciones" component={Donation} />
        <Route exact path="/profile" component={Userpanel} />
        <Route path='/mp' component={MercadoPagoForm} />
        <PrivateRoute exact path="/backoffice/form" component={Formulario} />
        <PrivateRoute exact path="/users" component={Users} />
      </Switch>
      <Footer />
    </Router>
  );


}

export default App;

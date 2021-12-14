import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import ProjectDetail from "./Components/Projects/ProjectsDetail/ProjectDetail.jsx";
import { getProject } from "./Store/Actions/actionGetProjects";
import News from "./Components/News/News";
import NewsDetail from "./Components/News/NewsDetail/NewsDetail";
import { getNews } from "./Store/Actions/actionGetNews";
import Curse from "./Components/Cursos/Cursos.jsx";
import Filiales from "./Components/Filiales/Filiales.jsx";
import ActualizarInfo from "./Components/ActualizarInfo/Actualizar.jsx"
import ActualizarContr from "./Components/ActualizarContraseña/Actualizar.jsx"

function App() {
  let dispatch = useDispatch();
  let refreshArticles = useSelector( state => state.refreshArticles.aux)

  useEffect(() => {
    dispatch(getProject());
    dispatch(getNews());
  },[refreshArticles]);

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
        <Route exact path="/backoffice/form" component={Formulario} />
        <Route exact path="/users" component={Userpanel} />
        <Route exact path="/curse" component={Curse} />
        <Route exact path="/Filials" component={Filiales} />
        <Route exact path="/actualizar" component={ActualizarInfo} />
        <Route exact path="/newpassword" component={ActualizarContr} />

      </Switch>
      <Footer />
    </Router>
  );


}

export default App;


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import Login from './Components/Login/Login';
import Home from "./Components/Home/Home";
import Register from "./Components/Register/register";
import TermsAndConditions from "./Components/Terms and Conditions/termsAndConditions.jsx"
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import ErrorComponent from "./Components/Error/ErrorComponent";
import Donations from "./Components/Donations/Donations"

function App() {

    return (
        <Router>
            <Navbar />
            <Switch >
                <Route path='/donations' component={Donations} />
                <Route path='/login' component={Login} />
                <Route exact path='/' component={Home} />
                <Route exact path='/error' component={ErrorComponent} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/terminosYCondiciones" component={TermsAndConditions} />
                <Route exact path='/aboutUs' component={AboutUs} />
            </Switch>
            <Footer />
        </Router>



    );

}

export default App;

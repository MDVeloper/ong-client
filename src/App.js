import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import 'firebase/firestore'


import Login from './Components/Login/Login';
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";

function App() {


return (
    <Router>
        <div>
            <Switch >
                <Route path='/login' component={Login}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/aboutUs' component={AboutUs}/>
            </Switch>
        </div>
        <Footer />
    </Router>

   
    
);
}

export default App;

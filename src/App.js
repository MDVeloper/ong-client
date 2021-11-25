import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import 'firebase/firestore'
import Login from './Components/Login/Login';
import Home from "./Components/Home/Home";



function App() {


return (
    <Router>
        <div>
            <Switch >
                <Route path='/login' component={Login}/>
                <Route exact path='/home' component={Home}/>
            </Switch>
        </div>
    </Router>

    
    
);
}

export default App;
























// import Carousel from "./Components/Carrusel/Carousel"
// import Register from "./Components/Register/register";



// <Route exact path="/register" component={Register}/>
// <Carousel/>
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import 'firebase/firestore'
import Login from './Components/Login/Login';
import Home from "./Components/Home/Home";
import Carousel from "./Components/Carrusel/Carousel"
import Register from "./Components/Register/register";


function App() {


return (
    <Router>
        <div>
            <Switch >
                <Route path='/login' component={Login}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path="/register" component={Register}/>
                <Carousel/>
            </Switch>
        </div>
        
    </Router>

    
    
);
}

export default App;

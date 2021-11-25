import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'; //Bindings from redux and React
import store  from './Store/Index'
import Navbar from './Components/Navbar/Navbar.jsx';
import './App.css';

function App() {

  return (
   <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/navbar' component={Navbar} />
        </Switch> 
      </BrowserRouter>
    </Provider> 
    
      // <div className="App">
      //   <h1>App</h1>
      // </div>
      
  );
}

export default App;

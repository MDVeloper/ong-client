import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'; //Bindings from redux and React
//import { store } from './store/store.js';
import './App.css';

function App() {

  return (
    /* <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Start} />
        </Switch> 
      </BrowserRouter>
    </Provider> */
    
      <div className="App">
        <h1>App</h1>
      </div>
      
  );
}

export default App;

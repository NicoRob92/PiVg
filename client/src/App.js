import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import {BrowserRouter , Route} from 'react-router-dom'
import Home from './components/Home';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">

      <h1>Henry Videogames</h1>

      <Home/>
    </div>
    </BrowserRouter>
    </Provider>    

  );
}

export default App;

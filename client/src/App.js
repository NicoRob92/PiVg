import './App.modules.css';
import Home from './components/Home/Home';
import Landing from './components/landing/Landing';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import Form from './components/Form/Form';
import { Nav } from './components/Nav/Nav';
import Details from './components/Details/Details';
function App() {
  return (
    
    <div className="global">
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element = {<Landing/>}></Route> 
    <Route path='/home' element={[<Nav/>,<Home/>]}/>  
    <Route path= '/create' element={[<Nav/>,<Form/>]}/>
    <Route path= '/videogame/:id' element={[<Nav/>,<Details/>]}/>    
    </Routes>
    </BrowserRouter>
    </div> 

  );
}

export default App;

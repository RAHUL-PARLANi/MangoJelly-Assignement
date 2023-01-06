import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Add from './components/add';
import View from './components/view';
import Edit from './components/edit';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>} />
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;

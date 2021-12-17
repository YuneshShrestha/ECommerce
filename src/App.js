// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import Login from './Login';
import { render } from "react-dom";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

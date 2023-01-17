import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home from './components/home/home';
import  Form from './components/form/form';
 
function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/form" element= {<Form/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home from './components/home/home';
import  Form from './components/form/form';
import Update from './components/detail/putDetail'
 
function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/addcontract" element= {<Form/>} />
          <Route path="/modifycontract/:_id" element= {<Update/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
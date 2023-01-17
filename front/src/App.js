import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/"  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
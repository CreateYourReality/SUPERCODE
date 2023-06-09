import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:newsID/:country/:keyword" element={<Detail/>}/>        
          <Route path="/detail/:newsID/:country/" element={<Detail/>}/>        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

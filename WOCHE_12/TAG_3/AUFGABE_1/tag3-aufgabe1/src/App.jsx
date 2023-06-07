import './App.css'
import Home from './pages/Home'
import Liste from "./pages/Liste"
import Detail from "./pages/Detail"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/liste" element={<Liste/>}></Route>
        <Route path="/detail/:carID" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

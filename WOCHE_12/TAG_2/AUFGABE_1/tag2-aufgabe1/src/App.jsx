import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Speisekarte from './pages/Speisekarte';
import Oeffnungszeiten from './pages/Oeffnungszeiten';
import Galerie from './pages/Galerie';

function App() {

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home text="Homesite" />}
          />
          <Route
            path="/speisekarte"
            element={<Speisekarte text="Speisekarte" />}
          />
          <Route
            path="/contact"
            element={<Contact text="Kontakt" />}
          />
          <Route
            path="/oeffnungszeiten"
            element={<Oeffnungszeiten text="Öffnungszeiten" />}
          />
          <Route
            path="/galerie"
            element={<Galerie text="Galerie" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

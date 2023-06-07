import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Detail from './pages/Detail';


function App() {

  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home title="Homesite" />}
            />
            <Route
              path="/blog"
              element={<Blog title="Blog" />}
            />

            <Route
              path="/detail/"
              element={<Detail title="Detail" />}
            />

            <Route
              path="/detail2/:userID"
              element={<Detail2 title="Detail2" />}
            />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App

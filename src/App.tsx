import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Sobre from "./pages/Sobre/Sobre"
import NotFound from "./pages/NotFound/NotFound"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
  <BrowserRouter>
  <Header/>
  <div className="flex-grow flex flex-col flex-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
  </div>

    <Footer/>
  </BrowserRouter>
  )
}

export default App
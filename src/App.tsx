import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Sobre from "./pages/Sobre/Sobre"
import NotFound from "./pages/NotFound/NotFound"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

import banner from "./assets/banner.png"
import Cadastro from "./pages/Cadastro/Cadastro"

function Banner() {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/home") {
    return <img src={banner} alt="Banner promoção; 20% de desconto para livros de artes" />;
  }

  return null;
}


function App() {
  return (
    <BrowserRouter>
      <Header />

        <Banner/>
    
      <div className="flex-grow flex flex-col flex-wrap items-center px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  )
}

export default App
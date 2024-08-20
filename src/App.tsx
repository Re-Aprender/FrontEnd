import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Sobre from "./pages/Sobre/Sobre"
import NotFound from "./pages/NotFound/NotFound"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import 'react-toastify/dist/ReactToastify.css';
import banner from "./assets/banner.png"
import Cadastro from "./pages/Cadastro/Cadastro"
import { AuthProvider } from "./Contexts/AuthContext"
import { ToastContainer } from "react-toastify"
import CategoriaLista from "./Components/Categoria/CategoriaLista/CategoriaLista"
import CategoriaFormulario from "./Components/Categoria/CategoriaFormulario/CategoriaFormulario"
import CategoriaDeletar from "./Components/Categoria/CategoriaDeletar/CategoriaDeletar"
import Carrossel from "./Components/Carrossel/Carrossel"
import LivroLista from "./Components/Livros/LivroLista/LivroLista"
import LivroFormulario from "./Components/Livros/LivroFormulario/LivroFormulario"
import LivroDeletar from "./Components/Livros/LivroDeletar/LivroDeletar"

function Banner() {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/home") {
    return <Carrossel/>;
  }

  return null;
}


function App() {
  return (
    <AuthProvider>
      <ToastContainer/>
      <BrowserRouter>
        <Header />

        <Banner />
      

        <div className="flex-grow flex flex-col flex-wrap items-center px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />

            {/* Sessão de administrador */}
            <Route path="/admin/categorias" element={<CategoriaLista />} />
            <Route path="admin/categorias/criar" element={<CategoriaFormulario />} />
            <Route path="admin/categorias/editar/:id" element={<CategoriaFormulario />} />
            <Route path="admin/categorias/deletar/:id" element={<CategoriaDeletar />} />

            <Route path="/admin/livros" element={<LivroLista />} />
            <Route path="admin/livros/criar" element={<LivroFormulario />} />
            <Route path="admin/livros/editar/:id" element={<LivroFormulario />} />
            <Route path="admin/livros/deletar/:id" element={<LivroDeletar />} />

          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
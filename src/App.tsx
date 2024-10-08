import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Sobre from "./pages/Sobre/Sobre"
import NotFound from "./pages/NotFound/NotFound"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import 'react-toastify/dist/ReactToastify.css';
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
import BookPage from "./Components/Book/BookPage/BookPage"
import Pesquisa from "./pages/Pesquisa/Pesquisa"
import Perfil from "./Components/Perfil/Perfil"
import { ListaDeLivrosProvider } from "./Contexts/CarrinhoContext"
import Doar from "./pages/Doar/Doar"
import FinalizacaoCompra from "./pages/FinalizacaoCompra/FinalizaoCompra"

function Banner() {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/home") {
    return <Carrossel />;
  }

  return null;
}

function App() {
  return (
    <ListaDeLivrosProvider>
    <AuthProvider>
      <ToastContainer />
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
            <Route path="/doar" element={<Doar />} />
              <Route path="/finalizar" element={<FinalizacaoCompra />} />
              <Route path="/finalizar/unico/:id" element={<FinalizacaoCompra />} />


            <Route path="*"  element={<NotFound />} />

            <Route path="/livros/:id" element={<BookPage />} />

            <Route path="/pesquisar/:pesquisa" element={<Pesquisa />} />
              <Route path="/categoria/:categoria" element={<Pesquisa />} />


            {/* Sessão de administrador */}
            <Route path="/admin/categorias" element={<CategoriaLista />} />
            <Route path="admin/categorias/criar" element={<CategoriaFormulario />} />
            <Route path="admin/categorias/editar/:id" element={<CategoriaFormulario />} />
            <Route path="admin/categorias/deletar/:id" element={<CategoriaDeletar />} />

            <Route path="/admin/livros" element={<LivroLista />} />
            <Route path="admin/livros/criar" element={<LivroFormulario />} />
            <Route path="admin/livros/editar/:id" element={<LivroFormulario />} />
            <Route path="admin/livros/deletar/:id" element={<LivroDeletar />} />
            <Route path="/perfil" element={<Perfil />} />


          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </ListaDeLivrosProvider>
  )
}

export default App
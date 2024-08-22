
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import { FormEvent, useContext, useRef } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import { toastAlerta } from "../../util/toastAlerta"
import Carrinho from "../Carrinho/Carrinho"
import { AnimatePresence } from "framer-motion"

function Header() {
  const navigate = useNavigate()
  const { usuario, handleLogout, isCarrinho, setIsCarrinho } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta("Sucesso ao deslogar", "sucesso")
    navigate('/login')
  }

  function handleCarrinho() {
    setIsCarrinho(!isCarrinho);
  }

  const pesquisaRef = useRef<HTMLInputElement>(null);

  function handlePesquisa(e: FormEvent): void {
    e.preventDefault();
    if (pesquisaRef.current?.value) {
      navigate(`/pesquisar/${pesquisaRef.current.value}`)
    }
  }


  return (
    <>
      <header className=" bg-stone-50 flex items-center flex-col">
        <div className=" bg-gradient-to-r from-accent-pink to-accent-orange w-full text-center text-stone-50 p-1">
          <p>Adicione o cupom <span className="font-bold">LIVRAMENTO</span> para ganhar <span className="font-bold">10% de DESCONTO</span>! </p>
        </div>
        <div className="container p-4 flex flex-wrap gap-2 sm:align-middle md:justify-between items-center  ">
          <Link to="/" className="flex-grow flex justify-center md:justify-start">
            <div className="max-w-72">
              <img src={logo} alt="Logo do projeto Reaprender" />
            </div>
          </Link>
          <form onSubmit={handlePesquisa} className="flex bg-stone-100 flex-grow max-w-full md:max-w-[30rem] items-center rounded-lg">
            <input ref={pesquisaRef} className="outline-none flex-grow bg-transparent p-3" type="search" placeholder="Pesquisar livro..." />
            <button className="flex items-center px-2"> <span className="material-symbols-outlined">
              search
            </span></button>
          </form>
          <nav className="flex-grow">
            <ul className="flex gap-2 items-center flex-shrink-0 flex-wrap flex-grow justify-center md:justify-end">
              <Link to="/home"><li className="hover:underline">Home</li></Link>
              <Link to="/sobre"><li className="hover:underline">Sobre</li></Link>

              {usuario.token !== "" ?
                <button onClick={logout}>Sair</button>
                :
                <>
                  <Link to="/login"><li className="hover:underline">Login</li></Link>
                  <Link to="/cadastro"><li className="hover:underline">Cadastro</li></Link>
                </>
              }
              <Link to="/perfil"><li>
                <span className="material-symbols-outlined text-4xl bg-gradient-to-t from-accent-pink to-accent-orange  text-transparent bg-clip-text">
                  person
                </span></li></Link>
              <button onClick={handleCarrinho}> <span className="material-symbols-outlined text-4xl bg-gradient-to-t from-accent-pink to-accent-orange  text-transparent bg-clip-text">
                shopping_basket
              </span></button>
            </ul>
          </nav>
        </div>
      </header>
      <AnimatePresence>
        {isCarrinho && <Carrinho />}
      </AnimatePresence>
    </>
  )
}

export default Header
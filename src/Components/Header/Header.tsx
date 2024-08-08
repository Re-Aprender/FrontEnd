
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

function Header() {
  return (
    <header className=" bg-stone-50 flex items-center flex-col">
      <div className=" bg-gradient-to-r from-accent-pink to-accent-orange w-full text-center text-stone-50 p-1">
        <p>Adicione o cupom <span className="font-bold">LIVRAMENTO</span> para ganhar <span className="font-bold">10% de DESCONTO</span>! </p>
      </div>
      <div className="container p-4 flex flex-wrap gap-2 sm:align-middle md:justify-between items-center  ">
       
       <Link to="/">
          <div className="max-w-72">
            <img src={logo} alt="Logo do projeto Reaprender" />
          </div>
       </Link>
       

        <div className="flex bg-stone-100 flex-grow max-w-[30rem] items-center rounded-lg">
          <input className="outline-none flex-grow bg-transparent p-3" type="search" placeholder="Pesquisar livro..." />
          <button className="flex items-center px-2"> <span className="material-symbols-outlined">
            search
          </span></button>
        </div>

        <nav>
          <ul className="flex gap-4 items-center  ">
            <Link to="/home"><li className="hover:underline">Home</li></Link>
            <Link to="/sobre"><li className="hover:underline">Sobre</li></Link>
            <Link to="/login"><li className="hover:underline">Login</li></Link>
            <Link to="/perfil"><li>
              <span className="material-symbols-outlined text-4xl bg-gradient-to-t from-accent-pink to-accent-orange  text-transparent bg-clip-text">
              person
            </span></li></Link>
            <button> <span className="material-symbols-outlined text-4xl bg-gradient-to-t from-accent-pink to-accent-orange  text-transparent bg-clip-text">
              shopping_basket
            </span></button>

          </ul>
        </nav>
      </div>
 
    </header>
  )
}

export default Header
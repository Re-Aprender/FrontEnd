import SectionBook from "../../Components/SectionBook/SectionBook"
import "./banner.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

function Home() {
  
  const {usuario} =useContext(AuthContext);

  return (
<>


   <div className="container">

        {
          usuario.token&&
            <h1 className="text-4xl mb-6 self-center">Bem vinde <span className="text-accent-pink font-bold">{`${usuario.nome}`}</span></h1>
        }
  
   </div>

      <div className="container">
        <h1 className="text-4xl mt-8 mb-6 self-start ">Todos <span className="text-accent-orange font-bold">livros;</span></h1>
      </div>
      <SectionBook didatico={true} ignore={true} />
      <div className="container">
        <h1 className="text-4xl mt-8 mb-6 self-start ">Livros <span className="text-accent-pink font-bold">didáticos;</span></h1>
      </div>
      <SectionBook didatico={true} ignore={false} />
      <div className="container">
        <h1 className="text-4xl mt-8 mb-6 self-start ">Livros de <span className="text-accent-orange font-bold">ficção;</span></h1>
      </div>
      <SectionBook didatico={false} ignore={false} />
    </>
  )
}

export default Home
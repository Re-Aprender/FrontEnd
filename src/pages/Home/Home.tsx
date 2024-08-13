import SectionBook from "../../Components/SectionBook/SectionBook"
import "./banner.css";
import banner from "../../assets/banner.png";
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

        <h1 className="text-4xl mb-6 self-start">Livros <span className="text-accent-pink font-bold">didáticos;</span></h1>

   </div>
      <SectionBook />
      <div className="container">
        <h1 className="text-4xl mt-8 mb-6 self-start ">Livros de <span className="text-accent-orange font-bold">ficção;</span></h1>

      </div>
      <SectionBook/>

 
    
    </>
  )
}

export default Home
import SectionBook from "../../Components/SectionBook/SectionBook"
import "./banner.css";
import banner from "../../assets/banner.png";

function Home() {
  return (
<>


   <div className="container">
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
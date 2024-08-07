import SectionBook from "../../Components/SectionBook/SectionBook"
import "./banner.css";

function Home() {
  return (
    <div className=' flex flex-wrap flex-col items-center flex-grow'>

<div className="banner align-s">

</div>

      <div className="container p-4 my-4 flex flex-col gap-16 bg-stone-100">
        <div>
          <h1 className="text-3xl">Livros didáticos:</h1>
          <SectionBook></SectionBook>
        </div>
        <div>
          <h1 className="text-3xl">Livros de ficção:</h1>
          <SectionBook></SectionBook>
        </div>
 

      </div>
    </div>
  )
}

export default Home
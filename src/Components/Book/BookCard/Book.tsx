import { Link } from 'react-router-dom'
import Livro from '../../../models/Livro'
interface LivroCardProps {
  livro: Livro
}

function Book({ livro }: LivroCardProps) {

  return (
    <div
      className='flex flex-col  p-4 flex-nowrap w-fit bg-stone-50 shadow-lg rounded-lg max-w-[300px] min-w-[300px] min-h-[450px] h-max justify-between'>
      <img className='h-[250px] object-cover rounded-lg self-center' src={livro.foto ? livro.foto : ""} alt="" />
      <h2 className="text-2xl">{livro.nome}</h2>
      <p className="">{livro.autor}</p>
      <Link className='' to={`/livros/${livro.id}`}><button className='min-w-full bg-gradient-to-r from-accent-pink to-accent-orange p-2 rounded-md shadow-md text-stone-50 mt-8'>Comprar</button></Link>
    </div>
  )
}

export default Book
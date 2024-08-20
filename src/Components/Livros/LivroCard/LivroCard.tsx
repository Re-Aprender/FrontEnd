import { Link } from 'react-router-dom'
import { Eraser, ImageBroken, PencilSimple } from '@phosphor-icons/react'
import Livro from '../../../models/Livro'

interface LivroCardProps {
  livro: Livro
}

function LivroCard({ livro }: LivroCardProps) {
  return (
    <div className='border flex flex-col rounded-lg overflow-hidden justify-between shadow-lg'>
      <header className='py-2 px-6 bg-gradient-to-r from-accent-pink to-accent-orange text-stone-50 font-bold text-2xl text-center'>Livro</header>
      
      <div className="flex flex-grow bg-stone-50 flex-row flex-nowrap p-4 gap-8 items-center">
        <div className='rounded-md overflow-hidden shadow-lg '>
          {livro.foto ?
            <img src={livro.foto} className='w-[150px] object-cover' />
            :
            <ImageBroken size={60} />
          }
        </div>
        <div className='flex-grow flex flex-col gap-2 '>
          <p className='text-lg font-medium'>{livro.nome}</p>

          <li className='text-1xl  '> <span className='font-medium'>Categoria:</span> {livro.categoria.nome}</li>
          <li className='text-1xl '><span className='font-medium'>Tipo:</span> {livro.categoria.didatico ? "Didático" : "Não Didático"}</li>
          <li className='text-1xl  '><span className='font-medium'>Autor:</span> {livro.autor}</li>
          <li className='text-1xl  '><span className='font-medium'>Editora:</span> {livro.editora}</li>
          <li className='text-1xl  '><span className='font-medium'>Preço:</span> R${livro?.preco}</li>
        </div>
 
   
      </div>
  

      <div className="flex">
        <Link to={`/admin/livros/editar/${livro.id}`} className='w-full text-accent-orange flex items-center justify-center py-2 bg-stone-50 border-r-2 border-t-2 border-stone-150 hover:bg-accent-orange hover:text-stone-50 duration-300'>
          <button className='flex items-center gap-1'><PencilSimple size={18} weight="bold" />Editar</button>
        </Link>
        <Link to={`/admin/livros/deletar/${livro.id}`} className='text-accent-orange w-full flex items-center justify-center bg-slate-50 border-t-2 border-stone-150 hover:bg-accent-orange hover:text-stone-50 duration-300'>
          <button className='flex items-center gap-1'><Eraser size={18} weight="bold" />Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default LivroCard
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { Eraser, PencilSimple } from '@phosphor-icons/react'

interface CategoriaCardProps {
  categoria: Categoria
}

function CategoriaCard({ categoria }: CategoriaCardProps) {
  return (
    <div className='border flex flex-col rounded-lg overflow-hidden justify-between shadow-lg'>
      <header className='py-2 px-6 bg-gradient-to-r from-accent-pink to-accent-orange text-stone-50 font-bold text-2xl text-center'>Categoria</header>
      <p className='p-8 text-3xl bg-stone-50 h-full text-center'>{categoria.nome}</p>
      <div className="flex">
        <Link to={`/admin/categorias/editar/${categoria.id}`} className='w-full text-accent-orange flex items-center justify-center py-2 bg-stone-50 border-r-2 border-t-2 border-stone-150 hover:bg-accent-orange hover:text-stone-50 duration-300'>
          <button className='flex items-center gap-1'><PencilSimple size={18} weight="bold" />Editar</button>
        </Link>
        <Link to={`/admin/categorias/deletar/${categoria.id}`} className='text-accent-orange w-full flex items-center justify-center bg-slate-50 border-t-2 border-stone-150 hover:bg-accent-orange hover:text-stone-50 duration-300'>
          <button className='flex items-center gap-1'><Eraser size={18} weight="bold" />Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CategoriaCard
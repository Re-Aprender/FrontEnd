import React from 'react'
import Livro from '../../models/Livro'
import { TrashSimple } from '@phosphor-icons/react'

interface CarrinhoItemProps {
    livro: Livro
}

function CarrinhoItem({livro} : CarrinhoItemProps) {
  return (
    <div className='bg-stone-200 p-2 flex  rounded-lg shadow-md justify-between'>
        
        <button className='flex-grow flex items-center mr-2'>
            <TrashSimple className='text-stone-500 hover:text-accent-orange' size={32}/>
        </button>
        <div className='flex flex-grow text-sm gap-2 w-full justify-between'>
              <div className='flex flex-row overflow-hidden gap-2 '>
                  <img src={livro.foto} alt={"capa do livro " + livro.nome} className='w-14 rounded-lg'></img>
                  <div>
                      <p className='whitespace-nowrap font-medium'>{livro.nome}</p>
                      <p className='whitespace-nowrap'>{livro.autor}</p>
                  </div>


              </div>
               
              <div className='flex flex-end flex-col text-end'>
                  <p className='whitespace-nowrap text-accent-pink_dark font-medium text-lg'>R$ {livro.preco}</p>
              </div>
        </div>
       
 </div>
  )
}

export default CarrinhoItem
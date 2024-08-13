import { BookBookmark, BookOpen } from '@phosphor-icons/react'
import React from 'react'

function Book() {
  return (
    <div
      className='flex flex-col  p-4 flex-nowrap bg-stone-50 shadow-lg rounded-lg '
    >

      <BookOpen size={256} color="#dddddd"/>
      <h2 className="text-2xl">Nome do livro</h2>
      <p className="">Nome do autor</p>
      <button className='bg-gradient-to-r  from-accent-pink to-accent-orange p-2 rounded-md shadow-md text-stone-50 mt-8'>Comprar</button>
  </div>
  )
}

export default Book
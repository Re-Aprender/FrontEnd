import React from 'react'
import Livro from '../../../models/Livro'
import { ImageBroken } from '@phosphor-icons/react'

interface LivroCardProps {
    livro: Livro
}

function BookPage({ livro }: LivroCardProps) {
    return (
        <>
            <div className='container bg-stone-50 flex gap-4 rounded-lg p-4 items-center justify-between'>
                <div>
                    <ImageBroken size={60} />
                </div>
                <div>
                    <p>Nome: </p>
                    <p>Categoria: </p>
                    <p>Tipo: </p>
                    <p>Autor: </p>
                    <p>Editora: </p>
                    <p>Preço: </p>
                </div>
            </div>
        </>
    )
}

export default BookPage
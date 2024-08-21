import React, { useEffect, useState } from 'react'
import { CreditCard, ImageBroken, ShoppingCartSimple } from '@phosphor-icons/react'
import Livro from '../../../models/Livro';
import { buscar } from '../../../services/Service';
import { useParams } from 'react-router-dom';

function BookPage() {

    const [livro, setLivro] = useState<Livro>({} as Livro);
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/livros/${id}`, setLivro, {
            headers: {},
        });
    }

    useEffect(() => {
        if (id) {
            buscarPorId(id);
        }
    }, [id]);

    return (
        <>
            <div className='container bg-stone-50 grid grid-cols-2 rounded-lg p-8 w-[950px] gap-8'>
                <div>
                    <img className='rounded-md h-full object-cover' src={livro.foto} alt="" />
                </div>
                <div>
                    <div className='my-8 flex items-center justify-between '>
                        <div>
                            <h1 className="text-4xl">{livro.nome}</h1>
                            <p className='text-xl'>{livro.autor}</p>
                        </div>
                        <div className='ml-auto'>
                            <p className='text-xl'>{livro.anoLancamento}</p>
                        </div>
                    </div>

                    <div className='bg-stone-100 p-2 rounded-lg mb-8'>
                        <p className='text-xl flex justify-between mb-2'>Editora <span>{livro.editora}</span></p>
                        <p className='text-xl flex justify-between'>Preço <span className='text-2xl font-semibold'>R$ {livro.preco}</span></p>
                    </div>

                    <div className='flex justify-between gap-2 bg-stone-100 p-2 rounded-lg'>
                        <label className='text-xl' htmlFor="cep">CEP</label>
                        <input className='w-full bg-transparent outline-none' type="search" name="cep" id="cep" />
                        <button className="flex items-center px-2"> <span className="material-symbols-outlined">
                            search
                        </span></button>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <button className='bg-gradient-to-r from-accent-pink to-accent-orange p-2 rounded-md shadow-md text-stone-50 mt-8 flex items-center gap-2 justify-center'><CreditCard size={18} />Comprar</button>
                        <button className='bg-gradient-to-r from-accent-pink to-accent-orange p-2 rounded-md shadow-md text-stone-50 mt-8 flex items-center gap-2 justify-center'><ShoppingCartSimple size={18} />Carrinho</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookPage
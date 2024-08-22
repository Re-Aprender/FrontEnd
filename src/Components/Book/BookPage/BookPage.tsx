import { useContext, useEffect, useState } from 'react'
import { CreditCard,  ShoppingCartSimple } from '@phosphor-icons/react'
import Livro from '../../../models/Livro';
import { buscar } from '../../../services/Service';
import { useParams } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';
import { AuthContext } from '../../../Contexts/AuthContext';

function BookPage() {

    const [livro, setLivro] = useState<Livro>({} as Livro);
    const { id } = useParams<{ id: string }>();


    const { adicionarNoCarrinho, setIsCarrinho } = useContext(AuthContext);

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

    function handleCarrinho() {
        if (livro.nome) {
            adicionarNoCarrinho(livro)
            setIsCarrinho(true)
        }
    }

    return (
        <>
            <div className='container bg-stone-50 grid  sm:grid-cols-1 lg:grid-cols-2  rounded-lg p-8 w-full max-w-[950px]  gap-8'>
                <div className='sm:flex sm:justify-center'>
                    {livro.foto ? <img className='rounded-md h-full object-cover' src={livro.foto} alt="" />
                        :
                        <div className='flex items-center justify-center w-full h-full'>                        <FallingLines color="#ff7155" width="200" height="200" visible={true} />
                        </div>
                    }
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
                        <p className='text-xl flex justify-between'>Preço <span className='text-3xl font-semibold text-accent-pink_dark'>R$ {livro.preco}</span></p>
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
                        <button onClick={handleCarrinho} className='bg-gradient-to-r from-accent-pink to-accent-orange p-2 rounded-md shadow-md text-stone-50 mt-8 flex items-center gap-2 justify-center'><ShoppingCartSimple size={18} />Carrinho</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookPage
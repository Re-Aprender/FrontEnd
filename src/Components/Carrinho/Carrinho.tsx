import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { AnimatePresence, motion } from 'framer-motion';
import CarrinhoItem from './CarrinhoItem';
import { ListaDeLivrosContext } from '../../Contexts/CarrinhoContext';
import { Link } from 'react-router-dom';

function Carrinho() {
    const { setIsCarrinho} = useContext(AuthContext);

    const {adicionarLivro, livros,getQuantidade,} = useContext(ListaDeLivrosContext)

    function handleCarrinho() {
        setIsCarrinho(false);
    }

    
    

    return (
        <>
        <motion.aside
            className="fixed h-screen w-screen z-30 cursor-pointer flex justify-end"
            onClick={handleCarrinho}
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            transition={{duration: 0.4}}
        >
        </motion.aside>

            <motion.div
                className="bg-stone-50 h-full fixed w-[85vw] z-50 max-w-[35rem]  p-4 right-0 flex flex-col"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.2 }}
            >
                <h1 className="text-4xl mb-6 self-start">Seu <span className="text-accent-pink font-bold">carrinho;</span></h1>
                    <div className='flex  flex-col gap-4 mb-4'>
                   <AnimatePresence>
                    {Array.from(livros.values()).map((livro) => (<CarrinhoItem key={livro.livro.id} livro={livro.livro} quantidade={livro.quantidade}></CarrinhoItem>))}

                   </AnimatePresence>

                    </div>
                <div className='flex items-center gap-2 px-2 pb-4'>
                    <div className='h-[0.08rem] flex-grow bg-stone-300'></div>
                    <p className='text-stone-600 font-light'>Total sem frete: <span className='font-medium text-xl text-accent-orange_dark'>R$ {Array.from(livros.values()).reduce((acc, item) => { return acc + (item.livro.preco) * item.quantidade }, 0).toFixed(2)}</span></p>
                </div>
                <Link to="/finalizar"
                    className="rounded-md text-stone-50 text-center bg-gradient-to-r from-accent-pink to-accent-orange py-2 block shadow-md"
                    onClick={handleCarrinho}
                >
                    Finalizar compra
                </Link>
            </motion.div>
        </>
    );
}

export default Carrinho;

import Livro from '../../models/Livro'
import { TrashSimple } from '@phosphor-icons/react'
import { AuthContext } from '../../Contexts/AuthContext'
import { motion } from "framer-motion"
import { useContext } from 'react'
interface CarrinhoItemProps {
    livro: Livro
}

function CarrinhoItem({ livro }: CarrinhoItemProps) {

    const { removerDoCarrinho } = useContext(AuthContext);

    function handleRemover() {
        if (livro.id) {
            removerDoCarrinho(livro.id)
        }
    }

    return (
        <motion.div
            exit={{ x: '100%', opacity: "0" }}
            transition={{ type: 'tween', duration: 0.2 }}
            className='bg-stone-200 p-2 pt-4 flex  rounded-lg shadow-md justify-between'>
            <button onClick={handleRemover} className='flex-grow flex items-center mr-2'>
                <TrashSimple className='text-stone-500 hover:text-accent-orange' size={32} />
            </button>
            <div className='flex  text-sm gap-2 w-full overflow-hidden justify-between'>
                <div className='flex flex-row overflow-hidden gap-2 '>
                    <img src={livro.foto ? livro.foto : ""} alt={"capa do livro " + livro.nome} className='w-14 h-14 object-cover rounded-lg'></img>
                    <div>
                        <p className='whitespace-nowrap font-medium'>{livro.nome}</p>
                        <p className='whitespace-nowrap'>{livro.autor}</p>
                    </div>
                </div>
                <div className='flex flex-end flex-col text-end flex-shrink-0'>
                    <p className='whitespace-nowrap text-accent-pink_dark font-medium text-lg'>R$ {livro.preco}</p>
                </div>
            </div>

        </motion.div>
    )
}

export default CarrinhoItem
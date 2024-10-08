import Livro from '../../models/Livro'
import { TrashSimple } from '@phosphor-icons/react'
import { AuthContext } from '../../Contexts/AuthContext'
import { motion } from "framer-motion"
import { useContext } from 'react'
import { ListaDeLivrosContext } from '../../Contexts/CarrinhoContext'
import { toastAlerta } from '../../util/toastAlerta'
interface CarrinhoItemProps {
    livro: Livro
    quantidade: number
}

function CarrinhoItem({ livro, quantidade }: CarrinhoItemProps) {


    const {diminuirQuantidade, adicionarLivro, livros} = useContext(ListaDeLivrosContext)

    const {setIsCarrinho} = useContext(AuthContext)

    async function handleRemover() {
        if (livro.id) {
            await diminuirQuantidade(livro.id)
        }
        if(Array.from(livros.values()).length < 1){
            setIsCarrinho(false)
        }
    }

    function handleAdd(){
        adicionarLivro(livro)
    }

    console.log(""+JSON.stringify(livros))

    return (
        <motion.div
            exit={{ x: '100%', opacity: "0" }}
            transition={{ type: 'tween', duration: 0.2 }}
            className='bg-stone-200 p-2 pt-4 flex  rounded-lg shadow-md justify-between'>
                <div className='flex items-center gap-2 pr-2'>
                <button onClick={handleRemover} className="text-lg text-red-500" >
                    -
                </button>
                <p>{quantidade}</p>
                <button onClick={handleAdd} className="text-lg text-blue-500" >
                    +
                </button>
                </div>
           
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
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../Contexts/AuthContext"
import { buscar, deletar } from "../../../services/Service"
import { toastAlerta } from "../../../util/toastAlerta"
import { ImageBroken } from "@phosphor-icons/react"
import Livro from "../../../models/Livro"
import { DNA } from "react-loader-spinner"

function LivroDeletar() {
    const [livro, setLivro] = useState<Livro>({} as Livro)

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/livros/${id}`, setLivro, {
                headers: {
                    'Authorization': token
                }
            }
            )
        } catch (error: unknown) {
            if (error instanceof Error && error.toString().includes('403')) {
                toastAlerta("O token expirou, favor logar novamente", "erro")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta("Você precisa estar logado!", "info")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/admin/livros")
    }


    useEffect(() => {
        console.log(livro)
    }, [livro])


    async function deletarLivro() {
        try {
            await deletar(`/livros/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta("Livro apagado com sucesso!", "sucesso")

        } catch (error) {
            toastAlerta("Erro ao apagar livro.", "erro")
        }

        retornar()
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar livro</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o livro a seguir?</p>

            {!livro.nome ? <DNA
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto"
            /> :

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
                        <button className='w-full text-accent-orange flex items-center justify-center py-2 bg-stone-50 border-r-2 border-t-2 border-stone-150 hover:bg-accent-orange hover:text-stone-50 duration-300' onClick={retornar}>Não</button>
                        <button className='text-accent-orange w-full flex items-center justify-center bg-slate-50 border-t-2 border-stone-150 hover:bg-accent-orange hover:text-stone-50 duration-300' onClick={deletarLivro}>
                            Sim
                        </button>
                    </div>
                </div>}


        </div>
    )
}

export default LivroDeletar
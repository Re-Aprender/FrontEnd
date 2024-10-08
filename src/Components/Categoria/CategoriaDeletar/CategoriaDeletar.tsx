import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../Contexts/AuthContext"
import { buscar, deletar } from "../../../services/Service"
import Categoria from "../../../models/Categoria"
import { toastAlerta } from "../../../util/toastAlerta"

const CategoriaDeletar :React.FC = () => {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
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
        navigate("/admin/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta("Categoria apagada com sucesso!", "sucesso")

        } catch (error) {
            toastAlerta("Erro ao apagar categoria.", "erro")
        }

        retornar()
    }
    return (
        <div className='container mx-auto bg-stone-50 w-full max-w-[35rem] p-4 rounded-2xl shadow-lg'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center  mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border-2 border-stone-600 flex flex-col rounded-2xl overflow-hidden justify-between max-w-[30rem] mx-auto'>
                <header className='py-2 px-6 bg-gradient-to-r from-accent-pink to-accent-orange text-stone-50 font-bold text-2xl text-center'>Categoria</header>
                <p className='pt-4 text-3xl bg-stone-50 h-full text-center'>{categoria.nome}</p>
                <p className='py-4 text-1xl bg-stone-50 h-full text-center'>{categoria.didatico ? "Didático" : "Não Didático"}</p>

                <div className="flex">
                    <button className='w-full text-accent-orange flex items-center justify-center py-2 bg-stone-50 border-r-2 border-t-2 border-stone-150 hover:bg-accent-orange hover:text-stone-50 duration-300' onClick={retornar}>Não</button>
                    <button className='text-accent-orange w-full flex items-center justify-center bg-slate-50 border-t-2 border-stone-150 hover:bg-accent-orange hover:text-stone-50 duration-300' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CategoriaDeletar
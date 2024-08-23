import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import { AuthContext } from '../../Contexts/AuthContext'
import { Bars} from 'react-loader-spinner'
import { toastAlerta } from '../../util/toastAlerta'

function Cadastro() {
    let navigate = useNavigate()

    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        email: '',
        senha: '',
    })

    const { isLoading, setIsLoading } = useContext(AuthContext)


    const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
        id: 0,
        nome: '',
        email: '',
        senha: '',
    })

    useEffect(() => {
        if (usuarioResposta.id !== 0) {
            back()
        }
    }, [usuarioResposta])

    function back() {
        navigate('/login')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

            try {
                setIsLoading(true)

                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
                setIsLoading(false)

                toastAlerta("Usuário cadastrado com sucesso", "sucesso")

            } catch (error) {
                setIsLoading(false)

                toastAlerta("Erro ao cadastrar usuário", "erro")
            }

        } else {
            toastAlerta("Dados inconsistentes, veifique os dados do usuário", "erro")

            setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
            setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
        }
    }

    return (
        <div className='container self-center flex flex-wrap justify-center gap-8'>
            <form onSubmit={cadastrarNovoUsuario} className='flex flex-col flex-grow-2 flex-grow max-w-[50rem] gap-y-4 p-8 bg-slate-50 shadow-lg rounded-lg'>
                <h2 className='text-2xl'>Se cadastrar com <span className='font-bold text-accent-pink'>Email e Senha;</span></h2>

                <div className="flex flex-col">
                    <label htmlFor="nome">Nome:</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} value={usuario.nome} name="nome" id="nome" placeholder="Fulano da Silva" className="bg-stone-200 text-stone-600 w-full px-5 py-2 text-lg rounded-lg border border-gray-400 placeholder-text-stone-600 shadow" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} value={usuario.email} name="email" id="email" placeholder='user@email.com' className="bg-stone-200 text-stone-600 w-full px-5 py-2 text-lg rounded-lg border border-gray-400 placeholder-text-stone-600 shadow" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="senha">Senha:</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} value={usuario.senha} name="senha" id="senha" type="password" placeholder='Insira sua senha' className="bg-stone-200 text-stone-600 w-full px-5 py-2 rounded-lg text-lg border border-gray-400 placeholder-text-stone-600 shadow" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="confirmarSenha">Confirmar Senha:</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)} value={confirmaSenha} name="confirmarSenha" id="confirmarSenha" type="password" placeholder='Confirme sua senha' className="bg-stone-200 text-stone-600 w-full px-5 py-2 rounded-lg text-lg border border-gray-400 placeholder-text-stone-600 shadow" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="foto">Foto:</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} value={usuario.foto} name="foto" id="foto" placeholder="Exemplo: https://imgur.com/iddaimagem" className="bg-stone-200 text-stone-600 w-full px-5 py-2 text-lg rounded-lg border border-gray-400 placeholder-text-stone-600 shadow" />
                </div>

                <button
                    disabled={isLoading}
                    className={`bg-accent-pink shadow-md text-stone-50 p-2 px-8 text-lg rounded-lg transition-colors duration-100 flex justify-center ${isLoading ? "hover:bg-accent-pink" : "hover:bg-accent-pink_dark"}`}
                >
                    {!isLoading ? "Cadastrar" : <Bars color='#ffffff' width={24} height={24} />}
                </button>
                <p className='self-center'>Já tem um conta?{` `}<Link to="/login" className='text-cyan-600 hover:text-cyan-700'>Entre</Link>.</p>
            </form>
        </div>

    )
}

export default Cadastro
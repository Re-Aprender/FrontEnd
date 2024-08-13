import { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'

function Cadastro() {
    let navigate = useNavigate()

    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        email: '',
        senha: '',
    })

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
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
                alert('Usuário cadastrado com sucesso')

            } catch (error) {
                alert('Erro ao cadastrar o Usuário')
            }

        } else {
            alert('Dados inconsistentes. Verifique as informações de cadastro.')
            setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
            setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
        }
    }

    return (
        <div className='container self-center flex flex-wrap justify-center gap-8'>

            <form onSubmit={cadastrarNovoUsuario} className='flex flex-col flex-grow-2 flex-grow max-w-[50rem] gap-y-4 p-8 bg-slate-50 shadow-lg rounded-lg'>
                <h2 className='text-2xl'>Se cadastrar com <span className='font-bold text-accent-pink'>Email e Senha;</span></h2>

                <label htmlFor="nome">Nome:</label>
                <input onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} value={usuario.nome} name="nome" id="nome" placeholder="Exemplo: Rhaíssa lima diva" className="bg-stone-200 text-stone-600 w-full px-5 py-2 text-lg rounded-lg border border-gray-400 placeholder-text-stone-600 shadow" />

                <label htmlFor="email">Email</label>
                <input onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} value={usuario.email} name="email" id="email" placeholder='Exemplo: flavio@hotmail.com' className="bg-stone-200 text-stone-600 w-full px-5 py-2 text-lg rounded-lg border border-gray-400 placeholder-text-stone-600 shadow" />

                <label htmlFor="senha">Senha:</label>
                <input onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} value={usuario.senha} name="senha" id="senha" type="password" placeholder='Insira sua senha' className="bg-stone-200 text-stone-600 w-full px-5 py-2 rounded-lg text-lg  border border-gray-400 placeholder-text-stone-600 shadow" />

                <label htmlFor="confirmarSenha">Confirmar Senha:</label>
                <input onChange={(e:ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)} value={confirmaSenha} name="confirmarSenha" id="confirmarSenha" type="password" placeholder='Confirme sua senha' className="bg-stone-200 text-stone-600 w-full px-5 py-2 rounded-lg text-lg  border border-gray-400 placeholder-text-stone-600 shadow" />

                <label htmlFor="foto">Foto:</label>
                <input onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} value={usuario.foto} name="foto" id="foto" placeholder="Exemplo: https://imgur.com/iddaimagem" className="bg-stone-200 text-stone-600 w-full px-5 py-2 text-lg rounded-lg border border-gray-400 placeholder-text-stone-600 shadow" />

                <button className='bg-accent-pink shadow-md text-stone-50 p-2 px-8 text-lg rounded-lg hover:bg-accent-orange_dark transition-colors duration-100'>Cadastrar</button>
                <p className='self-center'>Já tem um conta?{` `}<Link to="/login" className='text-cyan-600 hover:text-cyan-700'>Entre</Link>.</p>
            </form>
        </div>
    )
}

export default Cadastro
import { FacebookLogo, GoogleLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useEffect, useState } from 'react'
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../Contexts/AuthContext';
import { Bars } from 'react-loader-spinner';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }
  return (

    <div className=' container self-center flex flex-wrap justify-center    gap-8'>

      <div className='flex flex-col justify-between  flex-grow bg-stone-50 p-8 shadow-lg rounded-lg '>
        <h2 className='text-2xl mb-4'>Entrar com <span className='font-bold text-accent-orange'>Redes Sociais;</span></h2>
        
        <div className='flex flex-col gap-4'>
          <button className='bg-stone-500 shadow-md text-stone-50 p-2 px-8 text-lg rounded-lg hover:bg-stone-600 transition-colors duration-100'>Receber código de acesso por e-mail</button>

          <button className="bg-red-500 shadow-md text-stone-50  p-2 px-8 text-lg rounded-lg flex items-center hover:bg-red-600  transition-colors duration-100">
            <GoogleLogo size={24} className="" weight={"bold"} />
            <span className="flex-grow text-center">Entrar com Google</span>
          </button>

          <button className="bg-blue-500 shadow-md text-stone-50  p-2  px-8 text-lg rounded-lg flex items-center hover:bg-blue-600 transition-colors duration-100">
            <FacebookLogo size={24} className="" weight={"bold"} />
            <span className="flex-grow text-center">Entrar com Facebook</span>
          </button>
        </div>

        <div></div>
      
      </div>

      <form onSubmit={login} className='flex flex-col flex-grow-2 flex-grow  gap-y-4 p-8 bg-slate-50 shadow-lg rounded-lg'>
        <h2 className='text-2xl'>Entrar com <span className='font-bold text-accent-orange'>Email e Senha;</span></h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input type='email' name='usuario' id='usuario' onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} value={usuarioLogin.usuario} placeholder='user@email.com' className="bg-stone-200 text-stone-600 w-full px-5 py-2 text-lg rounded-lg border border-gray-400 placeholder-text-stone-600 shadow" />
        </div>
        
      <div>
<label htmlFor='senha'>Senha:</label>
          <input type='password' name='senha' id='senha' onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} value={usuarioLogin.senha} placeholder='Insira sua senha' className="bg-stone-200 text-stone-600 w-full px-5 py-2 rounded-lg text-lg  border border-gray-400 placeholder-text-stone-600 shadow" />
      </div>
        
        
        <button
          disabled={isLoading}
          className={`bg-accent-orange shadow-md text-stone-50 p-2 px-8 text-lg rounded-lg transition-colors duration-100 flex justify-center ${isLoading ? "hover:bg-accent-orange" : "hover:bg-accent-orange_dark"
            }`}
        >
          {!isLoading ? "Entrar" : <Bars color='#ffffff' width={24} height={24} />}
        </button>
        <p className='self-center'>Não tem um conta?{` `}<Link to="/cadastro" className='text-cyan-600 hover:text-cyan-700'>Cadastre-se</Link>.</p>
      </form>

    </div>
  )
}

export default Login
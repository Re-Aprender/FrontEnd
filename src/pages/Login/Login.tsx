import { FacebookLogo, GoogleLogo } from '@phosphor-icons/react'
import React from 'react'

function Login() {
  return (
    <div className='bg-stone-50 flex flex-wrap justify-center flex-grow pt-20 gap-32'>

      <div className='flex flex-col gap-y-4'>
        <p className='text-2xl'>Entrar com chave de acesso</p>
        <button className='bg-accent-orange text-stone-50 px-24 py-4 text-lg rounded hover:bg-black hover:text-white transition-colors duration-300'>Receber código de acesso por e-mail</button>

        <button className="bg-stone-600 text-stone-50 px-10 py-4 text-lg rounded flex items-center hover:bg-black hover:text-white transition-colors duration-300">
          <GoogleLogo size={32} className="" />
          <span className="flex-grow text-center">Entrar com Google</span>
        </button>

        
        <button className="bg-stone-600 text-stone-50 px-10 py-4 text-lg rounded flex items-center hover:bg-black hover:text-white transition-colors duration-300">
          <FacebookLogo size={32} className="" />
          <span className="flex-grow text-center">Entrar com Facebook</span>
        </button>
      </div>


      <div className='flex flex-col gap-y-4'>
        <p className='text-2xl'>Entrar com e-mail e senha</p>
        <input placeholder='Exemplo: flavio@hotmail.com' className="bg-stone-200 text-stone-600 w-full px-5 py-4 text-lg rounded border border-gray-400 placeholder-text-stone-600"/>
        <input placeholder='Insira sua senha' className="bg-stone-200 text-stone-600 w-full px-5 py-4 text-lg rounded border border-gray-400 placeholder-text-stone-600"/>

        <button className="bg-stone-600 text-stone-50 px-24 py-4 text-lg rounded hover:bg-black hover:text-white transition-colors duration-300">
          <span className="flex-grow text-center">Entrar</span>
        </button>

        
        <button className="bg-accent-orange text-stone-50 px-24 py-4 text-lg rounded hover:bg-black hover:text-white transition-colors duration-300">
          <span className="flex-grow text-center">Não tem uma conta? Registre-se</span>
        </button>
      </div>   
    </div>
  )
}

export default Login
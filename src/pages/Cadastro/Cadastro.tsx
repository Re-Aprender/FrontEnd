import { FacebookLogo, GoogleLogo } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Cadastro() {
    return (

        <div className=' container self-center flex flex-wrap justify-center    gap-8'>

            <div className='flex flex-col flex-grow-2 flex-grow max-w-[50rem] gap-y-4 p-8 bg-slate-50 shadow-lg rounded-lg'>
                <h2 className='text-2xl'>Se cadastrar com <span className='font-bold text-accent-pink'>Email e Senha;</span></h2>
                <label htmlFor="nome">Nome:</label>
                <input name="nome" id="nome" placeholder="Exemplo: Rhaíssa lima diva" className="bg-stone-200 text-stone-600 w-full px-5 py-2 text-lg rounded-lg border border-gray-400 placeholder-text-stone-600 shadow" />
                <label htmlFor="email">Email</label>
                <input name="email" id="email" placeholder='Exemplo: flavio@hotmail.com' className="bg-stone-200 text-stone-600 w-full px-5 py-2 text-lg rounded-lg border border-gray-400 placeholder-text-stone-600 shadow" />
                <label htmlFor="senha">Senha:</label>
                <input name="senha" id="senha" type="password" placeholder='Insira sua senha' className="bg-stone-200 text-stone-600 w-full px-5 py-2 rounded-lg text-lg  border border-gray-400 placeholder-text-stone-600 shadow" />
                <label htmlFor="foto">Foto:</label>
                <input name="foto" id="foto" placeholder="Exemplo: https://imgur.com/iddaimagem" className="bg-stone-200 text-stone-600 w-full px-5 py-2 text-lg rounded-lg border border-gray-400 placeholder-text-stone-600 shadow" />
                <button className='bg-accent-pink shadow-md text-stone-50 p-2 px-8 text-lg rounded-lg hover:bg-accent-orange_dark transition-colors duration-100'>Cadastrar</button>
                <p className='self-center'>Já tem um conta?{` `}<Link to="/login" className='text-cyan-600 hover:text-cyan-700'>Entre</Link>.</p>
            </div>
        </div>
    )
}

export default Cadastro
import icone from '../../assets/icone.png'
import rhaissa from '../../assets/rhaissa.jpeg'
import bianka from '../../assets/bianka.png'
import willian from '../../assets/willian.jpeg'
import lucas from '../../assets/lucas.jpeg'
import flavio from '../../assets/flavio.jpeg'
import palloma from '../../assets/palloma.jpeg'
import jailson from '../../assets/jailson.jpeg'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Sobre() {
  return (
    <section className="flex flex-col  ">
      <div className="container m-auto flex flex-col items-center  p-8 bg-stone-100 rounded-lg shadow-lg">
        <div className='container flex flex-wrap items-center gap-6 justify-center'>
          <div className='flex-1 min-w-80'>
            <h1 className="text-4xl mb-6">Sobre o <span className="text-accent-pink font-bold">Projeto;</span></h1>

            <p className="leading-7 mb-3 max-w-[100ch]">O projeto Re;Aprender está alinhado com o Objetivo de Desenvolvimento Sustentável (ODS) 4 da ONU, que visa promover educação inclusiva e de qualidade. A iniciativa se dedica à venda de livros novos e usados a preço de custo, com o objetivo de democratizar o acesso à leitura e ao aprendizado para todas as pessoas, independentemente de sua situação socioeconômica.</p>
            <p className="leading-7 max-w-[100ch]">O Re;Aprender utiliza tecnologias avançadas para oferecer uma solução robusta. No backend, são empregados Java, Spring Boot e bancos de dados relacionais para assegurar um sistema sólido e eficiente. No frontend, são utilizadas as tecnologias React, TypeScript e Tailwind para garantir uma interface moderna e responsiva. A combinação dessas tecnologias permite que a plataforma atenda a elevados padrões técnicos e tenha um impacto significativo na facilitação do acesso à educação e à cultura de forma acessível e inclusiva.</p>
          </div>
          <div className='max-w-80 flex-1 min-w-80'>
            <img src={icone} alt="" />
          </div>
        </div>
      </div>

      <div className="container m-auto flex flex-col items-center my-8 p-8  bg-stone-100 rounded-lg shadow-lg">
        <h1 className="text-4xl mb-6">Sobre <span className="text-accent-orange font-bold">Nós;</span></h1>

        <p className="leading-7 mb-5 text-center">O Re;Aprender é desenvolvido por uma equipe composta por sete pessoas, todas participantes do bootcamp Java Fullstack da Generation Brasil e residentes no Rio de Janeiro e em São Paulo.</p>

        <div className='flex flex-wrap justify-center gap-4'>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={rhaissa} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Rhaíssa Lima</h3>
            <ul className='px-3 pb-3'>
              <li><span className='text-accent-pink font-semibold'>✓ </span>21 anos</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Rio de Janeiro - Rio de Janeiro</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Desenvolvedora Fullstack Java</li>
            </ul>
            <div className='px-3 pb-3 flex items-center justify-center'>
              <a className='text-accent-pink' href="https://github.com/rhaissabg"><GithubLogo size={32} weight={"fill"} /></a>
              <a className='text-accent-orange' href="https://www.linkedin.com/in/rhaissabg/"><LinkedinLogo size={32} weight={"fill"} /></a>
            </div>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={bianka} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Bianka Staianof</h3>
            <ul className='px-3 pb-3'>
              <li><span className='text-accent-pink font-semibold'>✓ </span>26 anos</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Santo André - São Paulo</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Desenvolvedora Fullstack Java</li>
            </ul>
            <div className='px-3 pb-3 flex items-center justify-center'>
              <a className='text-accent-pink' href="https://github.com/bonninho"><GithubLogo size={32} weight={"fill"} /></a>
              <a className='text-accent-orange' href="https://www.linkedin.com/in/bianka-bonete-staianof-27b950b4/"><LinkedinLogo size={32} weight={"fill"} /></a>
            </div>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={flavio} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Flávio Coutinho</h3>
            <ul className='px-3 pb-3'>
              <li><span className='text-accent-pink font-semibold'>✓ </span>27 anos</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Zona Norte - São Paulo</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Desenvolvedor Fullstack Java</li>
            </ul>
            <div className='px-3 pb-3 flex items-center justify-center'>
              <a className='text-accent-pink' href="https://github.com/Kokinho00"><GithubLogo size={32} weight={"fill"} /></a>
              <a className='text-accent-orange' href="https://www.linkedin.com/in/flavio-coutinho-b47a42172/"><LinkedinLogo size={32} weight={"fill"} /></a>
            </div>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='h-96 object-cover rounded-t-xl' src={lucas} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Lucas Barbosa</h3>
            <ul className='px-3 pb-3'>
              <li><span className='text-accent-pink font-semibold'>✓ </span>20 anos</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Jandira - São Paulo</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Desenvolvedor Fullstack Java</li>
            </ul>
            <div className='px-3 pb-3 flex items-center justify-center'>
              <a className='text-accent-pink' href="https://github.com/lucasbarbosa0217"><GithubLogo size={32} weight={"fill"} /></a>
              <a className='text-accent-orange' href="https://linkedin.com/in/lucasbarbosa0217"><LinkedinLogo size={32} weight={"fill"} /></a>
            </div>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={jailson} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Jailson Martins</h3>
            <ul className='px-3 pb-3'>
              <li><span className='text-accent-pink font-semibold'>✓ </span>21 anos</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>São Paulo - São Paulo</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Desenvolvedor Fullstack Java</li>
            </ul>
            <div className='px-3 pb-3 flex items-center justify-center'>
              <a className='text-accent-pink' href="https://github.com/jailsonmartinsfilho"><GithubLogo size={32} weight={"fill"} /></a>
              <a className='text-accent-orange' href="https://www.linkedin.com/in/jailsonmartinsfilho/"><LinkedinLogo size={32} weight={"fill"} /></a>
            </div>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={willian} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Willian Serafim</h3>
            <ul className='px-3 pb-3'>
              <li><span className='text-accent-pink font-semibold'>✓ </span>18 anos</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>São Paulo - São Paulo</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Desenvolvedor Fullstack Java</li>
            </ul>
            <div className='px-3 pb-3 flex items-center justify-center'>
              <a className='text-accent-pink' href="https://github.com/willian-seraf1m"><GithubLogo size={32} weight={"fill"} /></a>
              <a className='text-accent-orange' href="https://www.linkedin.com/in/willian-serafim-9481782a4/"><LinkedinLogo size={32} weight={"fill"} /></a>
            </div>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={palloma} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Palloma Rangel</h3>
            <ul className='px-3 pb-3'>
              <li><span className='text-accent-pink font-semibold'>✓ </span>29 anos</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Rio de Janeiro - Rio de Janeiro</li>
              <li><span className='text-accent-pink font-semibold'>✓ </span>Desenvolvedora Fullstack Java</li>
            </ul>
            <div className='px-3 pb-3 flex items-center justify-center'>
              <a className='text-accent-pink' href="https://github.com/rangeldatascientist"><GithubLogo size={32} weight={"fill"} /></a>
              <a className='text-accent-orange' href="https://www.linkedin.com/in/pallomasilva/"><LinkedinLogo size={32} weight={"fill"} /></a>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Sobre
import icone from '../../assets/icone.png'
import rhaissa from '../../assets/rhaissa.jpeg'
import bianka from '../../assets/bianka.png'
import willian from '../../assets/willian.jpeg'
import lucas from '../../assets/lucas.jpeg'
import flavio from '../../assets/flavio.jpeg'
import palloma from '../../assets/palloma.jpeg'
import jailson from '../../assets/jailson.jpeg'
import teste from "../../assets/jailson.jpeg"

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
              <li>✓ 21 anos</li>
              <li>✓ Rio de Janeiro - Rio de Janeiro</li>
              <li>✓ Desenvolvedora Fullstack Java</li>
            </ul>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={bianka} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Bianka Staianof</h3>
            <ul className='px-3 pb-3'>
              <li>✓ 26 anos</li>
              <li>✓ Santo André - São Paulo</li>
              <li>✓ Desenvolvedora Fullstack Java</li>
            </ul>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={flavio} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Flávio Coutinho</h3>
            <ul className='px-3 pb-3'>
              <li>✓ 27 anos</li>
              <li>✓ Zona Norte - São Paulo</li>
              <li>✓ Desenvolvedor Fullstack Java</li>
            </ul>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={lucas} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Lucas Barbosa</h3>
            <ul className='px-3 pb-3'>
              <li>✓ 20 anos</li>
              <li>✓ Jandira - São Paulo</li>
              <li>✓ Desenvolvedor Fullstack Java</li>
            </ul>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={jailson} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Jailson Martins</h3>
            <ul className='px-3 pb-3'>
              <li>✓ 21 anos</li>
              <li>✓ São Paulo - São Paulo</li>
              <li>✓ Desenvolvedor Fullstack Java</li>
            </ul>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={willian} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Willian Serafim</h3>
            <ul className='px-3 pb-3'>
              <li>✓ 18 anos</li>
              <li>✓ São Paulo - São Paulo</li>
              <li>✓ Desenvolvedor Fullstack Java</li>
            </ul>
          </div>

          <div className='max-w-80 shadow rounded-xl overflow-hidden'>
            <img className='max-w-full h-96 object-cover' src={palloma} alt="" />
            <h3 className='px-3 pt-2 pb-1 font-bold text-xl'>Palloma Rangel</h3>
            <ul className='px-3 pb-3'>
              <li>✓ 29 anos</li>
              <li>✓ Rio de Janeiro - Rio de Janeiro</li>
              <li>✓ Desenvolvedora Fullstack Java</li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Sobre
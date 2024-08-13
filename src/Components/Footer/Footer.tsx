import logobranca from "../../assets/logobranca.png"
import { Link } from 'react-router-dom'
import { EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo, Phone } from '@phosphor-icons/react'

function Footer() {
    return (
        <footer className='flex flex-col items-center bg-gradient-to-r  from-accent-pink to-accent-orange'>

            <div className='container p-4 gap-4 flex flex-wrap items-center justify-between'>

                <div className="max-w-48">
                    <img src={logobranca} alt="Logo do projeto Reaprender" />
                </div>

                <div className='flex gap-2'>
                    <a href="https://instagram.com"  target="_blank">
                        <InstagramLogo size={32} weight="bold" className='text-stone-50' />
                    </a>

                    <a href="https://linkedin.com"  target="_blank">
                        <LinkedinLogo size={32} weight="bold" className='text-stone-50' />
                    </a>

                    <a href="tel:+5511967421552"  target="_blank">
                        <Phone size={32} weight="bold" className='text-stone-50' />
                    </a>

                    <a href="mailto:grupo01generation@gmail.com"  target="_blank">
                        <EnvelopeSimple size={32} weight="bold" className='text-stone-50' />
                    </a>

                    <a href="https://github.com/Re-Aprender"  target="_blank">
                        <GithubLogo size={32} weight="bold" className='text-stone-50' />
                    </a>
                </div>

            </div>

            <div className=' bg-stone-50 w-full flex flex-col items-center'>
                <div className='container  p-4 flex'>

                    <div>
                        <h3 className='text-2xl mb-2  font-semibold'>Páginas:</h3>
                        <ul className="flex-col gap-4 items-center list-disc pl-5">
                            <Link to="/home"><li className="hover:underline">Home</li></Link>
                            <Link to="/sobre"><li className="hover:underline">Sobre</li></Link>
                            <Link to="/login"><li className="hover:underline">Login</li></Link>

                        </ul>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer
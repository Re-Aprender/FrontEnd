import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Envelope, Phone, X } from '@phosphor-icons/react';

function Doar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleModalClick = (e) => {
        // Fecha o modal ao clicar fora dele
        if (e.target.classList.contains('modal-background')) {
            closeModal();
        }
    };

    return (
        <section className="flex flex-col">
            <div className="container m-auto flex flex-col items-center p-8 bg-stone-100 rounded-lg shadow-lg">
                <div className='container flex flex-col items-center'>
                    <h1 className="text-4xl mb-6">Doação de <span className="text-accent-pink font-bold">Livros</span></h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <p className="leading-7 mb-6 max-w-[100ch] md:border-r border-stone-500 ">
                            O projeto Re;Aprender aceita doações de livros novos ou usados, que serão disponibilizados na plataforma para outras pessoas. Sua doação nos ajuda a promover o acesso à leitura e ao conhecimento!
                        </p>
                        <p className="leading-7 mb-3 max-w-[100ch]  flex flex-col gap-4">
                            Se preferir, você também pode doar dinheiro, que será utilizado para a compra de livros, que disponibilizaremos no site. Qualquer ajuda é bem-vinda!
                            <button className="bg-accent-pink w-1/2 self-center text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 transition mb-6" onClick={openModal}>
                                Doar Dinheiro
                            </button>
                        </p>
                    </div>
                  
                   
                </div>
            </div>

            {/* Modal de Doação */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-background"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleModalClick}
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        > 
                            <X className="mt-4 text-red-500   top-0 right-0 absolute text-3xl mr-3" onClick={closeModal}/>

                            <h2 className="text-xl font-bold mb-4">Doe Dinheiro</h2>
                            <p className="mb-4">
                                As doações em dinheiro serão utilizadas para a compra de livros, que também serão disponibilizados no site para o acesso de todos.
                            </p>
                            <form className="flex flex-col gap-4">
                                <label>
                                    Nome:
                                    <input type="text" className="border p-2 rounded w-full" placeholder="Seu nome" />
                                </label>
                                <label>
                                    Email:
                                    <input type="email" className="border p-2 rounded w-full" placeholder="seuemail@email.com" />
                                </label>
                                <label>
                                    Valor da Doação:
                                    <input type="number" className="border p-2 rounded w-full" placeholder="R$ 50,00" />
                                </label>
                                <button type="submit" className="bg-accent-pink text-white py-2 px-4 rounded hover:bg-pink-600 transition">
                                    Confirmar Doação
                                </button>
                                <p className="text-sm text-gray-500">*Esta página é uma simulação.</p>

                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container m-auto flex flex-col items-center my-8 p-8 bg-stone-100 rounded-lg shadow-lg">
                <h2 className="text-4xl mb-6">Como Doar?</h2>
                <p className="leading-7 text-center mb-3 max-w-[100ch]">
                    Para doar um livro, entre em contato com a nossa equipe e organize a entrega física ou envio pelo correio. Também aceitamos doações em dinheiro que serão utilizadas para a compra de livros e outros materiais educativos.
                </p>
                <div className="flex items-center mb-2">
                    <Phone size={20} className="mr-2" />
                    <a href="tel:+5511967421552" className="text-blue-600 hover:underline">
                        +55 11 96742-1552
                    </a>
                </div>
                <div className="flex items-center mb-2">
                    <Envelope size={20} className="mr-2" />
                    <a href="mailto:grupo01generation@gmail.com" className="text-blue-600 hover:underline">
                        grupo01generation@gmail.com
                    </a>
                </div>
                <p className="text-sm text-gray-500">*Esta página é uma simulação.</p>
            </div>

        </section>
    );
}

export default Doar;

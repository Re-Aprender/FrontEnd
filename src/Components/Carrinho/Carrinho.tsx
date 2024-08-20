import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { motion } from 'framer-motion';

function Carrinho() {
    const { setIsCarrinho } = useContext(AuthContext);

    function handleCarrinho() {
        setIsCarrinho(false);
    }

    return (
        <>
        <motion.aside
            className="fixed h-screen w-screen z-30 cursor-pointer flex justify-end"
            onClick={handleCarrinho}
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            transition={{duration: 0.4}}
        >
        
        </motion.aside>

            <motion.div
                className="bg-stone-50 h-full fixed w-1/2 z-50 max-w-[27rem]  p-4 right-0 flex flex-col"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.2 }}
            >
                <h1 className="text-4xl mb-6 self-start">Seu <span className="text-accent-pink font-bold">carrinho;</span></h1>

                <button
                    className="rounded-md text-stone-50 bg-gradient-to-r from-accent-pink to-accent-orange py-2 block shadow-md"
                    type="submit"
                >
                    Comprar
                </button>
            </motion.div>

        </>
    );
}

export default Carrinho;

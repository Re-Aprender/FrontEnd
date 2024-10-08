import React, { createContext, useContext, useState, ReactNode } from 'react';
import Livro from '../models/Livro';


interface ListaDeLivrosContextType {
    livros: Map<number, { livro: Livro; quantidade: number }>;
    adicionarLivro: (livro: Livro) => void;
    diminuirQuantidade: (id: number) => void;
    getQuantidade: (id: number) => number;
    limpar: () => void
}

const ListaDeLivrosContext = createContext<ListaDeLivrosContextType | undefined>(undefined);

const ListaDeLivrosProvider = ({ children }: { children: ReactNode }) => {
    const [livros, setLivros] = useState<Map<number, { livro: Livro; quantidade: number }>>(new Map());

    const adicionarLivro = (livro: Livro) => {
        setLivros((prevLivros) => {
            const novoMapa = new Map(prevLivros);
            const chave = livro.id;

            if (novoMapa.has(chave)) {
                const itemExistente = novoMapa.get(chave)!;
                itemExistente.quantidade += 1;
            } else {
                novoMapa.set(chave, { livro, quantidade: 1 });
            }

            return novoMapa;
        });
    };

    const diminuirQuantidade = (id: number) => {
        setLivros((prevLivros) => {
            const novoMapa = new Map(prevLivros);
            console.log(novoMapa.has(id))
            if (novoMapa.has(id)) {
                const itemExistente = novoMapa.get(id)!;

                if (itemExistente.quantidade > 1) {
                    itemExistente.quantidade -= 1;
                } else {
                    novoMapa.delete(id);
                }
            }

            return novoMapa;
        });
    };

    const getQuantidade = (id: number): number => {
        return livros.get(id)?.quantidade || 0;
    };

    const limpar = () => {
        setLivros(new Map())
    };


    return (
        <ListaDeLivrosContext.Provider value={{ livros, adicionarLivro, diminuirQuantidade, getQuantidade, limpar }}>
            {children}
        </ListaDeLivrosContext.Provider>
    );
};

export { ListaDeLivrosProvider, ListaDeLivrosContext };

import { useContext, useEffect, useState } from 'react';
import { ListaDeLivrosContext } from '../../Contexts/CarrinhoContext';
import CarrinhoItem from '../../Components/Carrinho/CarrinhoItem';
import { toastAlerta } from '../../util/toastAlerta';
import { useNavigate, useParams } from 'react-router-dom';
import Livro from '../../models/Livro';
import { buscarSemSet } from '../../services/Service';

interface LivroCompra {
    livro: Livro;
    quantidade: number;
}

function FinalizacaoCompra() {
    const { livros, limpar } = useContext(ListaDeLivrosContext);
    const [livrosCompra, setLivrosCompra] = useState<Map<number, LivroCompra>>(new Map());
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    async function buscarPorId(id: string) {
        try {
            const livro: Livro = await buscarSemSet(`/livros/${id}`, { headers: {} });
            setLivrosCompra((prevLivros) => {
                const newMap = new Map(prevLivros); 
                newMap.set(livro.id, { livro, quantidade: 1 }); 
                return newMap; 
            });
        } catch (error) {
            console.error("Erro ao buscar livro:", error);
        }
    }

    useEffect(() => {
        if (id) {
            buscarPorId(id);
        } else {
            
            setLivrosCompra(livros);
        }
    }, [id, livros]);

    const total = Array.from(livrosCompra.values()).reduce((acc, item) => acc + item.livro.preco * item.quantidade, 0).toFixed(2);

    const handleFinalizarCompra = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toastAlerta("Compra realizada com sucesso!", "sucesso");
        navigate("/home");
        if (!id) {
            limpar();
        }
    };

    return (
        <div className="container m-auto p-8 bg-stone-100 rounded-lg shadow-lg">
            <h1 className="text-4xl mb-6">Finalização da Compra</h1>

            <div className='flex flex-col gap-4 mb-4'>
                {Array.from(livrosCompra.values()).map((item) => (
                    <CarrinhoItem key={item.livro.id} livro={item.livro} quantidade={item.quantidade} />
                ))}
            </div>

            <div className='flex items-center gap-2 px-2 pb-4'>
                <div className='h-[0.08rem] flex-grow bg-stone-300'></div>
                <p className='text-stone-600 font-light'>
                    Total: <span className='font-medium text-xl text-accent-orange_dark'>R$ {total}</span>
                </p>
            </div>

            <form onSubmit={handleFinalizarCompra}>
                <div className="mb-4">
                    <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">Endereço de Entrega:</label>
                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Digite seu endereço"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="metodoPagamento" className="block text-sm font-medium text-gray-700">Método de Pagamento:</label>
                    <select
                        id="metodoPagamento"
                        name="metodoPagamento"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Selecione...</option>
                        <option value="cartaoCredito">Cartão de Crédito</option>
                        <option value="pix">PIX</option>
                        <option value="boleto">Boleto</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="rounded-md text-stone-50 bg-gradient-to-r from-accent-pink to-accent-orange py-2 block shadow-md"
                >
                    Finalizar Compra
                </button>
            </form>
        </div>
    );
}

export default FinalizacaoCompra;

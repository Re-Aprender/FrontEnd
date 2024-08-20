import Categoria from "./Categoria";

export default interface Livro {
    id: number;
    nome: string;
    autor: string;
    anoLancamento: string;
    editora: string;
    foto: string | null; 
    categoria: Categoria;
    preco?: number | null;
}
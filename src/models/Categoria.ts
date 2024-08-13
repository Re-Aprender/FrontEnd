import Livro from "./Livro";

export default interface Categoria {
    id: number;
    didatico: boolean;
    nome: string;
    livro: Livro[] | null;
}
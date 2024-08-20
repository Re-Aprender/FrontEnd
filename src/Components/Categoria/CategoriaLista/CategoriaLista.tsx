import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../Contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CategoriaCard from "../CategoriaCard/CategoriaCard";
import { toastAlerta } from "../../../util/toastAlerta";
import LivroCard from "../../Livros/LivroCard/LivroCard";

function CategoriaLista() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas() {
    try {
      await buscar('/categorias', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: unknown) {
      if (error instanceof Error && error.toString().includes('403')) {
        toastAlerta("O token expirou, favor logar novamente", "erro")
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta("Você precisa estar logado", "info")
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LivroCard livro={{
              id: 4,
              nome: "Diário de um Banana: Rodrick é o Cara",
              autor: "Jeff Kinney",
              anoLancamento: "2008",
              editora: "VR Editora",
              foto: "https://m.media-amazon.com/images/I/71+fh2vstSL._SY342_.jpg",
              preco: 29.99,
              categoria: {
                "id": 14,
                "didatico": false,
                "nome": "Fantasia",
                livro: []
              }
            }}/>
            {categorias.map((categoria) => (
         
                <CategoriaCard key={categoria.id} categoria={categoria} />
      
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriaLista;
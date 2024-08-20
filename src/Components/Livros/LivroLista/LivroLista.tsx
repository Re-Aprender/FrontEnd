import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../Contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import { toastAlerta } from "../../../util/toastAlerta";
import LivroCard from "../LivroCard/LivroCard";

function LivroLista() {
  const [livros, setLivros] = useState<Categoria[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas() {
    try {
      await buscar('livros', setLivros, {
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
  }, [livros.length]);
  return (
    <>
      {livros.length === 0 && (
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
            {livros.map((livro) => (
                <LivroCard key={livro.id} livro={livro} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LivroLista;
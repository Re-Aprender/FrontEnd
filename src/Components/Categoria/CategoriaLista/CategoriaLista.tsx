import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../Contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CategoriaCard from "../CategoriaCard/CategoriaCard";

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
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
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
            {categorias.map((categoria) => (
              <>
                <CategoriaCard key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriaLista;
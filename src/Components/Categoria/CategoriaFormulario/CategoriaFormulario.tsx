import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { toastAlerta } from "../../../util/toastAlerta";

function CategoriaFormulario() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setCategoria({
      ...categoria,
      [name]: name === 'didatico' ? value === 'true' : value, // Manter a conversão apenas para o campo 'didatico'
    });

    console.log(JSON.stringify(categoria));
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Categoria atualizada com sucesso", "sucesso");
        retornar();
      } catch (error: unknown) {
        if (error instanceof Error && error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar tema", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Categoria cadastrada com sucesso", "sucesso");
      } catch (error: unknown) {
        if (error instanceof Error && error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar categoria", "erro");
        }
      }
    }

    retornar();
  }

  function retornar() {
    navigate("/admin/categorias");
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
   

      <form className=" flex flex-col gap-4 p-4 rounded-lg max-w-[30rem] w-full shadow-lg bg-stone-50" onSubmit={gerarNovaCategoria}>
        <h1 className="text-4xl text-center my-8">
          {id === undefined ? "Cadastre uma nova categoria" : "Editar categoria"}
        </h1>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome || ''}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2 text-center bg-stone-100  p-2 rounded-md ">
          <label>A categoria é de livros didáticos?</label>
          <div className="flex gap-4 justify-center">
            <label className="flex gap-1">
              <input
                type="radio"
                name="didatico"
                value="true"
                checked={categoria.didatico === true}
                onChange={atualizarEstado}
              />
              Sim
            </label>
            <label className="flex gap-1">
              <input
                type="radio"
                name="didatico"
                value="false"
                checked={categoria.didatico === false}
                onChange={atualizarEstado}
              />
              Não
            </label>
          </div>
        </div>

        <button
          className="rounded-md text-stone-50 bg-gradient-to-r from-accent-pink to-accent-orange py-2 block shadow-md"
          type="submit"
        >
          {id === undefined ? "Cadastrar" : "Editar"}
        </button>
      </form>
    </div>
  );
}

export default CategoriaFormulario;

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
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
      didatico: true
    })

    console.log(JSON.stringify(categoria))
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta("Categoria atualizada com sucesso", "sucesso")
        retornar()

      } catch (error: unknown) {
        if (error instanceof Error && error.toString().includes('403')) {
          toastAlerta("O token expirou, favor logar novamente", "erro")
          handleLogout()
        } else {
          toastAlerta("Erro ao atualizar tema", "erro")
        }

      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta("Categoria cadastrada com sucesso", "sucesso")

      } catch (error: unknown) {
        if (error instanceof Error && error.toString().includes('403')) {
          toastAlerta("O token expirou, favor logar novamente", "erro")
          handleLogout()
        } else {
          toastAlerta("Erro ao cadastrar categoria", "erro")
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/admin/categorias")
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta("Você precisa estar logado", "info")
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='nome'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded-md text-stone-50 bg-gradient-to-r  from-accent-pink to-accent-orange py-2 block shadow-md" type="submit">
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default CategoriaFormulario;
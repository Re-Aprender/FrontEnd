import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import Livro from "../../../models/Livro";
import Categoria from "../../../models/Categoria";

function LivroFormulario() {
  const [livro, setLivro] = useState<Livro>({} as Livro);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarPorId(id: string) {
    await buscar(`/livros/${id}`, setLivro, {
      headers: {
        Authorization: token,
      },
    });
  }


  async function buscarTemas() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    buscarTemas();
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);


  

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    if(name == "categoria"){
      setLivro(
        {
          ...livro,
          categoria: {
            id: Number(value)
          }
        }
      )
    }else{
      setLivro({
        ...livro,
        [name]: value,
      });
    }
 
    console.log(JSON.stringify(livro));
  }

  async function gerarNovoLivro(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/livros`, livro, setLivro, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Livro atualizado com sucesso", "sucesso");
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
        await cadastrar(`/livros`, livro, setLivro, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Livro cadastrado com sucesso", "sucesso");
      } catch (error: unknown) {
        if (error instanceof Error && error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar livro", "erro");
        }
      }
    }

    retornar();
  }

  function retornar() {
    navigate("/admin/livros");
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="container flex flex-row items-center justify-center w-full">

      <form className="flex flex-col w-full max-w-[30rem] gap-4 p-4 rounded-lg shadow-lg bg-stone-50 " onSubmit={gerarNovoLivro}>
        <h1 className="text-4xl text-center my-8">
          {id === undefined ? "Cadastre um livro" : "Editar livro"}
        </h1>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Livro</label>
          <input
            type="text"
            placeholder="Descrição"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={livro.nome || ''}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="autor">Autor do Livro</label>
          <input
            type="text"
            placeholder="Descrição"
            name="autor"
            className="border-2 border-slate-700 rounded p-2"
            value={livro.autor || ''}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="anoLancamento">Ano de lançamento:</label>
          <input
            type="text"
            placeholder="Descrição"
            name="anoLancamento"
            className="border-2 border-slate-700 rounded p-2"
            value={livro.anoLancamento || ''}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="editora">Editora:</label>
          <input
            type="text"
            placeholder="Descrição"
            name="editora"
            className="border-2 border-slate-700 rounded p-2"
            value={livro.editora || ''}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço:</label>
          <input
            type="text"
            placeholder="R$ 00.00"
            name="preco"
            className="border-2 border-slate-700 rounded p-2"
            value={livro.preco || ''}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto:</label>
          <input
            type="text"
            placeholder="https://foto.com"
            name="foto"
            className="border-2 border-slate-700 rounded p-2"
            value={livro.foto || ''}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="categoria">Categoria:</label>
          <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={atualizarEstado}>
            <option value="" selected disabled>Selecione uma categoria</option>
            {categorias.map((categoria) => (
                <option value={categoria.id} >{categoria.nome}</option>
            ))}
          </select>
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

export default LivroFormulario;

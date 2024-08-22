import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";
import { useNavigate } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";

function Perfil() {
    const { usuario } = useContext(AuthContext);
    const navigate = useNavigate();

    const [pagina, setPagina] = useState(0);

    function handlePerfil() {
        setPagina(0);
    }

    function handlePedido() {
        setPagina(1);
    }

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta("Você precisa estar logado!", "erro");
            navigate("/login");
        }
    }, [usuario.token, navigate]);

    return (
        <>
            {usuario.token !== "" ? (
                <div className="container flex flex-col items-center justify-center mx-auto">
                    <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-stone-50 w-full flex-wrap items-center max-w-[800px]">
                        <div className=" lg:w-52 text-xl flex flex-col gap-1">
                            <p className="cursor-pointer hover:text-accent-pink font-semibold" onClick={handlePerfil}>Meu Perfil</p>
                            <p className="cursor-pointer hover:text-accent-pink font-semibold" onClick={handlePedido}>Meus Pedidos</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 bg-stone-100 p-4 rounded-lg min-h-80 w-full">
                            {pagina === 0 && (
                                <>
                                    <img className="rounded-full h-56 w-56 object-cover border-4 border-stone-50" src={usuario.foto} alt="foto do usuário" />
                                    <h1 className="text-2xl text-center">
                                        Seja bem-vinde, <span className="text-accent-pink font-bold">{usuario.nome}</span>;
                                    </h1>
                                </>
                            )}
                            {pagina === 1 && (
                                <h1 className="text-2xl text-center min-w-full">
                                    {usuario.nome}, aqui aparecerão os seus <span className="text-accent-orange font-bold">pedidos</span>;
                                </h1>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <FallingLines color="#ff7155" width="200" height="200" visible={true} />
            )}
        </>
    );
}

export default Perfil;

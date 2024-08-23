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
                        <div className=" border-b border-stone-300 pb-6  text-xl flex flex-col w-full gap-3">
                            <button className={"cursor-pointer hover:text-accent-pink font-semibold hover:underline bg-stone-200 min-w-full p-2 rounded-lg shadow-md " + `${pagina === 0 && "text-accent-pink"} `} onClick={handlePerfil}>Meu Perfil</button>
                            <button className={"cursor-pointer hover:text-accent-orange font-semibold hover:underline  bg-stone-200 min-w-full p-2 rounded-lg shadow-md " + `${pagina === 1 && "text-accent-orange"} `} onClick={handlePedido}>Meus Pedidos</button>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center mt-1 gap-4 bg-stone-100 p-4 rounded-lg min-h-80 w-full">
                            {pagina === 0 && (
                                <>
                                    <img className="rounded-full h-56 w-56 object-cover border-4 border-stone-50 shadow-lg" src={usuario.foto} alt="foto do usuário" />
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

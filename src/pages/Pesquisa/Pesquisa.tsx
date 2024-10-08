import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Swiper.css"
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Livro from "../../models/Livro";
import { buscar } from "../../services/Service";
import { FallingLines } from "react-loader-spinner";
import { useNavigate, useNavigationType, useParams } from "react-router-dom";
import Book from '../../Components/Book/BookCard/Book';
import { toastAlerta } from '../../util/toastAlerta';


function Pesquisa() {
    const [livros, setLivros] = useState<Livro[]>([]);


    const [isLoading, setIsLoading] = useState(true)

    let { pesquisa, categoria, nomecategoria} = useParams();

    const navigate = useNavigate()

    async function buscarTemas() {
        setIsLoading(true)
        if(pesquisa){
            await buscar(`/livros/nome/${pesquisa}`, setLivros, {
                headers: {},
            });}
        else if(categoria){
            try{
                await buscar(`/livros/categoria/${categoria}`, setLivros, {
                    headers: {},
                });
            }catch(e){
                navigate("/home")
                toastAlerta("Erro ao buscar a categoria", "erro")
            }
          
        }
       
        setIsLoading(false)
    }

    useEffect(() => {
        buscarTemas();
    }
        , [pesquisa]);

    return (
        <>
            <div className="container">
                <h1 className="text-4xl mt-8 mb-6 self-start">
                    {!categoria ? (
                        <>Resultados de pesquisa para: <span className="text-accent-orange font-bold">{pesquisa}</span></>
                    ) : (
                            <>Livros da categoria : <span className="text-accent-orange font-bold">{livros[0] ? livros[0].categoria.nome : categoria}</span></>
                    )}
                </h1>
            </div>
            {!isLoading ? <Swiper
                slidesPerView={'auto'}
                spaceBetween={16}
                scrollbar={{
                    hide: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Scrollbar, Navigation]}
                className="mySwiper container flex flex-start pb-8 bookList pr-9"
            >
                {
                    livros.map((livro) => (
                        <SwiperSlide className="max-w-fit" key={livro.id}>
                            <Book key={livro.id} livro={livro} />
                        </SwiperSlide>
                    ))
                }
            </Swiper> :
                <FallingLines color="#ff7155" width="200" height="200" visible={true} />
            }
        </>
    )
}

export default Pesquisa


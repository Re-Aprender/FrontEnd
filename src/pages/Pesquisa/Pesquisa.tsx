import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Swiper.css"
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Livro from "../../models/Livro";
import { buscar } from "../../services/Service";
import { FallingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Book from '../../Components/Book/BookCard/Book';


function Pesquisa() {
    const [livros, setLivros] = useState<Livro[]>([]);


    const [isLoading, setIsLoading] = useState(true)

    let { pesquisa} = useParams();


    async function buscarTemas() {
        setIsLoading(true)
        await buscar(`/livros/nome/${pesquisa}`, setLivros, {
            headers: {},
        });
        setIsLoading(false)
    }

    useEffect(() => {
        buscarTemas();
    }
        , [pesquisa]);

    return (
        <>
            <div className="container">
                <h1 className="text-4xl mt-8 mb-6 self-start ">Resultados de pesquisa para: <span className="text-accent-orange font-bold">{pesquisa};</span></h1>
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


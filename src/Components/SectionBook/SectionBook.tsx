import Book from "../Book/BookCard/Book";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Swiper.css"
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Livro from "../../models/Livro";
import { buscar } from "../../services/Service";
import { FallingLines } from "react-loader-spinner";
import { toastAlerta } from "../../util/toastAlerta";
interface SectionBook {
  didatico: boolean
  ignore?: boolean
}

function SectionBook({ didatico, ignore }: SectionBook) {
  const [livros, setLivros] = useState<Livro[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function buscarTemas() {

    try{
      setIsLoading(true);

      await buscar('/livros', setLivros, {
        headers: {},
      });
      setIsLoading(false)
    }catch(e) {
      setIsLoading(false)
      toastAlerta("Erro ao carregar livros.", "erro")
    }
   
  }

  useEffect(() => {
    buscarTemas();
  }
    , []);

  return (
    <>
      {!isLoading ? 
      
      <Swiper
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
          livros.length > 0 ?(
          ignore == false ?
            (
              livros
                .filter((livro) => livro.categoria.didatico == didatico)
                .map((livro) => (
                  <SwiperSlide className="max-w-fit" key={livro.id}>
                    <Book key={livro.id} livro={livro} />
                  </SwiperSlide>
                ))
            ) :
            (
              livros.map((livro) => (
                <SwiperSlide className="max-w-fit" key={livro.id}>
                  <Book key={livro.id} livro={livro} />
                </SwiperSlide>
              ))
            ))
            :

              <SwiperSlide className="max-w-fit">
                <p>Não existem livros registrados</p>
                </SwiperSlide>
        }
      </Swiper> : 
        <FallingLines color="#ff7155" width="200" height="200" visible={true}  />
      }
    </>
  )
}

export default SectionBook


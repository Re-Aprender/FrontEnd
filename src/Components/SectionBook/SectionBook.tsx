import Book from "../Book/BookCard/Book";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Swiper.css"

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Livro from "../../models/Livro";
import { buscar } from "../../services/Service";

function SectionBook() {
  const [livros, setLivros] = useState<Livro[]>([]);

  async function buscarTemas() {
    await buscar('/livros', setLivros, {
      headers: {},
    });
  }

  useEffect(() => {
    buscarTemas();
  }, [livros.length]);

  return (
    <>
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

        {livros.map((livro) => (
          <SwiperSlide className="max-w-fit" key={livro.id}>
            <Book key={livro.id} livro={livro} />
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}

export default SectionBook


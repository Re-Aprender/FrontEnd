import Book from "../Book/Book";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Swiper.css"

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SectionBook() {
  
const elements = [];
  
  for (let i = 0; i < 20; i++) {
    elements.push(<SwiperSlide className="max-w-fit" key={i}><Book></Book></SwiperSlide>);
  }
  return (
 

    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        scrollbar={{
          hide: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Scrollbar, Navigation]}
        className="mySwiper container flex flex-start pb-8 bookList"
      >
        {elements}
      </Swiper>
    </>
  )
}

export default SectionBook


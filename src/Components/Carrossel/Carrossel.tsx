import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrossel.css"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Carrossel() {

    var items = [
        { img: "https://firebasestorage.googleapis.com/v0/b/reaprender-65b7d.appspot.com/o/bannerrobotica.png?alt=media&token=0dd5a6e6-70a5-4763-91f5-1c75cd239fc5" },
        { img: "https://firebasestorage.googleapis.com/v0/b/reaprender-65b7d.appspot.com/o/bannerarte.png?alt=media&token=dc292523-1309-48a0-8f3c-d8fbbc348bed" },
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper max-w-full banner"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className="w-full min-h-[130px]  object-cover" src={item.img} alt="Imagem" />
                        </SwiperSlide>
                        
                    ))
                }
            </Swiper>
        </>
    )
}

export default Carrossel
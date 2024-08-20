// Importando os Componentes Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando SEU CSS
import "./Carrossel.css"
// Importando Modulos do Carrossel
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Carrossel() {

    var items = [
        { img: "https://firebasestorage.googleapis.com/v0/b/reaprender-65b7d.appspot.com/o/banner.png?alt=media&token=bad7f120-3dfe-47ff-af26-f9b1e86ef161" },
        { img: "https://firebasestorage.googleapis.com/v0/b/reaprender-65b7d.appspot.com/o/bannerrobotica.png?alt=media&token=2b291b13-3230-4622-ad7c-ecce0a0e460c" },
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
                    items.map((item) => (

                        <SwiperSlide>
                            <img className="w-full min-h-[130px]  object-fit" src={item.img} alt="Imagem" />
                        </SwiperSlide>
                        
                    ))
                }

            </Swiper>
        </>
    )
}

export default Carrossel
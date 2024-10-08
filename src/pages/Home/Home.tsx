import SectionBook from "../../Components/SectionBook/SectionBook"
import "./banner.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { buscar } from "../../services/Service";
import { Link } from "react-router-dom";

function Home() {
  
  const {usuario} =useContext(AuthContext);
  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
     buscar("/categorias", setCategorias, {headers: {"Authorization": usuario.token}})

  }, [])

  useEffect(() => {
    console.log(categorias)
  }, [categorias])

  return (
<>


   <div className="container">

        {
          usuario.token&&
            <h1 className="text-4xl mb-6 self-center">Bem vinde <span className="text-accent-pink font-bold">{`${usuario.nome}`}</span></h1>
        }
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={16}
          scrollbar={{ hide: false }}
          pagination={{ clickable: true }}
          modules={[Scrollbar]}
          className="mySwiper categorias container flex flex-start p-4 rounded-lg bookList max-w-fit  bg-stone-50 items-center "
        >
          {categorias.map((item) => <SwiperSlide
          key={item.id}
          className="w-fit flex-grow"
          ><Link to={`/categoria/${item.id}`} className="text-accent-pink font-bold text-lg hover:underline">{item.nome} </Link></SwiperSlide>)}
        </Swiper>
   </div>

        
      <div className="container">
        <h1 className="text-4xl mt-8 mb-6 self-start ">Todos <span className="text-accent-orange font-bold">livros;</span></h1>
      </div>
      <SectionBook didatico={true} ignore={true} />
      <div className="container">
        <h1 className="text-4xl mt-8 mb-6 self-start ">Livros <span className="text-accent-pink font-bold">didáticos;</span></h1>
      </div>
      <SectionBook didatico={true} ignore={false} />
      <div className="container">
        <h1 className="text-4xl mt-8 mb-6 self-start ">Livros de <span className="text-accent-orange font-bold">ficção;</span></h1>
      </div>
      <SectionBook didatico={false} ignore={false} />
    </>
  )
}

export default Home
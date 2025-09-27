// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import "swiper/css";

// const FieldCard = ({ images }) => {
//   return (
//     <div className="w-full md:w-[400px] lg:w-[500px] h-[250px] bg-white shadow-lg rounded-2xl overflow-hidden ml-auto">
//       <Swiper
//         spaceBetween={10}
//         slidesPerView={5} // show max 5 images
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         modules={[Autoplay]}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           480: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           768: { slidesPerView: 4 },
//           1024: { slidesPerView: 5 },
//         }}
//       >
//         {images.map((img, i) => (
//           <SwiperSlide key={i}>
//             <img
//               src={img}
//               alt={`Field ${i + 1}`}
//               className="w-full h-full object-cover rounded-xl"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default FieldCard;

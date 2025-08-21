import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    "text": "Love my plants! Healthy, vibrant, and expertly packed. Fast shipping, great service—will order again!",
    "name": "John Doe",
    "role": "Designer",
    "img": "/img/review-1.jpg"
  },
  {
    "text": "Perfect plants! Arrived fresh and lush. Superb customer care—highly recommend!",
    "name": "Sarah Lee",
    "role": "Botanist",
    "img": "/img/review-2.jpg"
  },
  {
    "text": "Impressed with the quality! Thriving in my garden. Delivery was lightning-fast!",
    "name": "Michael Chen",
    "role": "Teacher",
    "img": "/img/review-3.jpg"
  },
  {
    "text": "Five stars! Beautiful packaging, plants in pristine condition. Will be a repeat customer!",
    "name": "Emma Rivera",
    "role": "Artist",
    "img": "/img/review-4.jpg"
  },
  {
    "text": "Exactly as pictured! Easy to care for and arrived promptly. Very satisfied!",
    "name": "David Kim",
    "role": "Engineer",
    "img": "/img/review-5.jpg"
  },
  {
    "text": "My go-to plant shop! Always healthy, always stunning. Service is exceptional!",
    "name": "Priya Patel",
    "role": "Yoga Instructor",
    "img": "/img/review-6.jpg"
  },
  {
    "text": "Worth every penny! Plants are thriving and customer support is top-notch!",
    "name": "James Wilson",
    "role": "Chef",
    "img": "/img/review-7.jpg"
  },
  {
    "text": "Delighted with my purchase! Vibrant, pest-free, and packed with care. 10/10!",
    "name": "Olivia Martin",
    "role": "Writer",
    "img": "/img/review-8.jpg"
  },
  {
    "text": "Fast shipping, gorgeous plants! Even better than expected. Already planning my next order!",
    "name": "Daniel Ng",
    "role": "Photographer",
    "img": "/img/review-9.jpg"
  },
  {
    "text": "A breath of fresh air! Plants arrived perfect and perked up my home instantly!",
    "name": "Sophia Garcia",
    "role": "Nurse",
    "img": "/img/review-10.jpg"
  }
];

function Review() {
  const swiperRef = useRef(null);

  return (
    <section className="relative mb-20 md:mb-28 overflow-hidden">
      <div className="absolute -top-3 -left-12 opacity-50">
        <img src="/img/leaf-4.png" alt="" className="w-40 md:w-52 xl:w-64 animate-slide-left"/>
      </div>
      
      <div className="flex flex-col items-center gap-3 text-center mb-40 animate-slide-down">
        <h2 className="lobster-regular text-yellow-500">Customer Review</h2>
        <p className="max-w-2xl">
          Real customers,real reviews—happy plants,happy homes!" 🌿🏡
        </p>
      </div>

      <div 
        className="container"
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="py-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6 mx-4">
                <p className="lobster-regular">{review.text}</p>
                <div className="flex items-center">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase">{review.name}</p>
                    <p>{review.role}</p>
                  </div>
                  <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Review;

























// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const reviews =[
//   {
//     "text": "Love my plants! Healthy, vibrant, and expertly packed. Fast shipping, great service—will order again!",
//     "name": "John Doe",
//     "role": "Designer",
//     "img": "/img/review-1.jpg"
//   },
//   {
//     "text": "Perfect plants! Arrived fresh and lush. Superb customer care—highly recommend!",
//     "name": "Sarah Lee",
//     "role": "Botanist",
//     "img": "/img/review-2.jpg"
//   },
//   {
//     "text": "Impressed with the quality! Thriving in my garden. Delivery was lightning-fast!",
//     "name": "Michael Chen",
//     "role": "Teacher",
//     "img": "/img/review-3.jpg"
//   },
//   {
//     "text": "Five stars! Beautiful packaging, plants in pristine condition. Will be a repeat customer!",
//     "name": "Emma Rivera",
//     "role": "Artist",
//     "img": "/img/review-4.jpg"
//   },
//   {
//     "text": "Exactly as pictured! Easy to care for and arrived promptly. Very satisfied!",
//     "name": "David Kim",
//     "role": "Engineer",
//     "img": "/img/review-5.jpg"
//   },
//   {
//     "text": "My go-to plant shop! Always healthy, always stunning. Service is exceptional!",
//     "name": "Priya Patel",
//     "role": "Yoga Instructor",
//     "img": "/img/review-6.jpg"
//   },
//   {
//     "text": "Worth every penny! Plants are thriving and customer support is top-notch!",
//     "name": "James Wilson",
//     "role": "Chef",
//     "img": "/img/review-7.jpg"
//   },
//   {
//     "text": "Delighted with my purchase! Vibrant, pest-free, and packed with care. 10/10!",
//     "name": "Olivia Martin",
//     "role": "Writer",
//     "img": "/img/review-8.jpg"
//   },
//   {
//     "text": "Fast shipping, gorgeous plants! Even better than expected. Already planning my next order!",
//     "name": "Daniel Ng",
//     "role": "Photographer",
//     "img": "/img/review-9.jpg"
//   },
//   {
//     "text": "A breath of fresh air! Plants arrived perfect and perked up my home instantly!",
//     "name": "Sophia Garcia",
//     "role": "Nurse",
//     "img": "/img/review-10.jpg"
//   }
// ];

// function Review() {
//   const swiperRef = useRef(null);

//   return (
//     <section>
//       <div className="flex flex-col items-center gap-3 text-center mb-20">
//         <h2 className="lobster-regular text-yellow-500">Customer Review</h2>
//         <p className="max-w-2xl">
//           Real customers, real reviews—happy plants, happy homes!" 🌿🏡
//         </p>
//       </div>

//       <div
//         className="container py-12"
//         onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
//         onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
//       >
//         <Swiper
//           ref={swiperRef}
//           modules={[Autoplay, Pagination]}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           loop={true}
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {reviews.map((review, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6 w-full max-w-3xl mx-auto">
//                 <p className="lobster-regular">{review.text}</p>
//                 <div className="flex items-center">
//                   <img
//                     src={review.img}
//                     alt={review.name}
//                     className="w-12 h-12 rounded-full"
//                   />
//                   <div className="ml-2">
//                     <p className="text-yellow-500 uppercase">{review.name}</p>
//                     <p>{review.role}</p>
//                   </div>
//                   <i className="ri-double-quotes-r text-4xl ml-auto"></i>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default Review;

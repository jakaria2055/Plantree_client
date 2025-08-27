import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewStore from "../store/ReviewStore";

function Review() {
  const { ReviewList, ReviewListRequest } = ReviewStore();
  const swiperRef = useRef(null);

  useEffect(() => {
    (async () => {
      await ReviewListRequest();
    })();
  }, []);

  return (
    <section className="relative mb-20 md:mb-28 overflow-hidden">
      <div className="absolute -top-3 -left-12 opacity-50">
        <img
          src="/img/leaf-4.png"
          alt=""
          className="w-40 md:w-52 xl:w-64 animate-slide-left"
        />
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
          {ReviewList && ReviewList.length > 0 ? (
            ReviewList.map((review, index) => (
              <SwiperSlide key={review._id || index}>
                <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6 mx-4">
                  <p className="lobster-regular">{review.des}</p>
                  <div className="flex items-center">
                    <div className="ml-2">
                      <p className="text-yellow-500 uppercase">
                        {review.profile?.cus_name || "Customer"}
                      </p>
                    </div>
                    <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6 mx-4">
                <p className="lobster-regular">No reviews available yet.</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default Review;
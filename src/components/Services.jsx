import React from "react";

function Services() {
  return (
    <section>
      <div className="bg-white text-green-900 py-20">
        <div className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-slide-down">

          {/* CARD */}
          <div className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
            <div className="flex items-center gap-5">
              <i className="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
              <p className="md:text-lg font-bold">
                Fast <br></br>
                Delivery
              </p>
            </div>
            <p className="lobster-regular">
              Plant a tree today—grow hope, clean air, and a greener future.
              Every tree counts. Join the movement, heal the Earth, and leave a
              legacy
            </p>
          </div>

          <div className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
            <div className="flex items-center gap-5">
              <i className="ri-customer-service-line text-3xl md:text-4xl xl:text-5xl"></i>
              <p className="md:text-lg font-bold">
               Great Customer <br />
               Service
              </p>
            </div>
            <p className="lobster-regular">
              Exceptional service grows here! Fast responses, expert advice, and seamless delivery—we ensure your tree-planting journey is smooth, satisfying, and sustainable. Your satisfaction roots our success
            </p>
          </div>

          <div className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
            <div className="flex items-center gap-5">
              <i className="ri-plant-line text-3xl md:text-4xl xl:text-5xl"></i>
              <p className="md:text-lg font-bold">
                Original <br></br>
                Plants
              </p>
            </div>
            <p className="lobster-regular">
              Trust roots deep here! Reliable service, healthy plants, and honest advice—we grow lasting relationships with every order. Your trust is our greatest bloom.
            </p>
          </div>

          <div className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
            <div className="flex items-center gap-5">
              <i className="ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl"></i>
              <p className="md:text-lg font-bold">
                Affordable <br></br>
                Price
              </p>
            </div>
            <p className="lobster-regular">
              Grow more, spend less! Quality plants at affordable prices—because a greener future should be within everyone’s reach. Trust us for value that blooms!
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Services;

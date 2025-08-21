import React from "react";

function About() {
  return (
    <section id="about" className="relative overflow-hidden">

      <div className="absolute top -right-12 opacity-50">
        <img src="/img/leaf-3.png" alt=""  className="w-40 md:w-52 xl:w-64 animate-slide-left"/>
      </div>


      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20 animate-slide-down">
        <h2 className="lobster-regular text-yellow-500">About Us</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>

      <div className="container space-y-10 xl:space-y-0">
        {/* ITEM1 */}
        <div className="flex flex-col items-center lg:flex-row gap-5">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src="/img/plant-1.png"
              alt=""
              className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
            />
          </div>

          {/* CONTENt */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>
                Make your <span class="text-yellow-500">organic</span> <br />
                garden
              </h3>
              <p className="text-slate-300 lobster-regular">
                We are a passionate team on a mission to make the world greener,
                one tree at a time. Founded with love for nature, we offer
                affordable, high-quality plants and trusted guidance to help you
                grow effortlessly. Every tree planted with us fights climate
                change, supports biodiversity, and leaves a lasting legacy. Join
                our community—because together, we can grow a healthier, happier
                planet.
              </p>
            </div>
          </div>
        </div>

        {/* ITEM2 */}
        <div className="flex flex-col items-center lg:flex-row-reverse gap-5 ">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src="/img/plant-2.png"
              alt=""
              className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
            />
          </div>

          {/* CONTENt */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>
                Come with us <br />
                <span class="text-yellow-500">grow up </span>
                your plant
              </h3>
              <p className="text-slate-300 lobster-regular">
                Join us and nurture your plant to life! With every leaf, you grow patience, joy, and a greener world. Let’s turn your space into a thriving oasis—one plant at a time. Start growing today! 🌱💚
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import Services from "../components/Services";
import {Link } from "react-router-dom";

function Home() {
  return (
    <section id="home" className="relative">
      <div className="container">
        {/* BLOB */}
        <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        </div>
        <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0">
        </div>

        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {/* CONTENT */}
          <div className="w-full space-y-5 lg:w-1/2 animate-slide-down">
            <h1>
              <span className="text-yellow-500">Plants</span> make a <br></br>
              positive
              <span className="text-yellow-500"> impact</span> on <br></br>
              your environment
            </h1>
            <p className="text-slate-300 lobster-regular">
              Planting trees is an act of hope—for cleaner air, cooler cities,
              and a healthier planet. Each tree fights climate change, shelters
              wildlife, and benefits future generations. Join the movement—one
              tree at a time!
            </p>

            <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10">
              <Link to="/shopnow" className="btn">
                <span>Shop Now</span>
                <a  className="ri-leaf-line"></a>
              </Link>
              <button className="btn btn_outline text-white">
                <span>Know More</span>
                <i className="ri-leaf-line"></i>
              </button>
            </div>

            <p className="text-xs lobster-regular">
              You will get 30-days free trial.
            </p>

            <div className="flex items-center gap-5 text-lg lg:pt-10">
              <i className="ri-facebook-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
              <i className="ri-twitter-x-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
              <i className="ri-instagram-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
              <i className="ri-linkedin-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
            </div>
          </div>

          {/* Flower */}
          <div className="w-full h-1/2 relative lg:w-1/2 hover:w-2xl transform duration-500">
            <img src="/img/Displaytree.png" alt="home" />

            <div className="absolute -top-10 right-0 opacity-30 animate-move xl:top-5">
              <i className="ri-leaf-line text-6xl text-yellow-500"></i>
            </div>

            <div className="absolute bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotate">
              <i className="ri-flower-line text-6xl text-yellow-500"></i>
            </div>

            <div className="hidden absolute -top-8 -left-5 opacity-30 lg:block animate-scale ">
              <i className="ri-plant-line text-6xl text-yellow-500"></i>
            </div>
          </div>
        </div>


        {/* SERVICES */}
        <Services />
      </div>
    </section>
  );
}

export default Home;

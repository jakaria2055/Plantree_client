import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CreateReview from "./review/CreateReview";

function Footer() {
  const [isUp, setIsUp] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setIsUp(true);
      } else {
        setIsUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
      {/* Newsletter Section */}
      <div className="container text-white absolute top-0 right-0 left-0 -translate-y-1/2">
        <CreateReview />
      </div>

      {/* Social Icons */}
      <div className="container mt-16 mb-10">
        <div className="border-b border-green-500 relative">
          <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
            <div className="bg-yellow-100 text-lg text-center space-x-2">
              <i className="ri-facebook-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
              <i className="ri-twitter-x-line hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
              <i className="ri-instagram-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
              <i className="ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
        <div>
          <div className="text-7xl text-green-700 text-center inline-block">
            {/* <i className="ri-leaf-fill"></i> */}
            {/* <p className="lobster-regular text-xl sm:text-2xl">IndorePlants.</p> */}
            <img src="/img/footerlogo.PNG" alt="" />
          </div>
        </div>

        <div>
          <p className="mb-5 font-bold text-xl">Quick Link</p>
          <div className="flex flex-col gap-1">
            <Link to="/flower" className="hover:underline hover:-translate-y-1 hover:font-semibold transform duration-300">Flowers</Link>
            <Link to="/gardening" className="hover:underline hover:-translate-y-1 hover:font-semibold transform duration-300">Gerdening</Link>
            <Link to="/seeds" className="hover:underline hover:-translate-y-1 hover:font-semibold transform duration-300">Seeds</Link>
            <Link to="/shipping" className="hover:underline hover:-translate-y-1 hover:font-semibold transform duration-300">Shipping</Link>
          </div>
        </div>

        <div>
          <p className="mb-5 font-bold text-xl">Popular Services</p>
          <div className="flex flex-col gap-1">
            <Link to="/treeplanting" className="hover:underline hover:-translate-y-1 hover:font-semibold transform duration-300">Tree Planting</Link>
            <Link to="/grasscutting" className="hover:underline hover:-translate-y-1 hover:font-semibold transform duration-300">Grass Cutting</Link>
            <Link to="/treeplanting" className="hover:underline hover:-translate-y-1 hover:font-semibold transform duration-300">Weeds Control</Link>
            <Link to="/treeplanting" className="hover:underline hover:-translate-y-1 hover:font-semibold transform duration-300">Project</Link>
          </div>
        </div>

        <div>
          <p className="mb-5 font-bold text-xl">Contact Us</p>
          <div className="flex flex-col gap-1">
            <a href="tel:+88 016 1498 0000">+88 016 1498 0000</a>
            <a href="mailto:indoreplants@gmail.com">plantreegreen@gmail.com</a>
            <a href="">10 Mirpur 32A, CSS City, Webland 169/16/2, Dhaka</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mb-3">
        <p className="text-center mt-10 opacity-50">
          Copyright &copy; 2025 Plantree. All rights reserved.
        </p>
      </div>

      {/* Background floral image */}
      <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none">
        <img src="/img/floral-1.png" alt="" className="w-full lg:w-1/2 animate-move" />
      </div>

      {/* Scroll to Top Button */}
      <div
        ref={buttonRef}
        onClick={scrollUp}
        className={`fixed right-4 ${
          isUp ? "bottom-4" : "-bottom-1/2"
        } bg-yellow-500 shadow-md inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300 transition-all`}
      >
        <i className="ri-arrow-up-line"></i>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);

    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle("ri-close-large-fill");
      hamburgerRef.current.classList.toggle("ri-menu-4-line");
    }
  };

  useEffect(() => {
    // Ensure icon reflects state if needed
    const icon = hamburgerRef.current;
    if (icon) {
      if (isOpen) {
        icon.classList.add("ri-close-large-fill");
        icon.classList.remove("ri-menu-4-line");
      } else {
        icon.classList.remove("ri-close-large-fill");
        icon.classList.add("ri-menu-4-line");
      }
    }
  }, [isOpen]);

  return (
    <header className="bg-green-950 fixed w-full top-0 left-0 z-50">
      <nav className="container flex items-center justify-between h-16 sm:h-20">

        {/* <div className="lobster-regular sm:text-2xl">IndorePlants</div> */}
        <div className="p-4 mt-32 w-64 h-64"><img src="/img/Plantree (2).PNG" alt="" /></div>

        <div
          className={`absolute top-0 ${
            isOpen ? "left-0" : "left-[-100%]"
          } w-full h-screen bg-green-950/90 flex items-center justify-center duration-300 z-40 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            <li>
              <NavLink to="/" className={`nav-link ${(navData) => navData.isActive? "active" : ""}`} onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={`nav-link ${(navData) => navData.isActive? "active" : ""}`} onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/popular" className={`nav-link ${(navData) => navData.isActive? "active" : ""}`} onClick={toggleMenu}>
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink to="/review" className={`nav-link ${(navData) => navData.isActive? "active" : ""}`} onClick={toggleMenu}>
                Review
              </NavLink>
            </li>

            <li>
              <NavLink to="/review" className={`nav-link flex items-center ${(navData) => navData.isActive? "active" : ""}`} onClick={toggleMenu}>
                Profile
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.385q-1.237 0-2.119-.882T9 8.385t.881-2.12T12 5.386t2.119.88t.881 2.12t-.881 2.118t-2.119.882m-7 7.23V16.97q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.834-1.018q1.417-.34 2.836-.34t2.837.34t2.832 1.018q.61.298.97.838q.361.539.361 1.158v1.646z"/></svg>
              </NavLink>
            </li>

            <li>
              <NavLink to="/review" className={`nav-link flex items-center ${(navData) => navData.isActive? "active" : ""}`} onClick={toggleMenu}>
                Logout
              </NavLink>
            </li>
          </ul>

          <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
            <img className="w-32" src="/img/leaf-1.png" alt="leaf-1" />
          </div>
          <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
            <img className="w-32" src="/img/leaf-2.png" alt="leaf-2" />
          </div>
        </div>

        <div
          className="text-xl sm:text-3xl cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <i ref={hamburgerRef} className="ri-menu-4-line" id="hamburger"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

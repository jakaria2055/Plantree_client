import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserStore from "../store/UserStore";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const { isLogin, UserLogoutRequest } = UserStore();

  const onLogout = async () => {
    await UserLogoutRequest();
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);

    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle("ri-close-large-fill");
      hamburgerRef.current.classList.toggle("ri-menu-4-line");
    }
  };

  console.log(isLogin());

  useEffect(() => {
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
        <div className="p-4 mt-32 w-64 h-64">
          <img src="/img/Plantree (2).PNG" alt="" />
        </div>

        <div
          className={`absolute top-0 ${
            isOpen ? "left-0" : "left-[-100%]"
          } w-full h-screen bg-green-950/90 flex items-center justify-center duration-300 z-40 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            <li>
              <NavLink
                to="/"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/popular"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/review"
                className={`nav-link ${(navData) =>
                  navData.isActive ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Review
              </NavLink>
            </li>

            {isLogin() ? (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className={`nav-link flex items-center ${(navData) =>
                      navData.isActive ? "active" : ""}`}
                    onClick={onLogout}
                  >
                    <span>Profile</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/review"
                    className={`nav-link flex items-center ${(navData) =>
                      navData.isActive ? "active" : ""}`}
                    onClick={onLogout}
                  >
                    Logout
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-out-up-right-icon lucide-circle-arrow-out-up-right"><path d="M22 12A10 10 0 1 1 12 2"/><path d="M22 2 12 12"/><path d="M16 2h6v6"/></svg>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={`nav-link ${(navData) =>
                      navData.isActive ? "active" : ""}`}
                    onClick={toggleMenu}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
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

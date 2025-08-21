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
                title="Home"
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink
                title="About"
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-book-open-check-icon lucide-book-open-check"
                >
                  <path d="M12 21V7" />
                  <path d="m16 12 2 2 4-4" />
                  <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink
                title=" Popular"
                to="/popular"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-hand-heart-icon lucide-hand-heart"
                >
                  <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                  <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
                  <path d="m2 15 6 6" />
                  <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink
                title="Review"
                to="/review"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-square-pen-icon lucide-square-pen"
                >
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                </svg>
              </NavLink>
            </li>

            {isLogin() ? (
              <>
                <li>
                  <NavLink
                    title="Profile"
                    to="/profile"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    onClick={toggleMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-circle-user-icon lucide-circle-user"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="10" r="3" />
                      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    title="Logout"
                    to="/review"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    onClick={onLogout}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-circle-arrow-out-up-right-icon lucide-circle-arrow-out-up-right"
                    >
                      <path d="M22 12A10 10 0 1 1 12 2" />
                      <path d="M22 2 12 12" />
                      <path d="M16 2h6v6" />
                    </svg>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    title="Login"
                    to="/login"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    onClick={toggleMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-key-round-icon lucide-key-round"
                    >
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
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

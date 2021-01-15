import React, { useState, useEffect, useContext } from "react";
import { Context } from "store/store";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [state] = useContext(Context);
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  useEffect(() => {
    console.log(currentRoute);
    console.log(location.pathname);
  }, [currentRoute, location]);

  return (
    <nav className="bg-white shadow" role="navigation">
      <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <Link to="/">
            <h1
              onClick={() => setCurrentRoute("/home")}
              className="text-md text-red-500 text-xl"
            >
              PizzaÉpítő
            </h1>
          </Link>
        </div>
        <div className="ml-auto md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded"
            type="button"
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
            <li>
              <Link to="/cart">
                <p
                  className={`${
                    currentRoute === "/cart" ? "text-purple-600" : "text-black"
                  } block px-4 py-1 md:p-2 lg:px-4 select-none`}
                  onClick={() => setCurrentRoute("/cart")}
                >
                  Kosár
                  {state.pizzas.length > 0 && (
                    <span> ({state.pizzas.length})</span>
                  )}
                </p>
              </Link>
            </li>
            <li>
              <Link to="/builder">
                <p
                  className={`block px-4 py-1 md:p-2 lg:px-4 ${
                    currentRoute === "/home" ? "text-purple-600" : "text-black"
                  } select-none`}
                  onClick={() => setCurrentRoute("/home")}
                >
                  Pizza Építő
                </p>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <li>
              <a
                className="block px-4 py-1 md:p-2 lg:px-4"
                href="#"
                title="Link"
              >
                Regisztráció
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-1 md:p-2 lg:px-4 text-purple-600"
                href="#"
                title="Active Link"
              >
                Belépés
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-1 md:p-2 lg:px-4"
                href="#"
                title="Link"
              >
                Kilépés
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import OurPortfolioHeader from "./OurPortfolioHeader";

const OurPortfolio = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <OurPortfolioHeader />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center bg-accent">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          hello
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            <li>
              <Link to="/">
                <FontAwesomeIcon className="h-5 w-5" icon={faBasketShopping} />
                Order List
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add service
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fa-solid fa-user-plus"></i>
                Make Admin
              </Link>
            </li>
            <li>
              <Link to="/">
              <i class="fa-solid fa-bars-progress"></i>Manage Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default OurPortfolio;

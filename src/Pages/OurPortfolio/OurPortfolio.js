import React from "react";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import OurPortfolioHeader from "./OurPortfolioHeader";
import PortfolioCustomLink from "./PortfolioCustomLink";

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
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            <li>
              <PortfolioCustomLink to="/ourPortfolio">
                <FontAwesomeIcon className="h-5 w-5" icon={faBasketShopping} />
                Order List
              </PortfolioCustomLink>
            </li>
            <li>
              <PortfolioCustomLink to="/ourPortfolio/addService">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add service
              </PortfolioCustomLink>
            </li>
            <li>
              <PortfolioCustomLink to="/ourPortfolio/makeAdmin">
                <i className="fa-solid fa-user-plus"></i>
                Make Admin
              </PortfolioCustomLink>
            </li>
            <li>
              <PortfolioCustomLink to="/ourPortfolio/manageServices">
              <i className="fa-solid fa-bars-progress"></i>Manage Services
              </PortfolioCustomLink>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default OurPortfolio;

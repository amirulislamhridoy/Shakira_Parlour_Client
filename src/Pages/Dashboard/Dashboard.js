import React from "react";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import PortfolioCustomLink from "./PortfolioCustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hook/useAdmin";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <section className="max-w-7xl mx-auto">
      <DashboardHeader />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center bg-accent">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-sm mt-2 btn-primary drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {admin ? (
              <>
                <li>
                  <PortfolioCustomLink to="/dashboard">
                    <FontAwesomeIcon
                      className="h-5 w-5"
                      icon={faBasketShopping}
                    />
                    Order List
                  </PortfolioCustomLink>
                </li>
                <li>
                  <PortfolioCustomLink to="/dashboard/addService">
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
                  <PortfolioCustomLink to="/dashboard/makeAdmin">
                    <i className="fa-solid fa-user-plus"></i>
                    Make Admin
                  </PortfolioCustomLink>
                </li>
                <li>
                  <PortfolioCustomLink to="/dashboard/manageServices">
                    <i className="fa-solid fa-bars-progress"></i>Manage Services
                  </PortfolioCustomLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <PortfolioCustomLink to="/dashboard">
                    <i className="fa-solid fa-cart-shopping"></i>Book
                  </PortfolioCustomLink>
                </li>
                <li>
                  <PortfolioCustomLink to="/dashboard/bookingList">
                    <FontAwesomeIcon
                      className="h-5 w-5"
                      icon={faBasketShopping}
                    />
                    Booking List
                  </PortfolioCustomLink>
                </li>
                <li>
                  <PortfolioCustomLink to="/dashboard/review">
                    <i className="fa-solid fa-message"></i>Review
                  </PortfolioCustomLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

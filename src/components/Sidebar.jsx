//import React from 'react'
import { Link, useLocation} from "react-router-dom";
import { BsTools } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { TbSitemap } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { GiMineTruck } from 'react-icons/gi';
import { GrStorage } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";

import Topbar from "./Topbar";

const Sidebar = () => {

  const location = useLocation();

  const setBgColor = (path) => {
    if (location.pathname === path) {
      return "bg-green-800";
    }
  };


  return (
    <div >
      <div>
        <div className="hidden xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-[#06380b]">
            <div className="flex items-center flex-shrink-0 px-4">
              <p className="font-semibold text-xl text-white">
                FOSSIL CONTRACTING
              </p>
            </div>

            <div className="flex flex-col flex-1 px-3 mt-10">
              <div className="space-y-4">
                <div className="pb-10">
                  <nav className="flex-1 space-y-2">
                    <Link
                      to="/"
                      className={`flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-800 rounded-lg group ${setBgColor(
                        "/"
                      )}`}
                    >
                      <div className="text-sm text-center flex ">
                        <TiHome
                          style={{ marginRight: "8px", fontSize: "20px" }}
                        />
                        Dashboard
                      </div>
                    </Link>

                    <Link
                      to="/analytics"
                      className={`flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-800 rounded-lg group ${setBgColor(
                        "/analytics"
                      )}`}
                    >
                      <div className="text-sm text-center flex ">
                        <TbSitemap
                          style={{ marginRight: "8px", fontSize: "20px" }}
                        />
                        Analytics
                      </div>
                    </Link>

                    <Link
                      to="/plant-list"
                      className={`flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-800 rounded-lg group ${setBgColor(
                        "/plant-list"
                      )}`}
                    >
                      <div className="text-sm text-center flex ">
                        <GrUserWorker
                          style={{ marginRight: "8px", fontSize: "20px" }}
                        />
                        Plant List
                      </div>
                    </Link>
                  </nav>
                </div>

                <div className="pb-10">
                  <nav className="flex-1 space-y-2">
                    <Link
                      to="/assign_operators"
                      className={`flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-800 rounded-lg group ${setBgColor(
                        "/assign_operators"
                      )}`}
                    >
                      <div className="text-sm text-center flex ">
                        <GiMineTruck
                          style={{ marginRight: "8px", fontSize: "22px" }}
                        />
                        Assign Operators
                      </div>
                    </Link>

                    
                <Link
                    to="/reports"
                    className={`flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-800 rounded-lg group ${setBgColor(
                      "/reports"
                    )}`}
                  >
                    <div className="text-sm text-center flex ">
                      <IoBookOutline
                        style={{ marginRight: "8px", fontSize: "20px" }}
                      />
                      Reports
                    </div>
                  </Link>
                

                    <Link
                      to="/new_requisition"
                      className={`flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-800 rounded-lg group ${setBgColor(
                        "/new_requisition"
                      )}`}
                    >
                      <div className="text-sm text-center flex ">
                        <GrStorage
                          style={{ marginRight: "8px", fontSize: "20px" }}
                        />
                        New Requisition
                      </div>
                    </Link>
                  </nav>
                </div>
                

                

                <nav className="flex-1 space-y-2">
                  <Link
                    to="/settings"
                    className={`flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-800 rounded-lg group ${setBgColor(
                      "/settings"
                    )}`}
                  >
                    <div className="text-sm text-center flex ">
                      <MdOutlineSettings
                        style={{ marginRight: "8px", fontSize: "20px" }}
                        
                      />
                      Settings
                    </div>
                  </Link>
                </nav>
              </div>

              <div className="pb-4 mt-auto ">
                <Link to="/logout">
                  <button
                    type="button"
                    className={`flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-800 rounded-lg group ${setBgColor(
                      "/logout"
                    )}`}
                  >
                    {/* <img className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/2/avatar-female.png" alt="" /> */}
                    <FaRegUser
                      style={{ marginRight: "8px", fontSize: "20px" }}
                    />
                    Eng. Jakwe
                    <svg
                      className="w-5 h-5 ml-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                    
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Topbar />
      </div>
    </div>
  );
};

export default Sidebar;

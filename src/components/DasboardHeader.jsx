import React from "react";
import "./DashboardHeader.css";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { header_logo } from "../utils/ImagePath";
import { RoutePath } from "../routes/RoutesConfig";

export default function DasboardHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixedHeader">
        <div
          id="vyrdheader"
          className={`vyrSickhead ${isSticky ? "stickHead" : ""}`}
        >
          <div className="container-fluid d-flex align-items-stretch justify-content-between p-0">
            <div className="header-logo">
              <a href="/">
                <img alt="Logo" src={header_logo} />
              </a>
            </div>
            <div className="topbar">
              <div className="dropdown">
                <div className="topbar-item">
                  <div className="d-flex align-items-center btn-lg  w-md-auto p-0">
                    <div className="dm-dropdown dropdown-inline ml-2">
                      <a href="#" className="dm-dropbtn user-name">
                        Support
                        <FaChevronDown />
                      </a>
                      <div className="dm-dropdown-content">
                        <a href="/" target="blank">
                          FAQs
                        </a>
                        <a href="/" target="blank">
                          Technical Support
                        </a>
                      </div>
                    </div>
                    <div className="dm-dropdown dropdown-inline ml-2">
                      <a href="/" className="dm-dropbtn vyz-user-circle">
                        <FaUserCircle />
                      </a>
                      <div className="dm-dropdown-content vyzrd-dropdow">
                        <a href="#">
                          {" "}
                          VYZRD Test June 2024
                          <br />
                          SZTESIND0056
                          <br />
                          system@keylines.net
                        </a>
                        <a href="/">My Home</a>

                        <a href="/">Change Password</a>
                        <a href="/">Logout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid subheader subheader-transparent dm-breadcrumb-box">
          <div className=" d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            <div className="d-flex align-items-center flex-wrap mr-1">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <ul className="dm-breadcrumb">
                    <li>
                      <a href={RoutePath.HOME} className="active">
                        Home
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid dm-progressbar">
          <div className="row">
            <div className="dm-left d-flex col-lg-8 col-md-6 col-sm-6">
              <span>Test for Lite and pro for Deblina June 2024 | India</span>
            </div>
            <div className="dm-right col-lg-4 col-md-6 col-sm-6 d-flex align-items-center justify-content-center justify-content-lg-end ">
              <span> Last Login: 13-Jan-2026, 05:36:29 (GMT) </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

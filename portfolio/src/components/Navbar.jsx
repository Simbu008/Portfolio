import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    // console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex items-center justify-between font-jetbrains ">
      <div className="text-white font-bold text-base flex ">
        Simbu <i className="text-secondary font-bold">.</i>
      </div>
      {/* <ul className=" hidden lg:text-white lg:flex gap-6">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Resume</a>
        </li>
      </ul> */}
      <button
        className="hidden lg:inline-block bg-secondary px-3 py-1.5 rounded-lg font-bold"
        onClick={() => handleScroll("contact")}
      >
        Contact
      </button>
      <FontAwesomeIcon icon={faBars} className="text-white lg:hidden " />
    </div>
  );
}

export default NavBar;

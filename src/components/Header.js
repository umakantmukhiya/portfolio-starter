import React from "react";
//images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between item-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt=" " />
          </a>
          {/* button */}
          <button className="btn btn-sm">
            <a href="mailto:umakantmukhiya@outlook.com?subject=Introduction%20and%20Interest%20in%20Connecting%20with%20Umakant%20Mukhiya">
              Work With me
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

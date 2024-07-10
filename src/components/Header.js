import React, { useState } from "react";
import Dropdown from "./Dropdown";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("지역이름");

  const locations = ["녹번동", "응암동", "홍제동"];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="location">
          <button type="button" onClick={toggleDropdown}>
            {selectedLocation}
          </button>
          <Dropdown 
            isOpen={isDropdownOpen}
            onSelect={selectLocation}
            options={locations}
          />
        </div>
        <ul className="utill-list">
          <li>
            <button type="button">
              <span className="blind">검색</span>🔍
            </button>
          </li>
          <li>
            <button type="button">
              <span className="blind">알림</span>🔔
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
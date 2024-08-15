import "./Header.scss";
import { NavLink } from "react-router-dom";
// import logoImage from "../../assets/logo/InStock-Logo.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [inventoryActive, setInventoryActive] = useState(false);
  useEffect(() => {
    if (location.pathname.startsWith("/inventories") || location.pathname.startsWith("/add-inventory")) {
      setInventoryActive(true);
    } else {
      setInventoryActive(false);
    }
  }, [location]);

  return (
    <header className="header">
      <h1>Daily Workout Tracker</h1>
      {/* <div className="header__logos">
        <NavLink to="/warehouses">
          <img
            className="header__logo-image"
            src={logoImage}
            alt="InStock logo"
          />
        </NavLink>
      </div>
      <div className="header__links">
        <ul className="header__list">
          <li>
            <NavLink
              to="/warehouses"
              className={({ isActive }) =>
                isActive || !inventoryActive ? "header__item header__item--active" : "header__item"
              }
            >
              Warehouses
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/inventories"
              className={({ isActive }) =>
                isActive || inventoryActive ? "header__item header__item--active" : "header__item"
              }
            >
              Inventory
            </NavLink>
          </li>
        </ul>
      </div> */}
    </header>
  );
}

export default Header;

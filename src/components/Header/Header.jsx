import "./Header.scss";
import { NavLink } from "react-router-dom";
// import logoImage from "../../assets/logo/InStock-Logo.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  console.log(months[mm])


  // const location = useLocation();
  // const [inventoryActive, setInventoryActive] = useState(false);
  // useEffect(() => {
  //   if (location.pathname.startsWith("/inventories") || location.pathname.startsWith("/add-inventory")) {
  //     setInventoryActive(true);
  //   } else {
  //     setInventoryActive(false);
  //   }
  // }, [location]);

  return (
    <header className="header">
      <h1 className="page__title">Daily Workout Tracker</h1>
      <div className="date__list">
        <div className="date__item">
          <p className="date__month">{months[mm]}</p>
          <p className="date__date">{dd}</p>
        </div>
      </div>



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

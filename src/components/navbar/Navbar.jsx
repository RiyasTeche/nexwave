import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

const menu = [
  { url: "/", title: "Home" },
  { url: "/services", title: "Services" },
  { url: "/gallery", title: "Gallery" },
  { url: "/contact", title: "Contact" },
  { url: "/about", title: "About Us" },
];

const Navbar = () => {
  const pathName = useLocation().pathname;
  const [open, setOpen] = useState(false);
  return (
    <div className="navBar">
      <div className="navbarConatiner">
        <div className="logo">
          <Link to="/">
            <img src="./logo.png" alt="" />
          </Link>
        </div>
        <div className="linkConatiner">
          {menu.map((menu) => (
            <div key={menu.title}>
              <Link
                to={menu.url}
                className={
                  pathName == menu.url ? "menuItem active" : "menuItem"
                }
              >
                {menu.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="sidebarMenu" onClick={() => setOpen((prev) => !prev)}>
          <ToggleButton open={open} />
          {/* LIST MENU */}
          {open && (
            <div className="sidebarLinks">
              {menu.map((menu) => (
                <div key={menu.title}>
                  <Link
                    to={menu.url}
                    className={
                      pathName == menu.url ? "menuItem active" : "menuItem"
                    }
                  >
                    {menu.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

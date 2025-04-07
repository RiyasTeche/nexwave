import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

const menu = [
  { url: "/", title: "Home" },
  { url: "/services", title: "Services" },
  { url: "/gallery", title: "Gallery" },
  { url: "/contact", title: "Contact" },
  { url: "/about", title: "About Us" },
];


const Navbar = () => {
  const pathName = useLocation().pathname;
  return (
    <div className="navBar">
      <div className="navbarConatiner">
        <div className="logo">
          <img src="./logo.png" alt="" />
        </div>
        <div className="linkConatiner">
          {menu.map((menu) => (
            <div key={menu.title}>
             <Link to={menu.url} className={pathName == menu.url ? "menuItem active" : "menuItem"}>{menu.title}</Link> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

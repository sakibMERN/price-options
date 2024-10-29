import { RiMenuFold2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import PropTypes from "prop-types";
import Link from "../Link/Link";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/players", name: "Players" },
    { id: 4, path: "/teams", name: "Teams" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="bg-yellow-200 text-black px-6">
      <div onClick={() => setOpen(!open)}>
        {
            open ? <GrClose className="text-4xl md:hidden" />: <RiMenuFold2Line className="text-4xl md:hidden"></RiMenuFold2Line>
        }
        
      </div>

      <ul className={`md:flex md:gap-5 justify-end sm:absolute md:static bg-yellow-200 text-black ${open? "top-12":"-top-60"} p-5 duration-1000`}>
        {routes.map((route) => (
          <Link key={routes.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;

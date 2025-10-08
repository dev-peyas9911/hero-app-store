import { Github, Menu } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-2 md:px-4 lg:px-20">
        <div className="left flex items-center">
          <img className="w-8 mr-1" src={logoImg} alt="A logo" />
          <div className="text-2xl text-blue-500 font-bold">
            <Link to="/">Hero.IO</Link>
          </div>
        </div>
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn m-1">
            <Menu></Menu>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allapp">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installedapp">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="center space-x-4 font-bold hidden lg:block">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allapp">Apps</NavLink>
          <NavLink to="/installedapp">Installation</NavLink>
        </div>
        <div className="end">
          <button className="btn btn-primary flex space-x-1 text-white">
            <Github></Github>
            <a href="https://github.com/dev-peyas9911" target="_blank">
              Contribute
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

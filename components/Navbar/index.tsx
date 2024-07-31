import React from "react";
import { DiAtom } from "react-icons/di";
export const links = [
  { name: "Dashboard", url: "/dashboard" },
  { name: "Trips", url: "/" },
];
const Navbar = () => {
  return (
    <nav className="flex md:hidden w-full">
      <div className="flex w-full items-center justify-between bg-blue-600 px-3 py-5 ">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-semibold text-white font"
        >
          <DiAtom className="w-8 h-8" />
          Dispatcher.ca
        </a>
        <div className=" text-white ">
          {links.map((item) => (
            <a href={item.url} key={item.url} className={`py-2 px-3 }`}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

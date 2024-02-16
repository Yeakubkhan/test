import React, { useContext } from "react";
import { TestContext } from "../../Provider/NewsdataProvider";

const navList = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const NavList = () => {
  const { setCatagory, setQuery } = useContext(TestContext);
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        {navList.map((nav, i) => (
          <li
            onClick={() => {
              setCatagory(nav);
              setQuery("");
            }}
            key={i}
            className="capitalize"
          >
            <a href="#">{nav}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;

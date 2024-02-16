import React, { useContext } from "react";
import useDebounce from "../../Hooks/useDebounce";
import { TestContext } from "../../Provider/NewsdataProvider";
import searchIcon from "../../assets/icons/search.svg";

const SearchBar = () => {
  const { query, setQuery } = useContext(TestContext);

  const ondelay = useDebounce((value) => {
    setQuery(value);
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    ondelay(value);
  };

  return (
    <div className="flex items-center space-x-3 lg:space-x-8 cursor-pointer relative">
      <input
        value={query}
        onChange={handleChange}
        className="bg-gray-300 py-2 px-6 rounded-3xl outline-none border-2 hover:border-green-400 duration-300 font-semibold"
        type="text"
      />
      <img
        className="absolute transform top-1/2 -translate-y-1/2 right-3 hover:w-6"
        src={searchIcon}
      />
    </div>
  );
};

export default SearchBar;

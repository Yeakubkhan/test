import { createContext, useState } from "react";
import useNewsQuery from "../Hooks/useNewsQuery";

const TestContext = createContext();
export { TestContext };

const NewsdataProvider = ({ children }) => {
  const [catagory, setCatagory] = useState("general");
  const [query, setQuery] = useState("");
  const { newsData } = useNewsQuery(catagory, query);

  return (
    <TestContext.Provider value={{ newsData, setCatagory, query, setQuery }}>
      {children}
    </TestContext.Provider>
  );
};

export default NewsdataProvider;

import React from "react";
import Footer from "./NewsComponent/Footer/Footer";
import Header from "./NewsComponent/Header/Header";
import NewsList from "./NewsComponent/NewsList/NewsList";
import NewsdataProvider from "./Provider/NewsdataProvider";

const Page = () => {
  return (
    <div>
      <NewsdataProvider>
        <Header />
        <NewsList />
        <Footer />
      </NewsdataProvider>
    </div>
  );
};

export default Page;

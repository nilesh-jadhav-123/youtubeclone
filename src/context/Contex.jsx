import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoriesData(selectedCategory);
  }, [selectedCategory]);

  //   const fetchSelectedCategoriesData = (query)=> {
  //       setLoading(true);
  //       fetchDataFromApi(`search/?q=${query}`.then((res)=>{
  //         console.log(res)
  //         setLoading(false)
  //       }))

  //   }

  const fetchSelectedCategoriesData = async (query) => {
    setLoading(true);

    try {
      const {contents} = await fetchDataFromApi(`search/?q=${query}`);
      console.log(contents);
      setSearchResults(contents)

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;

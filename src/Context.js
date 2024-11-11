import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("titanic");
  const { isLoading, error, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, error }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
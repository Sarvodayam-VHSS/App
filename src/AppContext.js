// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [newPageData, setNewPageData] = useState('');
  const [customButtons, setCustomButtons] = useState([]);
  const [products, setProducts] = useState([]); // New state for products

  const contextValue = {
    newPageData,
    setNewPageData,
    customButtons,
    setCustomButtons,
    products,
    setProducts,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

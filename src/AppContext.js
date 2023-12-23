// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [newPageData, setNewPageData] = useState('');
  const [customButtons, setCustomButtons] = useState([]);

  return (
    <AppContext.Provider value={{ newPageData, setNewPageData, customButtons, setCustomButtons }}>
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

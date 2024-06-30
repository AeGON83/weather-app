import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export default function GlobalContextProvider({ children }) {
  const [pos, setPos] = useState({ status: "unset" });

  return (
    <GlobalContext.Provider value={{ pos, setPos }}>
      {children}
    </GlobalContext.Provider>
  );
}

import { createContext, useState, useContext } from "react";

export const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState("Painel");

  return (
    <NavigationContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}

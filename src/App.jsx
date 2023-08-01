import { NavigationProvider } from "./contexts/navigationContext";
import DashBoard from "./modules/dashboard/Dashboard";
import { GlobalStyle } from "./styles/globals";
function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationProvider>
        <DashBoard />
      </NavigationProvider>
    </>
  );
}

export default App;

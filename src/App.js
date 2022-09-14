import Home from "./pages/Home";

import { ShoppingContextProvider } from "./context/ContextFunctions";

function App() {
  return (
    <ShoppingContextProvider>
      <Home />
    </ShoppingContextProvider>
  );
}

export default App;

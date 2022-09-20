import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ShoppingContextProvider } from "./context/ContextFunctions";
import Cart from "./pages/Cart";

function App() {
  return (
    <ShoppingContextProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ShoppingContextProvider>
  );
}

export default App;

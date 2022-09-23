import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ShoppingContextProvider } from "./context/ContextFunctions";
import Cart from "./pages/Cart";
import CategoryWalk from "./components/CategoryComponents/CategoryWalk";
import CategoryRunning from "./components/CategoryComponents/CategoryRunning";
import CategoryJordan from "./components/CategoryComponents/CategoryJordan";
import CategoryFootball from "./components/CategoryComponents/CategoryFootball";
import CategoryLifestyle from "./components/CategoryComponents/CategoryLifestyle";

function App() {
  return (
    <ShoppingContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Walk" element={<CategoryWalk />} />
        <Route path="/Lifestyle" element={<CategoryLifestyle />} />
        <Route path="/Running" element={<CategoryRunning />} />
        <Route path="/Football" element={<CategoryFootball />} />
        <Route path="/Jordan" element={<CategoryJordan />} />
      </Routes>
    </ShoppingContextProvider>
  );
}

export default App;

import "./style/App.scss";
import Globalheader from "./Globalheader";
import Cart from "./Cart";
import NotFound from "./NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Goods from "./Goods";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Globalheader />
          <Routes>
            <Route path="/goods" element={<Goods />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

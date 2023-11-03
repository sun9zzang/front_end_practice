import { Link } from "react-router-dom";
import { useCart, cartCountLimit } from "./CartContext";

export default function Globalheader() {
  const cart = useCart();

  return (
    <header className="globalheader">
      <nav className="globalnav">
        <ul>
          <Link to="/goods">
            <li className="globalnav-item">상품 목록</li>
          </Link>
          <Link to="/cart">
            <li className="globalnav-item">
              장바구니 (
              {cart.reduce(
                (partialSum, goodInCart) => partialSum + goodInCart.count,
                0
              )}
              /{cartCountLimit})
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

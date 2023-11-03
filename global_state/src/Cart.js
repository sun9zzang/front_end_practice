import { useCart, useCartDispatch, cartCountLimit } from "./CartContext";

export default function Cart() {
  const cart = useCart();
  const dispatch = useCartDispatch();

  // 장바구니 상품 정렬
  cart.sort((a, b) => a.title.localeCompare(b.title));

  const totalAmount = cart.reduce(
    (partialSum, goodInCart) =>
      partialSum + goodInCart.price * goodInCart.count,
    0
  );

  return (
    <section className="section-cart">
      <h1 className="cart-title">
        장바구니 (
        {cart.reduce(
          (partialSum, goodInCart) => partialSum + goodInCart.count,
          0
        )}
        /{cartCountLimit})
      </h1>
      <ul className="cart-list">
        {cart.map((goodInCart) => {
          return (
            <li className="cart-item" key={goodInCart.id}>
              <h2 className="cart-item-title">{goodInCart.title}</h2>
              <h3 className="cart-item-price">
                <span>{goodInCart.price.toLocaleString()}원</span>
              </h3>
              <div className="cart-item-count-group">
                <div className="cart-item-adjustcount">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "adjustCount",
                        targetGoodID: goodInCart.id,
                        count: goodInCart.count - 1,
                      })
                    }
                  >
                    -
                  </button>
                </div>
                <h3 className="cart-item-count">
                  <span>{goodInCart.count}</span>
                </h3>
                <div className="cart-item-adjustcount">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "adjustCount",
                        targetGoodID: goodInCart.id,
                        count: goodInCart.count + 1,
                      })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <h3 className="cart-item-orderamount">
                <span>
                  {(goodInCart.price * goodInCart.count).toLocaleString()}원
                </span>
              </h3>
              <div className="cart-item-remove">
                <button
                  onClick={() =>
                    dispatch({
                      type: "remove",
                      targetGoodID: goodInCart.id,
                    })
                  }
                >
                  장바구니에서 삭제
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <h2 className="cart-totalamount">
        총 결제 금액: {totalAmount.toLocaleString()}원
      </h2>
      <div className="cart-button-group">
        <div className="cart-button-clear">
          <button
            onClick={() => {
              dispatch({
                type: "clear",
              });
            }}
          >
            장바구니 비우기
          </button>
        </div>
        <div className="cart-button-purchase">
          <button
            onClick={() => {
              if (cart.length === 0) {
                alert("아무것도 없는데용");
              } else {
                alert(totalAmount.toLocaleString() + "원 꺼억");
                dispatch({
                  type: "clear",
                });
              }
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </section>
  );
}

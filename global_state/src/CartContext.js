import { createContext, useContext, useReducer } from "react";

export const cartCountLimit = 10;

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

function cartReducer(cart, action) {
  switch (action.type) {
    case "add":
      if (
        cart.reduce(
          (partialSum, goodInCart) => partialSum + goodInCart.count,
          0
        ) >= cartCountLimit
      ) {
        // 상품의 총 개수가 장바구니 용량 제한을 초과하는 경우
        // throw new Error("exceeded the limit of cart's capacity");
        alert(
          `장바구니에는 최대 ${cartCountLimit}개의 상품을 담을 수 있습니다.`
        );
        return [...cart];
      } else {
        const existedGood = cart.find(
          (goodInCart) => goodInCart.id === action.newGood.id
        );
        if (existedGood !== undefined) {
          // 장바구니에 추가할 상품이 이미 있던 경우
          alert("장바구니에 이미 해당 상품이 존재합니다.");
          return [...cart];
        } else {
          // 장바구니에 없던 상품을 추가하는 경우
          return [...cart, { ...action.newGood, count: 1 }];
        }
      }
    case "remove":
      return cart.filter((goodInCart) => goodInCart.id !== action.targetGoodID);
    case "adjustCount":
      if (action.count < 1) {
        // 장바구니 상품의 바꿀 개수가 1보다 적은 경우
        return [...cart];
      }
      const targetGood = cart.find(
        (goodInCart) => goodInCart.id === action.targetGoodID
      );
      if (targetGood === undefined) {
        // 수량을 바꿀 상품이 장바구니에 존재하지 않는 경우
        // throw new Error("Goods not exists - good id: " + action.targetGoodID);
        alert("상품이 존재하지 않습니다.");
        return [...cart];
      }
      const restCart = cart.filter(
        (goodInCart) => goodInCart.id !== action.targetGoodID
      );
      const restCartCountSum = restCart.reduce(
        (partialSum, goodInCart) => partialSum + goodInCart.count,
        0
      );
      // console.log(restCartCountSum);
      if (restCartCountSum + action.count > cartCountLimit) {
        // 상품의 수량을 바꿀 때 장바구니 용량 제한을 초과하는 경우
        alert(
          `장바구니에는 최대 ${cartCountLimit}개의 상품을 담을 수 있습니다.`
        );
        return [...cart];
      }
      return [
        ...restCart,
        {
          id: targetGood.id,
          title: targetGood.title,
          price: targetGood.price,
          count: action.count,
        },
      ];
    case "clear":
      return [];
    default:
      throw new Error("unsupported action type: " + action.type);
  }
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

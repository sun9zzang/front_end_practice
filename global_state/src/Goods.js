import { useCartDispatch } from "./CartContext";

export default function Goods() {
  const goods = [
    {
      id: "404f7f6f-7d2b-4b3c-be0c-100d7ac34826",
      title: "Vinegar - Balsamic",
      price: 41849,
    },
    {
      id: "39f1e748-6a2d-42fa-b0ec-73f546a40652",
      title: "Ice Cream Bar - Hagen Daz",
      price: 31388,
    },
    {
      id: "8338b59e-16f8-485a-a3cb-36e76ce64a7e",
      title: "Pastry - Choclate Baked",
      price: 22719,
    },
    {
      id: "2e7c2b8a-d786-4ec8-bb86-4e718c01c32f",
      title: "Syrup - Pancake",
      price: 16506,
    },
    {
      id: "5cac68b0-2e28-417f-aeda-eecaed4f6a3f",
      title: "Cherries - Frozen",
      price: 37905,
    },
    {
      id: "43a841f4-acd0-4831-8277-714de8eb8984",
      title: "Bread - Pita",
      price: 18310,
    },
    {
      id: "fcc9d3b5-036e-4f6e-95dc-27a3a0570c65",
      title: "Soap - Hand Soap",
      price: 26119,
    },
    {
      id: "49a4e0ff-b90d-4b65-8a91-9eaae8873037",
      title: "Cookie - Dough Variety",
      price: 25620,
    },
    {
      id: "4d0a7263-c569-4f4e-8c92-9954efdd6fae",
      title: "Muffin - Bran Ind Wrpd",
      price: 9240,
    },
    {
      id: "d1963eac-858b-46ae-bf28-32171b089e5a",
      title: "Coffee - Dark Roast",
      price: 6748,
    },
    {
      id: "cb461a93-dbeb-4650-9ec1-fe57f42b2408",
      title: "Bar Mix - Pina Colada, 355 Ml",
      price: 7869,
    },
    {
      id: "9d1dd2a9-32b5-4c57-9a9d-57548feb3201",
      title: "Whmis Spray Bottle Graduated",
      price: 4759,
    },
    {
      id: "004415d2-4e39-4a9c-8ca3-0ae1342bfb67",
      title: "Pork - Backs - Boneless",
      price: 6984,
    },
    {
      id: "49a81f1b-80e8-4188-8a79-7766e5472561",
      title: "Ecolab Crystal Fusion",
      price: 47596,
    },
    {
      id: "c75714f2-c45d-4586-a6dc-1881cf5b5821",
      title: "Cocoa Powder - Natural",
      price: 34754,
    },
    {
      id: "bb4b99c4-867a-41ef-93ca-74f607e20877",
      title: "Tart - Lemon",
      price: 32357,
    },
    {
      id: "b425b723-0d38-40c6-b69c-5765e89ea92a",
      title: "Tomatoes - Plum, Canned",
      price: 33289,
    },
    {
      id: "4705f231-7a80-4326-90fa-95279f5be96f",
      title: "Wine - Riesling Alsace Ac 2001",
      price: 24355,
    },
    {
      id: "c5289f87-e8ad-4fbc-a387-7e182612bbb9",
      title: "Soup - Cream Of Potato / Leek",
      price: 19874,
    },
    {
      id: "c68469f4-a8f2-446a-bb18-2455ab481902",
      title: "Tofu - Firm",
      price: 45729,
    },
  ];

  return (
    <section className="section-goods">
      <h1 className="goods-title">상품 목록</h1>
      <ul className="goods-list">
        {goods.map((good) => {
          return (
            <li className="goods-item" key={good.id}>
              <h2 className="goods-item-title">{good.title}</h2>
              <h3 className="goods-item-price">
                <span>{good.price.toLocaleString()}원</span>
              </h3>
              <AddToCart targetGood={good} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function AddToCart({ targetGood }) {
  const dispatch = useCartDispatch();

  return (
    <div className="goods-item-addtocart">
      <button
        onClick={() =>
          dispatch({
            type: "add",
            newGood: targetGood,
          })
        }
      >
        장바구니에 추가
      </button>
    </div>
  );
}

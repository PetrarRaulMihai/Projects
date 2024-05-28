import data from "./data.json";
import AddToCart from "./AddToCart";
import CartContext from "./CartContext";
import { useState, useContext, useEffect } from "react";

function MainProduct({ itemName, screenWidth }) {
  const [quantity, setQuantity] = useState(1);

  const contextData = useContext(CartContext);

  const item = data.find((item) => {
    return item.name === itemName;
  });

  const increment = () => {
    setQuantity((initialValue) => initialValue + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((initialValue) => initialValue - 1);
    }
  };

  useEffect(() => {
    
  }, [contextData.cartItems]);

  const addToCartFunction = () => {
    const objTest = {
      itemId: item.id,
      itemPic: item.cartImg,
      itemName: item.name,
      itemCartName: item.cartName,
      itemPrice: item.price,
      itemQuantity: quantity,
    };

    setQuantity(1);

    const checkDuplicate = contextData.cartItems.some((item) => {
      return item.itemId === objTest.itemId;
    });

    if (!checkDuplicate) {
      contextData.setCartItems([...contextData.cartItems, objTest]);
      // localStorage.setItem("cartItems", JSON.stringify(contextData.cartItems));
    } else {
      console.log("already exists in the cart");
      return;
    }
  };

  return (
    <div className="xl:flex">
      <div className="xl:basis-3/5">
        <img
          className="w-2/3 m-auto"
          src={item.categoryImage[screenWidth]}
          alt={item.name}
        ></img>
      </div>

      <div className="pt-10 text-center xl:basis-2/5 xl:text-start">
        {item.new && (
          <p className="text-md text-customOrange tracking-widest xl:tracking-custom-xl">
            NEW PRODUCT
          </p>
        )}

        <p className="font-bold text-4xl pt-6 xl:pr-6">
          {item.name.toUpperCase()}
        </p>
        <p className="pt-6 text-gray-400 lg:px-16 xl:px-0 lg:text-start xl:pr-32 ">
          {item.description}
        </p>
        <p className="font-bold text-center p-6 xl:text-start xl:pl-0">
          $ <span>{item.price}</span>
        </p>

        {/* quantity and link to cart */}
        <div className="flex justify-center gap-5 pb-10 xl:justify-start">
          <div className="customQuantity flex gap-5 items-center ">
            <p className="px-2 cursor-pointer" onClick={decrement}>
              -
            </p>
            <p>{quantity}</p>
            <p className="px-2 cursor-pointer" onClick={increment}>
              +
            </p>
          </div>

          <AddToCart addFunction={addToCartFunction}></AddToCart>
        </div>
      </div>
    </div>
  );
}

export default MainProduct;

import data from "../components/data.json";
import CartContext from "../components/CartContext";
import { useContext, useEffect, useState } from "react";

function Summary({ setTotalCart, setSummary }) {
  const contextData = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const shipping = 50;

  useEffect(() => {
    setTotalPrice(
      contextData.cartItems.reduce((acc, curr) => {
        return acc + curr.itemPrice * curr.itemQuantity;
      }, 0)
    );

    setTotalCart(
      contextData.cartItems.reduce((acc, curr) => {
        return acc + curr.itemQuantity;
      }, 0)
    );
    setSummary(totalPrice + shipping);
  }, [totalPrice, contextData]);

  const increment = (id) => {
    contextData.cartItems.forEach((item) => {
      if (item.itemId === id) {
        //console.log(item.itemId);

        item.itemQuantity += 1;

        setTotalPrice((prevTotalPrice) => prevTotalPrice + item.itemPrice); // Update the total price
        console.log(item.itemId + " " + item.itemQuantity);
      }
    });
  };

  const decrement = (id) => {
    contextData.cartItems.forEach((item) => {
      if (item.itemId === id) {
        //console.log(item.itemId);

        if (item.itemQuantity > 1) {
          item.itemQuantity -= 1;
        }

        setTotalPrice((prevTotalPrice) => prevTotalPrice - item.itemPrice); // Update the total price
        console.log(item.itemId + " " + item.itemQuantity);
      }
    });
  };

  const deleteItem = (id) => {
    const updatedCartItems = contextData.cartItems.filter((element) => {
      return element.itemId !== id;
    });

    // Set the updated cart items back to the context
    contextData.setCartItems(updatedCartItems);
  };

  console.log(contextData.cartItems);

  return (
    <div className="bg-white mx-8 rounded-lg py-8 sm:px-16 sm:mx-16 lg:ml-0 lg:px-0 mt-8">
      <p className="text-2xl font-semibold pl-10 pb-8">SUMMARY</p>

      {contextData.cartItems.length === 0 && (
        <p className="font-bold text-orange-500 text-center text-xl">
          {" "}
          Your cart is currently empty
        </p>
      )}

      <div className="px-10 flex flex-col gap-4">
        {contextData.cartItems.map((cartItem, index) => {
          return (
            <div key={index} className="flex justify-between">
              <div className="flex">
                <div className=" pr-4">
                  <img className="rounded-xl w-16" src={cartItem.itemPic}></img>
                </div>

                <div className="flex flex-col pt-2 gap-2">
                  <p className="text-sm font-bold">{cartItem.itemCartName}</p>
                  <p className="text-sm font-bold">
                    <span className="pr-1">$</span>
                    {cartItem.itemPrice}
                  </p>
                </div>
              </div>
              {/* trebuie continuat aici */}
              <div className="flex items-center pt-1 gap-2">
                <p
                  onClick={() => decrement(cartItem.itemId)}
                  className=" text-2xl cursor-pointer"
                >
                  -
                </p>
                <p className="text-lg">{cartItem.itemQuantity}</p>
                <p
                  className="text-2xl cursor-pointer"
                  onClick={() => {
                    increment(cartItem.itemId);
                  }}
                >
                  +
                </p>
                <p
                  className="text-orange-500 pl-5 underline cursor-pointer"
                  onClick={() => {
                    deleteItem(cartItem.itemId);
                  }}
                >
                  clear
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-10 flex flex-col gap-2">
        <div className="flex justify-between px-10">
          <p>TOTAL</p>
          <p className="font-bold">$ {totalPrice}</p>
        </div>

        <div className="flex justify-between px-10">
          <p>SHIPPING</p>
          <p className="font-bold">$ 50</p>
        </div>

        {/* <div className="flex justify-between px-10">
          <p>CHARITY DONATION</p>
          <p className="font-bold">5</p>
        </div> */}

        <div className="flex justify-between px-10 pt-4">
          <p>GRAND TOTAL</p>
          <p className="font-bold text-orange-500">$ {totalPrice + shipping}</p>
        </div>

        {/* button  */}
      </div>
    </div>
  );
}

export default Summary;

import { AiOutlineShoppingCart } from "react-icons/ai";

function EmptyCart() {
  return (
    <>
      <div className="text-orange-500 py-16 flex justify-center items-center font-semibold text-lg">
        Your cart is currently empty
      </div>
      <div className="flex justify-center py-8">
        <AiOutlineShoppingCart size={"25%"} />
      </div>
    </>
  );
}

export default EmptyCart;

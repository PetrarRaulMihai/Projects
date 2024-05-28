import { Link } from "react-router-dom";

function AddToCart({ addFunction }) {
  return (
    <div className="bg-orange-400 px-4 py-2 text-white text-sm font-semibold">
      <Link onClick={addFunction}>ADD TO CART</Link>
    </div>
  );
}

export default AddToCart;

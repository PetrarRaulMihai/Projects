import CartContext from "./CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

function Header({
  totalCart,
  setTotalCart,
  scrollTop,
  openMenu,
  setOpenMenu,
  closeMenu,
}) {
  const contextData = useContext(CartContext);

  const cartIcon = "assets/shared/desktop/icon-cart.svg";
  const hamburger = "assets/shared/tablet/icon-hamburger.svg";
  const xmark = "/assets/shared/mobile/xmark.svg";

  // const [openMenu, setOpenMenu] = useState(false);

  // const[totalCart , setTotalCart] = useState(0);

  setTotalCart(
    contextData.cartItems.reduce((acc, curr) => {
      return acc + curr.itemQuantity;
    }, 0)
  );

  // this is also in App.js
  const openMenuModal = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    // header was here before before css for mobile finished
    <div className="bg-black">
      <nav className="w-full m-auto flex flex-row py-8 px-5 2xl:px-0 z-20 justify-between items-center border-b-2 md:flex  2xl:max-w-screen-xl 2xl:text-xl">
        {/* hamburger-menu-btn */}
        <div className="flex items-center gap-20 md:gap-16">
          <img
            className="w-6 h-6 cursor-pointer md:h-6 md:w-8 lg:hidden"
            src={hamburger}
            onClick={openMenuModal}
          ></img>

          {/* title audiophile */}
          <Link to="/">
            <h1
              className="text-3xl font-bold text-white md:text-3xl md:pb-3 lg:text-4xl"
              onClick={() => {
                closeMenu();
              }}
            >
              audiophile
            </h1>
          </Link>
          <ul className=" hidden lg:text-white lg:flex-row lg:gap-7 lg:ml-10 lg:flex xl:ml-32">
            <Link to="/">
              <li
                onClick={() => {
                  scrollTop();
                }}
              >
                HOME
              </li>
            </Link>
            <Link to="/headphones">
              <li
                onClick={() => {
                  scrollTop();
                }}
              >
                HEADPHONES
              </li>
            </Link>
            <Link to="/speakers">
              <li
                onClick={() => {
                  scrollTop();
                }}
              >
                SPEAKERS
              </li>
            </Link>
            <Link to="/earphones">
              <li
                onClick={() => {
                  scrollTop();
                }}
              >
                EARPHONES
              </li>
            </Link>
          </ul>
        </div>
        <div className="relative">
          <p className="absolute text-white font-bold bg-green-600 rounded-lg px-2 -top-4 right-3">
            {totalCart > 0 && totalCart}
          </p>
          {totalCart >= 1 && (
            <Link to={"/checkout"}>
              <img
                className="w-7 h-7 cursor-pointer"
                src={cartIcon}
                alt="Cart"
              ></img>
            </Link>
          )}
          {totalCart < 1 && (
            <Link to={"/emptyCart"}>
              <img
                className="w-7 h-7 cursor-pointer"
                src={cartIcon}
                alt="Cart"
              ></img>
            </Link>
          )}
        </div>
      </nav>

      {/* menu modal for mobile */}
      {openMenu && (
        <div className="">
          <div className="absolute top-0 left-0 right-0 custom-blur w-full flex flex-col items-center gap-8 pt-16 z-20 orange-text text-lg font-semibold pb-12 open">
            <div className="absolute top-10 right-10 ">
              <img
                onClick={() => openMenuModal()}
                className="w-6 h-6 orange-background  rounded-full cursor-pointer hover:text-orange-500 hover:scale-110 transition"
                src={xmark}
                alt="close button"
              ></img>
            </div>

            <Link to="/">
              <p
                className="hover:text-orange-500 hover:scale-110 transition cursor-pointer"
                onClick={() => {
                  closeMenu();
                }}
              >
                HOME
              </p>
            </Link>
            <Link to="/headphones">
              <p
                className="hover:text-orange-500 hover:scale-110 transition cursor-pointer"
                onClick={() => {
                  closeMenu();
                }}
              >
                HEADPHONES
              </p>
            </Link>
            <Link to="/speakers">
              <p
                className="hover:text-orange-500 hover:scale-110 transition cursor-pointer"
                onClick={() => {
                  closeMenu();
                }}
              >
                SPEAKERS
              </p>
            </Link>
            <Link to="/earphones">
              <p
                className="hover:text-orange-500 hover:scale-110 transition cursor-pointer"
                onClick={() => {
                  closeMenu();
                }}
              >
                EARPHONES
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

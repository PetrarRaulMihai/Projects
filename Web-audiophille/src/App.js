import "./App.css";
import NewProduct from "./components/NewProduct";
import Categories from "./components/Categories";
import Ads from "./components/Ads";
import BestGear from "./components/BestGear";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import XX99 from "./pages/XX99";
import XX59 from "./pages/XX59";
import ZX9 from "./pages/ZX9";
import ZX7 from "./pages/ZX7";
import YX1 from "./pages/YX1";
import Checkout from "./pages/Checkout";
import XX99MarkI from "./pages/XX99MarkI";
import CartContext from "./components/CartContext";
import { useContext } from "react";
import EmptyCart from "./pages/EmptyCart";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Thankyou from "./pages/Thankyou";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [isMessage, setIsMessage] = useState(null);

  // this function auto send user to top of page after accessing new component page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // Smooth scrolling animation
      //behavior: 'smooth' // Smooth scrolling animation
    });
  };

  const closeMenuModal = () => {
    if (openMenu) {
      setOpenMenu(false);
    }
  };

  const cartObj = {
    cartItems: cartItems,
    setCartItems: setCartItems,
  };

  return (
    <div className="">
      <CartContext.Provider value={cartObj}>
        {/* Your component tree goes here */}

        <Header
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          totalCart={totalCart}
          setTotalCart={setTotalCart}
          scrollTop={scrollToTop}
          closeMenu={closeMenuModal}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <NewProduct
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  scrollTop={scrollToTop}
                  closeMenu={closeMenuModal}
                />
                <Categories
                  scrollTop={scrollToTop}
                  closeMenu={closeMenuModal}
                />
                <Ads scrollTop={scrollToTop} closeMenu={closeMenuModal} />
                <BestGear />
              </>
            }
          />
          <Route
            path="/xx99-mark-one-headphones"
            element={
              <XX99MarkI
                scrollTop={scrollToTop}
                closeMenuModal={closeMenuModal}
              />
            }
          />
          <Route
            path="/xx99-mark-two-headphones"
            element={
              <XX99 scrollTop={scrollToTop} closeMenuModal={closeMenuModal} />
            }
          />
          <Route
            path="/xx59-headphones"
            element={
              <XX59 scrollTop={scrollToTop} closeMenuModal={closeMenuModal} />
            }
          />
          <Route
            path="/zx9-speaker"
            element={
              <ZX9 scrollTop={scrollToTop} closeMenuModal={closeMenuModal} />
            }
          />
          <Route
            path="/zx7-speaker"
            element={
              <ZX7 scrollTop={scrollToTop} closeMenuModal={closeMenuModal} />
            }
          />
          <Route
            path="/yx1-earphones"
            element={
              <YX1 scrollTop={scrollToTop} closeMenuModal={closeMenuModal} />
            }
          />

          <Route
            path="/checkout"
            element={
              <Checkout
                totalCart={totalCart}
                setTotalCart={setTotalCart}
                setIsMessage={setIsMessage}
              />
            }
          />
          <Route path="/emptyCart" element={<EmptyCart />} />
          <Route
            path="/headphones"
            element={
              <Headphones
                scrollTop={scrollToTop}
                closeMenuModal={closeMenuModal}
              />
            }
          />
          <Route
            path="/speakers"
            element={
              <Speakers
                scrollTop={scrollToTop}
                closeMenuModal={closeMenuModal}
              />
            }
          />
          <Route
            path="/earphones"
            element={
              <Earphones
                scrollTop={scrollToTop}
                closeMenuModal={closeMenuModal}
              />
            }
          />
          <Route path="/goodbye" element={<Thankyou isMessage={isMessage} />}>
            {" "}
          </Route>
          <Route path="*" element="NOT FOUND" />
        </Routes>

        <Footer scrollTop={scrollToTop} />
      </CartContext.Provider>
    </div>
  );
}

export default App;

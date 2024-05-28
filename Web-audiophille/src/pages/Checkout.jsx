import { Link } from "react-router-dom";
import "../styles/checkout.css";
import UserInfo from "../components/UserInfo";
import Summary from "../components/Summary";
import CartContext from "../components/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

function Checkout({ setTotalCart, setIsMessage }) {
  const contextData = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(true);

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    addressNumber: "",
    ZIP: "",
    city: "",
    country: "",
    paymentMethod: "",
    cardOwner: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const [summary, setSummary] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();

  const checkEmpty = () => {
    for (const key of Object.keys(userInfo)) {
      if (!userInfo[key]) {
        setIsEmpty(true);
        return; // Exit the loop as soon as an empty field is found
      }
    }
    setIsEmpty(false); // If no empty field is found, set it to false
  };

  const submit = () => {
    console.log(userInfo);
    checkEmpty();

    setIsEmpty((isEmpty) => {
      if (!isEmpty) {
        const thankYouMessage = (
          <div>
            <p>
              {userInfo.firstName} {userInfo.lastName}, your order is on your
              way.
            </p>
          </div>
        );

        setIsMessage(thankYouMessage);
        //setTotalCart(0); // Corrected to set totalCart to 0
        console.log(contextData);

        // Update the cart and navigate
        contextData.cartItems.length = 0;
        navigate("/goodbye");

        return true; // Set isEmpty to true immediately
      } else {
        console.log("completeaza");
        return false; // Set isEmpty to false immediately
      }
    });
  };

  return (
    <>
      <div className="w-2/3 pl-16 py-10">
        <Link to={"/"}>Go Back</Link>
      </div>
      <form onSubmit={handleSubmit} className="body-color pb-32 2xl:px-48">
        <div>
          <div className="flex flex-col gap-8 lg:flex lg:flex-row-reverse 2xl:gap-12">
            <div className="lg:basis-2/5">
              <div>
                <Summary
                  setTotalCart={setTotalCart}
                  setSummary={setSummary}
                ></Summary>
              </div>

              {/* send order button */}
              <div className="p-4 bg-orange-500 mt-4 text-center mx-8 rounded-lg sm:mx-16 lg:ml-0">
                <button
                  onClick={() => {
                    submit();
                  }}
                  className=" font-bold text-white hover:opacity-80 tracking-widest active:scale-98 transition"
                >
                  CONTINUE & PAY
                </button>
              </div>
            </div>

            <div className="lg:basis-3/5">
              <UserInfo
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              ></UserInfo>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Checkout;

import { useState } from "react";
import "../styles/userInfo.css";

function UserInfo({ userInfo, setUserInfo }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const [cardDetails, setCardDetails] = useState(false);

  return (
    <div className=" mx-8 pt-10 rounded-xl sm:mx-16 sm:px-16 lg:mt-8 lg:px-0 lg:mr-0">
      {/* billing details */}

      <p className="text-3xl font-semibold pl-10">CHECKOUT</p>
      <p className="text-orange-500 font-bold text-xs pl-10 py-8">
        BILLING DETAILS
      </p>
      <div className="flex flex-wrap gap-5 pb-12 xl:flex-wrap">
        <div className="flex flex-col w-2/3 m-auto xl:w-1/3">
          <label className="text-sm font-bold pb-2">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            pattern="[A-Za-z]+"
            placeholder="John"
            className={`p-3 border rounded-lg ${
              userInfo.firstName != "" ? "border-gray-300" : "border-orange-500"
            } `}
            name="firstName"
          ></input>
        </div>

        <div className="flex flex-col w-2/3 m-auto xl:w-1/3">
          <label className="text-sm font-bold pb-2">Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Smith"
            className={`p-3 border rounded-lg ${
              userInfo.lastName != "" ? "border-gray-300" : "border-orange-500"
            } `}
            name="lastName"
          ></input>
        </div>

        <div className="flex flex-col w-2/3 m-auto xl:w-1/3">
          <label className="text-sm font-bold pb-2">Email address</label>
          <input
            onChange={handleChange}
            type="email"
            placeholder="johnsmith@gmail.com"
            className={`p-3 border rounded-lg ${
              userInfo.email != "" ? "border-gray-300" : "border-orange-500"
            } `}
            name="email"
          ></input>
        </div>

        <div className="flex flex-col w-2/3 m-auto xl:w-1/3">
          <label className="text-sm font-bold pb-2">Phone no.</label>
          <input
            onChange={handleChange}
            type="number"
            placeholder="07xx xxx xxx"
            className={`p-3 border rounded-lg ${
              userInfo.phone != "" ? "border-gray-300" : "border-orange-500"
            } `}
            name="phone"
          ></input>
        </div>
      </div>

      {/* shipping info */}

      <p className="text-orange-500 font-bold text-xs pl-10 pb-8">
        SHIPPING INFO
      </p>

      <div className="flex flex-wrap gap-5 pb-12">
        <div className="flex flex-col w-2/3 m-auto xl:w-1/3 ">
          <label className="text-sm font-bold pb-2">Address</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="St. Jose Street"
            className={`p-3 border rounded-lg ${
              userInfo.address !== ""
                ? "border-gray-300"
                : "border-orange-500 border-solid"
            } `}
            name="address"
          ></input>
        </div>

        <div className="flex flex-col w-2/3 m-auto xl:w-1/3">
          <label className="text-sm font-bold pb-2">Address 2</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Central Park"
            className={`p-3 border rounded-lg ${
              userInfo.address !== ""
                ? "border-gray-300"
                : "border-orange-500 border-solid"
            } `}
            name="address"
          ></input>
        </div>

        <div className="flex flex-col w-2/3 m-auto xl:w-1/3">
          <label className="text-sm font-bold pb-2">Number</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="4a"
            className={`p-3 border rounded-lg ${
              userInfo.addressNumber !== ""
                ? "border-gray-300"
                : "border-orange-500"
            } `}
            name="addressNumber"
          ></input>
        </div>

        <div className="flex flex-col w-2/3 m-auto xl:w-1/3">
          <label className="text-sm font-bold pb-2">ZIP Code</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="XSK78S"
            className={`p-3 border rounded-lg ${
              userInfo.ZIP !== "" ? "border-gray-300" : "border-orange-500"
            } `}
            name="ZIP"
          ></input>
        </div>

        <div className="flex flex-col w-2/3 m-auto xl:w-1/3">
          <label className="text-sm font-bold pb-2">City</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Bucharest"
            className={`p-3 border rounded-lg ${
              userInfo.city !== "" ? "border-gray-300" : "border-orange-500"
            } `}
            name="city"
          ></input>
        </div>

        <div className="flex flex-col w-2/3 m-auto xl:w-1/3">
          <label className="text-sm font-bold pb-2">Country</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Romania"
            className={`p-3 border rounded-lg ${
              userInfo.country !== "" ? "border-gray-300" : "border-orange-500"
            } `}
            name="country"
          ></input>
        </div>
      </div>

      {/* payment details */}

      <div>
        <div className="pb-12">
          <p className="text-orange-500 font-bold text-xs pl-10 pb-8">
            PAYMENT DETAILS
          </p>

          <div className="flex flex-col justify-between text-lg gap-3 xl:flex-row xl:flex-wrap">
            <div
              className={`p-3 border border-gray-300 bg-white rounded-lg w-2/3 m-auto xl:w-1/3 ${
                userInfo.paymentMethod !== ""
                  ? "border-gray-300"
                  : "border-orange-500"
              }`}
            >
              <input
                onChange={handleChange}
                onClick={() => {
                  setCardDetails(true);
                }}
                type="radio"
                id="credit"
                name="paymentMethod"
                value="credit"
              ></input>
              <label htmlFor="credit" className={`p-3 `}>
                Credit Card
              </label>
            </div>

            <div
              className={`p-3 border border-gray-300 bg-white rounded-lg w-2/3 m-auto xl:w-1/3 ${
                userInfo.paymentMethod != ""
                  ? "border-gray-300"
                  : "border-orange-500"
              }`}
            >
              <input
                onChange={handleChange}
                onClick={() => {
                  setCardDetails(false);
                }}
                type="radio"
                id="cash"
                name="paymentMethod"
                value="cash"
              ></input>
              <label htmlFor="cash" className="p-3">
                Cash
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* CARD DETAILS */}

      {cardDetails && (
        <div className="flex flex-col justify-center gap-5 pb-10">
          <p className="text-orange-500 font-bold text-xs pl-10">
            CARD DETAILS
          </p>
          <div className="xl:flex xl:flex-row">
            {/* 1 */}
            <div
              className={`flex flex-col border-orange-500 w-2/3 m-auto xl:w-1/3`}
            >
              <label className="text-sm font-bold pb-2">Card owner</label>
              <input
                onChange={handleChange}
                className={`p-3 border rounded-lg ${
                  userInfo.cardOwner !== ""
                    ? "border-gray-300"
                    : "border-orange-500"
                } `}
                placeholder="Smith John"
                type="text"
                name="cardOwner"
              ></input>
            </div>
            {/* 2 */}
            <div className={`flex flex-col rounded-lg w-2/3 m-auto xl:w-1/3`}>
              <label className="text-sm font-bold pb-2">Card number</label>
              <input
                onChange={handleChange}
                className={`p-3 border rounded-lg ${
                  userInfo.cardNumber !== ""
                    ? "border-gray-300"
                    : "border-orange-500"
                } `}
                placeholder="1234 5678 9123 4567"
                type="number"
                name="cardNumber"
              ></input>
            </div>
          </div>

          {/* AICI */}
          <div className="flex w-2/3 m-auto ">
            <div className="flex flex-col xl:w-1/3 m-auto items-center">
              <label className="text-sm font-bold pb-2">Expiry date</label>
              <input
                onChange={handleChange}
                type="text"
                placeholder="01/28"
                className={`p-3 border rounded-md text-center w-3/4 2xl:w-5/6 mr-4 ${
                  userInfo.expDate !== ""
                    ? "border-gray-300"
                    : "border-orange-500"
                } `}
                name="expDate"
              ></input>
            </div>

            <div className="flex flex-col m-auto xl:w-1/3 items-center">
              <label className="text-sm font-bold pb-2 text-start">CVV</label>
              <input
                onChange={handleChange}
                placeholder="&#x2022;&nbsp;&#x2022;&nbsp;&#x2022;"
                className={`p-3 border rounded-md text-center w-3/4 2xl:w-5/6 ml-4 ${
                  userInfo.cvv !== "" ? "border-gray-300" : "border-orange-500"
                } `}
                type="password"
                name="cvv"
              ></input>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;

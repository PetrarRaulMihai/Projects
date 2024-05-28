import data from "../components/data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Headphones({ scrollTop, closeMenuModal }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const headphonesArray = data.filter((item) => {
    return item.category === "headphones";
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let imgSource;

  if (screenWidth <= 768) {
    imgSource = "mobile";
  } else if (screenWidth > 768 && screenWidth < 1280) {
    imgSource = "tablet";
  } else if (screenWidth >= 1280) {
    imgSource = "desktop";
  }

  return (
    <div>
      <div className="w-2/3 m-auto py-10 hover:underline 2xl:text-xl">
        <Link to={"/"}>Go Back</Link>
      </div>
      <p className="w-2/3 m-auto py-10 font-bold text-3xl 2xl:text-4xl">
        HEADPHONES
      </p>
      {headphonesArray.map((item, index) => {
        return (
          <div
            key={index}
            className="px-10 pb-16 w-3/4 m-auto lg:w-2/4 xl:w-6/12"
          >
            <Link to={`/${item.slug}`} onClick={closeMenuModal}>
              <p
                className="text-center text-black font-semibold pb-4 text-xl cursor-pointer hover:underline lg:text-2xl"
                onClick={() => {
                  scrollTop();
                }}
              >
                {item.name}
              </p>
            </Link>
            <img
              className=" rounded-xl xl:w-3/4 xl:m-auto 2xl:w-4/6"
              src={item.categoryImage[imgSource]}
            ></img>
            <p className="border-b-2 border-gray pt-10 w-4/4"></p>
          </div>
        );
      })}
    </div>
  );
}

export default Headphones;

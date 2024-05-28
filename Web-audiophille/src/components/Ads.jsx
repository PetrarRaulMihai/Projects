import { useEffect, useState } from "react";
import data from "./data.json";
import SeeProductBtn from "./SeeProductBtn";

const zx9Speaker =
  "/assets/product-zx9-speaker/mobile/image-category-page-preview-1.png";
const mobileZx7Speaker = "./assets/home/mobile/image-speaker-zx7.jpg";
const tabletZx7Speaker = "./assets/home/tablet/image-speaker-zx7.jpg";
const mobileYX1 = "./assets/home/mobile/image-earphones-yx1.jpg";
const tabletYX1 = "./assets/home/tablet/image-earphones-yx1.jpg";

function Ads({scrollTop, closeMenu}) {
  // speaker/earphones img for tablet the widest one zx7 product
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenWidthYX1, setScreenWidthYX1] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    const handleResizeYX1 = () => {
      setScreenWidthYX1(window.innerWidth);
    };

    window.addEventListener("resize", handleResizeYX1);

    return () => {
      window.removeEventListener("resize", handleResizeYX1);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let imgSource;
  let imgSource2;

  if (screenWidth < 768) {
    imgSource = mobileZx7Speaker;
    imgSource2 = mobileYX1;
  } else {
    imgSource = tabletZx7Speaker;
    imgSource2 = tabletYX1;
  }

  const customBtn = "bg-black text-white";
  const customBtnTransparent =
    "bg-transparent border border-black font-semibold";

  return (
    <div className="px-6 md:px-16 xl:px-28 2xl:max-w-screen-xl 2xl:m-auto 2xl:px-0">
      <div className="orange-background rounded-xl relative pb-16">
        <div className="custom-circle1 border-2 rounded-full flex items-center m-auto">
          <div className="custom-circle2 rounded-full flex items-center m-auto">
            {/* this is the code for the ZX9 Speaker img with circles */}
            <img
              className="w-52 m-auto p-4 xl:w-72"
              alt="zs9 speaker"
              src={zx9Speaker}
            ></img>
          </div>
        </div>

        {/* name */}
        <div className="text-center  top-[-40px] relative">
          <p className="text-5xl font-semibold text-white px-24 md:text-7xl md:px-52 xl:pt-10">
            {data
              .find((item) => {
                return item.slug === "zx9-speaker";
              })
              ?.name.toUpperCase()}
          </p>

          <p className="text-lg text-white px-8 custom-description-color pt-8 md:text-2xl md:px-24">
            {
              data.find((item) => {
                if (item.slug === "zx9-speaker") {
                  return item.description;
                }
                return;
              })?.description
            }
          </p>
        </div>
        <div className="flex justify-center">
          <SeeProductBtn custom={customBtn} url={ 'zx9-speaker' } scrollTop={scrollTop} closeMenu={closeMenu}/>
        </div>
      </div>

      {/* zx7 product */}

      <div className="pt-6">
        <div className="relative">
          <img
            className="rounded-xl w-full"
            alt="zx75 speaker"
            src={imgSource}
          ></img>
          <p className="absolute top-32 text-3xl font-semibold pl-6 md:top-24 md:pl-16 md:text-4xl lg:text-5xl lg:pt-12 xl:pt-24 2xl:pt-32">
            ZX7 SPEAKER
          </p>
          <div className="absolute top-48 pl-6 md:top-40 md:pl-16 lg:pt-12 xl:pt-24 2xl:pt-32">
            <SeeProductBtn custom={customBtnTransparent} url={'zx7-speaker'} scrollTop={scrollTop} closeMenu={closeMenu}/>
          </div>
        </div>
      </div>

      {/* YX1 EARPHONES */}

      <div className="pt-6 md:flex md:gap-4">
        <div className="pb-6 md:basis-1/2">
          <img
            className="rounded-xl w-full"
            src={`${imgSource2}`}
            alt="YX1 earphones"
          ></img>
        </div>

        <div className="custom-color rounded-xl py-12 pl-6 md:basis-1/2 md:mb-6 md:pt-24 md:pl-12 2xl:pt-32">
          <p className="text-3xl font-semibold pb-8 lg:pt-12 lg:text-5xl xl:pt-24">
            YX1 EARPHONES
          </p>
          <SeeProductBtn custom={customBtnTransparent} url={'yx1-earphones'} scrollTop={scrollTop} closeMenu={closeMenu}/>
        </div>
      </div>
    </div>
  );
}

export default Ads;

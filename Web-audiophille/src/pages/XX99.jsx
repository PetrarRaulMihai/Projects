import { Link } from "react-router-dom";
import Features from "../components/Features";
import InTheBox from "../components/InTheBox";
import ItemPicturesGallery from "../components/ItemPicturesGallery";
import OtherProducts from "../components/OtherProducts";
import Categories from "../components/Categories";
import BestGear from "../components/BestGear";
import MainProduct from "../components/MainProduct";
import "../styles/xx99.css";
import { useState, useEffect } from "react";

function XX99({scrollTop, closeMenuModal}) {
  const name = "XX99 Mark II Headphones";

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    <div className="pb-10">
      <div className="w-2/3 m-auto py-10">
        <Link to={"/"}>Go Back</Link>
      </div>

      <MainProduct itemName={name} screenWidth={imgSource}></MainProduct>

      {/* features and what is in the box */}
      <div className="xl:flex xl:pb-32">
        <div className="xl:basis-3/5">
          <Features features={name}></Features>
        </div>
        <div className="xl:basis-2/5">
          <InTheBox name={name}></InTheBox>
        </div>
      </div>

      {/* picture gallery */}

      <ItemPicturesGallery
        itemName={name}
        screenSize={imgSource}
      ></ItemPicturesGallery>

      {/* You may also like section */}

      <OtherProducts itemName={name} screenWidth={imgSource} scrollTop={scrollTop} closeMenuModal={closeMenuModal}></OtherProducts>

      {/* Categories section */}
      <Categories></Categories>

      {/* Best gear section */}

      <BestGear></BestGear>
    </div>
  );
}

export default XX99;

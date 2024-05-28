import { useState, useEffect } from "react";
function BestGear() {
  const bestGearMobile = "./assets/shared/mobile/image-best-gear.jpg";
  const bestGearTablet = "./assets/shared/tablet/image-best-gear.jpg";
  const bestGearDesktop = "./assets/shared/desktop/image-best-gear.jpg";

  // Code for live background miage update
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // USED FOR CLEANUP COMPONENT ...LIFECYCLE SOMETHING
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let imageSource;

  if (screenWidth < 768) {
    imageSource = bestGearMobile;
  } else if (screenWidth >= 768 && screenWidth < 1280) {
    imageSource = bestGearTablet;
  } else if (screenWidth >= 1280) {
    imageSource = bestGearDesktop;
  }

  return (
    <div className="2xl:max-w-screen-xl 2xl:m-auto">
      {/* best gear */}

      <div className="pt-36 px-6 xl:flex xl:flex-row-reverse xl:py-36 md:px-16 xl:px-32 2xl:px-0">
        <div className="lg:basis-1/2">
          <img
            className="rounded-xl w-full"
            src={imageSource}
            alt="Best gear"
          ></img>
        </div>

        <div className="lg:basis-1/2 ">
          <p className="text-3xl font-semibold px-3 text-center py-10 md:text-5xl md:pt-24 md:px-16 xl:text-start xl:pt-32 xl:px-0 2xl:pt-40">
            BRINGING YOU THE <span className="orange-text">BEST</span> AUDIO
            GEAR
          </p>
          <p className="text-center text-gray-500 pb-36 md:text-xl md:px-12 md:pt-4 xl:text-start xl:px-0 xl:pr-20 xl:text-sm xl:leading-6">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestGear;

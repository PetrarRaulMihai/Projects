import SeeProductBtn from "./SeeProductBtn";
import data from "./data.json";
function OtherProducts({ itemName, screenWidth, scrollTop, closeMenuModal }) {
  const otherProductsArray = data.find((item) => item.name === itemName).others;
  const orangeColor = "bg-orange-400 text-white font-semibold";

  return (
    <div className="flex flex-col gap-16 pt-32 pb-64 px-4 lg:flex-row lg:px-16 xl:px-32 2xl:max-w-screen-xl 2xl:m-auto 2xl:gap-36 2xl:px-0 2xl:mb-32">
      {otherProductsArray.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-6 items-center">
            <img
              className="rounded-xl "
              src={item.image[screenWidth]}
              alt={item.name}
            ></img>
            <p className="font-bold text-xl lg:text-2xl">{item.name}</p>
            <SeeProductBtn custom={orangeColor} url={item.slug} scrollTop={scrollTop} closeMenu={closeMenuModal}></SeeProductBtn>
          </div>
        );
      })}
    </div>
  );
}

export default OtherProducts;

import SeeProductBtn from "./SeeProductBtn";
import data from "./data.json";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function NewProduct({ handleMenu, openMenu, scrollTop, setOpenMenu, closeMenu}) {
  const mobileNewProd = "/assets/home/mobile/image-header.jpg";
  const tabletNewProd = '/assets/home/tablet/image-header.jpg'
  const desktopNewProd = '/assets/home/desktop/image-hero.jpg'
  const colorButton = "bg-orange-400";
  const xmark = "/assets/shared/mobile/xmark.svg";
  
  // getting data from json file
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState('')

  useEffect(() => {
    // we neede to put in use effect because the newItem value wasn't setted and we already called is in console.log()
    const newItem = data.find((e) => {      
      return e.new;      
    });
    setUrl(newItem.slug);
    setTitle(newItem.name);
    setDescription(newItem.description);
  }, []);   


  // this is moved to App.js
  // const closeMenuModal = () => {    
  //   if (openMenu) {    
  //     setOpenMenu(false);    
  //   }
  // }


  // Code for live background image update
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // USED FOR CLEANUP COMPONENT ...LIFECYCLE SOMETHING
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let imageSource = '';

  if (screenWidth < 768) {
    imageSource = mobileNewProd;
  } else if (screenWidth >= 768 && screenWidth < 1280) {
    imageSource = tabletNewProd;
  } else if (screenWidth >= 1280) {
    imageSource = desktopNewProd;
  }

  //function for opening the menu modal
  return (
    <div className="relative mb-32 md:mb-48 2xl:m-auto 2xl:mb-60">
      {/* text container */}
      <div>
        <div className="absolute z-20 top-48 text-center text-white left-0 right-0 px-10 md:pt-2 lg:pt-32 xl:pt-0 xl:text-start xl:pl-16">
          <div className="2xl:m-auto 2xl:max-w-screen-xl 2xl:flex 2xl:flex-col 2xl:gap-1">
            <p className="text-gray-400 pb-5 letter-spacing md:text-xl md:pb-10 xl:px-12 2xl:px-0 2xl:text-2xl">NEW PRODUCT</p>
            <p className="text-4xl font-bold pb-7 md:text-5xl md:px-20 xl:pl-0 xl:pr-96 xl:mr-96 xl:mx-12 2xl:px-0 2xl:mx-0 2xl:text-5xl 2xl:pr-96 2xl:mr-96">{title.toLocaleUpperCase()}</p>
            <p className="text-gray-400 pb-7 md:px-32 md:text-justify-center md:pb-10 md:pt-5 md:text-xl xl:pl-0 xl:pr-96 xl:mr-48 xl:mx-12 2xl:px-0 2xl:mx-0 2xl:text-3xl 2xl:pr-96 2xl:mr-48">
              {/* Experience natural, lifelike audio and exceptional build quality
              made for the passionate musci enthuziasts. */}
              {description}
            </p>
            <div className="xl:px-12 2xl:px-0">
              <SeeProductBtn closeMenu={closeMenu} url = {url} custom={colorButton} scrollTop = {scrollTop}></SeeProductBtn>             
            </div>
          </div>
          
          
        </div>
        <div className="">
          <img className="md:w-full" src={imageSource} alt="New Product" />
        </div>
      </div>

      {/* menu modal for mobile */}
      {/* this isn't necessary we built it in header too */}
      {/* {openMenu && (
        <div className="">
          <div className="absolute top-0 left-0 right-0 custom-blur w-full flex flex-col items-center gap-8 pt-16 z-20 orange-text text-lg font-semibold pb-12 open">
            <div className="absolute top-10 right-10 ">
              <img
                onClick={() => handleMenu()}
                className="w-6 h-6 orange-background  rounded-full cursor-pointer hover:text-orange-500 hover:scale-110 transition"
                src={xmark}
                alt="close button"
              ></img>
            </div>

            <p className="hover:text-orange-500 hover:scale-110 transition cursor-pointer">
              HOME
            </p>
            <p className="hover:text-orange-500 hover:scale-110 transition cursor-pointer">
              HEADPHONES
            </p>
            <p className="hover:text-orange-500 hover:scale-110 transition cursor-pointer">
              SPEAKERS
            </p>
            <p className="hover:text-orange-500 hover:scale-110 transition cursor-pointer">
              EARPHONES
            </p>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default NewProduct;

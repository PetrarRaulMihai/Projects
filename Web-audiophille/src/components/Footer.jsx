import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // Smooth scrolling animation
      //behavior: 'smooth' // Smooth scrolling animation
    });
  };

  return (
    <div className="bg-black border-t-4 border-black md:px-16 md:text-xl xl:px-28 ">
      <div className="2xl:max-w-screen-xl 2xl:m-auto">
        <div className="">
          <div className=" xl:flex xl:text-center xl:justify-between">
            <p className="text-3xl font-bold text-white custom-margin-top text-center py-10 md:text-start md:text-3xl">
              a
              <span className="border-t-4 border-orange-500 py-10">
                udiophil
              </span>
              e
            </p>
            <ul className="text-white flex flex-col justify-center align-middle items-center gap-5 letter-spacing-02 text-sm font-semibold pb-6 md:flex-row md:justify-start md:text-xl lg:text-sm xl:pb-0">
              <Link onClick="" to="/">
                <li className="cursor-pointer">HOME</li>
              </Link>
              <Link onClick="" to="/headphones">
                <li className="cursor-pointer">HEADPHONES</li>
              </Link>
              <Link onClick="" to="/speakers">
                <li className="cursor-pointer">SPEAKERS</li>
              </Link>
              <Link onClick="" to="/earphones">
                <li className="cursor-pointer">EARPHONES</li>
              </Link>
            </ul>
          </div>

          <div className="text-white opacity-40 text-center">
            <p className="px-10 md:text-start md:px-0 lg:text-sm xl:pr-96 xl:mr-40">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="font-semibold text-white opacity-40 py-10 lg:text-sm">
              Copyright 2023. All Rights Reserved
            </p>
            <div className="flex gap-5">
              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faFacebookSquare} color="white" />
              </div>

              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faTwitter} color="white" />
              </div>
              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

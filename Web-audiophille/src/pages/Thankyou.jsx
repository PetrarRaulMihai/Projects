import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
function Thankyou({ isMessage }) {
  return (
    <div className="px-8 text-gray-500 text-center xl:px-20">
      <div className="text-2xl py-10">{isMessage}</div>
      <p className="pb-10 leading-8">
        Thank you for choosing us for your audio needs. Your purchase of premium
        headphones, earphones, and speakers reflects your commitment to a
        superior listening experience. At the heart of our products lies a
        dedication to sound quality that knows no bounds. We understand that
        music is not just an auditory experience, but a journey of emotions,
        memories, and artistry. It's a symphony of life's most vibrant moments.
        With our high-tech audio products, you're not just listening; you're
        immersed in the nuances of every note, the richness of every beat, and
        the clarity of every word. Whether it's the subtle harmonies in your
        favorite song or the immersive soundscapes in your video games, our
        products are your gateway to a world of sonic brilliance. Every bass
        thump, every treble whisper, and every midrange note is delivered with
        precision and finesse. You'll rediscover your music collection, finding
        new layers and textures you never knew existed. Our audio products are
        the bridge between you and the artist's vision, delivering the music as
        it was meant to be heard. We take pride in the satisfaction you'll
        derive from your purchase. Your music will soar, your movies will roar,
        and your everyday audio experiences will be transformed. Welcome to a
        world where sound quality is king. Thank you for choosing us, and here's
        to a symphony of endless listening pleasure.
      </p>
      <p className="pb-24 text-black ">
        <Link to={"/"} className="underline text-lg">
          <span className="pr-2">
            <FontAwesomeIcon icon={faLeftLong} fa-lg />
          </span>
          Go to the main page
        </Link>
      </p>
    </div>
  );
}

export default Thankyou;

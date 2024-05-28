import { Link } from "react-router-dom";

function SeeProductBtn({ custom, url, scrollTop, closeMenu}) {   

  return (
    <div onClick={ closeMenu }>
        <Link    
          onClick={ scrollTop }
          className={`px-6 py-3 md:px-10 md:py-4 md:text-lg lg:text-md xl:px-5 xl:tracking-widest xl:py-3 xl:text-sm 2xl:text-3xl 2xl:mt-6 ${custom}`}
          to={`/${url}`}
        >
          SEE PRODUCT
        </Link>
    </div>
  );
}

export default SeeProductBtn;

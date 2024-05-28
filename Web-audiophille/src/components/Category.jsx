import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import data from "./data.json";

function Category({ img, category, path, scrollTop, closeMenu }) {
  //Intrebare Gusti, daca pentru toate categoriile este necesara o noua pagina sau nu

  return (
    <div className="rounded-xl mb-4 custom-color custom-shadow md:px-9 lg:px-10 xl:px-24 2xl:m-auto">
      <div className="rounded-lg">
        <img
          className={`
            w-32 h-44 m-auto flex-start -mt-16 pb-10`}
          src={img}
          alt="Category"
        ></img>
      </div>

      <div className="left-0 right-0 text-center">
        <p className="font-bold text-xl pb-4">{category}</p>
        <Link to={path}>
          <p
            className="text-lg pb-8 text-gray-500 font-semibold"
            onClick={() => {
              scrollTop();
              closeMenu();
            }}
          >
            {" "}
            SHOP &nbsp;&nbsp;
            <span className="text-orange-500 font-bold text-xl">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Category;

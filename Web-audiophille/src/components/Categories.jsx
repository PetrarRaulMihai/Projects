import Category from "./Category";
import data from "./data.json";

function Categories({ scrollTop, closeMenu }) {
  const categories = [];

  return (
    <div className="px-6 flex flex-col gap-24 pb-32 md:flex-row md:gap-3 md:justify-between md:pb-24 md:px-16 lg:px-16 xl:px-28 2xl:max-w-screen-xl 2xl:m-auto 2xl:gap-36 2xl:px-0 2xl:mb-32">
      {data.map((element, index) => {
        //check for duplicates in the category array
        if (categories.includes(element.category)) {
          return null;
        } else {
          categories.push(element.category);
          return (
            <Category
              key={index}
              img={element.categoryImage.custom}
              category={element.category.toUpperCase()}
              path={
                element.category === "headphones"
                  ? "/headphones"
                  : element.category === "earphones"
                  ? "/earphones"
                  : element.category === "speakers"
                  ? "speakers"
                  : ""
              }
              scrollTop={scrollTop}
              closeMenu={closeMenu}
            />
          );
        }
      })}
    </div>
  );
}

export default Categories;

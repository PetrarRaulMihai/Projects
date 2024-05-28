import data from "./data.json";
function ItemPicturesGallery({ itemName, screenSize }) {
  const itemData = data.find((item) => item.name === itemName);

  return (
    <div className="flex flex-col gap-10 px-4 md:flex-row pt-10 lg:px-16 xl:px-32 2xl:max-w-screen-xl 2xl:m-auto 2xl:gap-52 2xl:px-0 2xl:mb-32">
      <div className="flex flex-col gap-3 justify-between">
        <img
          className="rounded-lg"
          src={itemData.gallery.first[screenSize]}
        ></img>
        <img
          className="rounded-lg"
          src={itemData.gallery.second[screenSize]}
        ></img>
      </div>

      <div className="">
        <img
          className="rounded-lg"
          src={itemData.gallery.third[screenSize]}
        ></img>
      </div>
    </div>
  );
}

export default ItemPicturesGallery;

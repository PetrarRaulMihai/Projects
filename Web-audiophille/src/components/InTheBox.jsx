import data from "./data.json";
function InTheBox({ name }) {
  return (
    <div className="pt-4">
      <div className=" flex justify-center items-center xl:justify-start">
        <ul className="flex flex-col">
          <p className="text-center  text-2xl font-semibold py-8 xl:text-start">
            IN THE BOX
          </p>
          {data
            .filter((item) => item.name === name)
            .map((itemInTheBox) => {
              return itemInTheBox.includes.map((element, index) => {
                return (
                  <li key={index} className="text-gray-400 ">
                    <span className="text-orange-400 pr-4">
                      {element.quantity}x
                    </span>{" "}
                    {element.item}
                  </li>
                );
              });
            })}
        </ul>
      </div>
    </div>
  );
}

export default InTheBox;

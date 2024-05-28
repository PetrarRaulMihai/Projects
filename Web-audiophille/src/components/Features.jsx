import data from "./data.json";

function Features({ features }) {
  return (
    <div className="text-center px-6 lg:px-16 xl:pl-32 ">
      <p className="font-semibold text-2xl py-12 xl:text-start">FEATURES</p>
      <p className="text-md text-gray-400 xl:text-start xl:pr-10">
        {data
          .filter((item) => item.name === features)
          .map((itemFeature) => {
            return itemFeature.features;
          })}
      </p>
    </div>
  );
}

export default Features;

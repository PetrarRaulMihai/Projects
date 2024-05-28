function IpModalInfo({ ipInfo }) {
  return (
    <div className="bg-white z-50 flex flex-col items-center w-10/12 gap-2 py-4 rounded-xl xl:flex-row xl:justify-center xl:py-5">
      <div className="text-center flex flex-col gap-2 xl:border-r xl:border-black xl:basis-1/4">
        <p className="text-bold text-gray-500 text-sm font-bold xl:text-xl xl:text-black">
          IP ADDRESS
        </p>
        <p className="px-10 text-sm font-semi-bold xl:text-md">{ipInfo.ip}</p>
      </div>
      <div className="text-center flex flex-col gap-2 xl:border-r xl:border-black xl:basis-1/4">
        <p className="text-bold text-gray-500 text-sm font-bold xl:text-xl xl:text-black">
          LOCATION
        </p>
        <p className="px-10 text-sm font-semi-bold xl:text-md">
          {ipInfo.location}
        </p>
      </div>
      <div className="text-center flex flex-col gap-2 xl:border-r xl:border-black xl:basis-1/4">
        <p className="text-bold text-gray-500 text-sm font-bold xl:text-xl xl:text-black">
          TIMEZONE
        </p>
        <p className="px-10 text-sm font-semi-bold xl:text-md">
          {ipInfo.timezone}
        </p>
      </div>
      <div className="text-center flex flex-col gap-2 xl:basis-1/4">
        <p className="text-bold text-gray-500 text-sm font-bold xl:text-xl xl:text-black">
          ISP
        </p>
        <p className="px-10 text-sm font-semi-bold xl:text-md">{ipInfo.isp}</p>
      </div>
    </div>
  );
}

export default IpModalInfo;

import "../Styles/SearchComponent.css";
import { FaGreaterThan } from "react-icons/fa";
import IpModalInfo from "./IpModalInfo";
import { useEffect, useState } from "react";
import Map from "./Map";
function SearchComponent() {
  const [ip, setIp] = useState(" ");
  const [ipInfo, setIpInfo] = useState({});
  const url = `
  https://geo.ipify.org/api/v2/country?apiKey=at_YlMiAD2soNyzFAHpUqEDtRP1XN93y&ipAddress=${ip}`;

  // we used setTimeout to no re-render on each input modification
  const handleChange = (event) => {
    setIp((prev) => {
      return event.target.value;
    });

    console.log(ip);
  };

  // fetch data
  const getIp = async () => {
    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        // this is shown in erro tab in dev tools
        throw new Error(`HTTP status is ${resp.status}`);
      }
      const data = await resp.json();
      setIpInfo({
        ...ipInfo,
        ip: data.ip,
        location: data.location.region,
        timezone: data.location.timezone,
        isp: data.isp,
      });
    } catch (error) {
      console.error(`An error has occured :  ${error}`);
    }
  };

  return (
    <>
      <header className="z-50 bg-image-mobile xl:bg-image-desktop bg-cover pb-36">
        <div className="flex items-center flex-col">
          <h1 className="text-2xl text-white font-bold pb-6 pt-4">
            IP Address Tracker{" "}
          </h1>
          <div className="flex flex-row w-10/12 justify-center">
            <input
              type="text"
              className="rounded-l-xl p-3 w-full focus:outline-none"
              placeholder="Search for any IP address or domain"
              onChange={handleChange}
            ></input>
            <button onClick={getIp} className="bg-black p-4 rounded-r-xl">
              <FaGreaterThan color={"white"} />
            </button>
          </div>
        </div>
      </header>
      {/* this div is used for modal positining */}
      <div className="absolute flex justify-center w-full top-32">
        <IpModalInfo ipInfo={ipInfo} />
      </div>
      <div>
        <Map location={ipInfo.location} />
      </div>
    </>
  );
}

export default SearchComponent;

import { useMap } from "react-leaflet";
import { useEffect } from "react";
function RecenterAutomatically({ position }) {
  const map = useMap();
  useEffect(() => {
    map.setView([position[0], position[1]]);
  }, [position[0], position[1]]);
  return null;
}

export default RecenterAutomatically;

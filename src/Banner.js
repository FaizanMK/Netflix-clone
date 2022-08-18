import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./requests";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
    }
    fetchData();
  }, []);

  return (
    <header>
      {" "}
      {/*background image  */}
      {/* title */}
      {/* div > 2 buttons */}
      {/* description */}
    </header>
  );
}

export default Banner;

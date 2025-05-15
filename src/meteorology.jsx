import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const Auth = import.meta.env.VITE_AUTHORIZATION;

function Meteorology() {
  const [city, setCity] = useState([]);

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/F-C0032-001?Authorization=${Auth}`
      );
      console.log(res.data.records.location);
      setCity(res.data.records.location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="my-3">三十六小時天氣預報</h2>
        <div className="row row-cols-2 g-4">
          {city.map((cityData) => {
            return (
              <div className="col" key={cityData.locationName}>
                <div className="card text-center">
                  <div className="card-header h4">{cityData.locationName}</div>
                  <div className="card-body">
                    <div className="row row-cols-3 g-2">
                      <div className="col">
                        <div className="h5 my-2">23日</div>
                        <p>
                          下午6:00
                          <br />~<br />
                          早上6點
                        </p>
                        {/* <img src="" alt="" /> */}
                        <div>
                          <p>多雲時晴</p>
                        </div>
                        <div>
                          <i className="bi bi-umbrella-fill"></i>
                          <span>10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Meteorology;

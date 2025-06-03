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

  const Time = ({ time }) => {
    return (
      <>
        <div className="h5 my-2">
          {new Date(time.startTime).toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
          })}
        </div>
        <p>
          {new Date(time.startTime).toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "numeric",
          })}
          <br />~<br />
          {new Date(time.endTime).toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
      </>
    );
  };

  const Card = ({ title, wx, pop }) => {
    return (
      <>
        <div className="card text-center">
          <div className="card-header h4">{title}</div>
          <div className="card-body">
            <div className="row row-cols-3 g-2">
              {wx.time.map((time, index) => {
                return (
                  <div className="col" key={index}>
                    <Time time={time} />
                    <div>
                      <p>{time.parameter.parameterName}</p>
                    </div>
                    <div>
                      <i className="bi bi-umbrella-fill"></i>
                      <span>{pop.time[index].parameter.parameterName}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <h2 className="my-3">三十六小時天氣預報</h2>
        <div className="row row-cols-2 g-4">
          {city.map((cityData) => {
            return (
              <div className="col" key={cityData.locationName}>
                <Card
                  title={cityData.locationName}
                  wx={cityData.weatherElement[0]}
                  pop={cityData.weatherElement[1]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Meteorology;

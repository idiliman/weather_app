import React, { useState, useEffect} from "react";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import AirIcon from "@mui/icons-material/Air";
import ProgressBar from "./ProgressBar";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import UmbrellaIcon from "@mui/icons-material/Umbrella";

// https://www.freepik.com/free-vector/gradient-japanese-temple-with-sun_9925868.htm?query=cloudy%20cartoon
// https://www.freepik.com/free-vector/torii-gate-fuji-mountain_9925876.htm

export default function Content(props) {
//   const [weatherData, setWeatherData] = useState({
//     name : 'KL'
// });
  
// useEffect(() => {
//   setWeatherData(props.weatherData)
//   console.log('fetching weather data')

//   return () => {
//     setWeatherData(props.weatherData)
//   }
// }, [props.weatherData]);


  return (
    <div className="basis-11/12 ml-10">
      {/* Top content */}
      <div className="flex justify-between">
        {/* Weather */}
        <div
          className="flex flex-col grow-0 justify-around w-100 h-80 py-1 px-9 border-solid border-2 border-slate-200 rounded-lg bg-cover"
          style={{ backgroundImage: `url()` }}
        >
          {/* Info */}
          <div className="flex items-center p-2">
            <FilterDramaIcon fontSize="large" />
            <div className="text-sm ml-3 font-medium">
              <p>Weather in</p>
              <p>{props.cityName}</p>
            </div>
          </div>

          {/* Current temp */}
          <div>
            <p className="text-3xl font-bold p-1">22°C</p>
            <p className="text-md p-0.5">Partly Cloudy</p>
          </div>

          {/* Weather detail eg: Pressure, visibility */}
          <div className="flex justify-between space-x-4 items-center h-20">
            <div className="bg-black text-white text-center py-2 px-5 border-solid border-2 rounded-lg border-slate-200">
              <p>Pressure</p>
              <p>800mb</p>
            </div>
            <div className="bg-lime-500 text-white text-center py-2 px-5 border-solid border-2 rounded-lg border-slate-200">
              <p>visibility</p>
              <p>4.3 km</p>
            </div>
            <div className="text-black text-center py-2 px-5 border-solid border-2 rounded-lg border-slate-200">
              <p>Humidity</p>
              <p>87%</p>
            </div>
          </div>
        </div>

        {/* Air quality */}
        <div
          className="flex flex-col grow-0 justify-around w-100 h-80 py-1 px-9 border-solid border-2 border-slate-200 rounded-lg bg-cover"
          style={{ backgroundImage: `url()` }}
        >
          <div className="flex items-center p-2">
            <AirIcon fontSize="large" />
            <div className="text-sm ml-2">
              <p>Air quality</p>
              <p>Main pollution : PM 2.5</p>
            </div>
          </div>

          <div className="">
            <p className="text-3xl font-bold p-1">390</p>
            <p className="text-md p-0.5">West Wind</p>
          </div>

          <div className="flex flex-col items-center space-y-4 w-80 h-20 p-3 border-solid border-2 rounded-lg border-slate-200">
            <div className="flex space-x-44">
              <p>Good</p>
              <p>Hazardous</p>
            </div>
            <div className="text-center w-72 text-orange-400">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="flex justify-between mt-7">
        {/* Temp */}
        <div
          className="flex flex-col w-8/12 h-80 py-1 mr-8 bg-cover"
          style={{ backgroundImage: `url()` }}
        >
          <div className="flex justify-between">
            <p className="text-2xl font-semibold">
              How's the <br></br> temperature today?
            </p>
            <div className="">
              <ul className="flex space-x-5 text-2xl">
                <li className="pt-0.5 pb-0.5 px-2 transition ease-out delay-110 bg-orange-400 rounded-xl hover:rounded-xl hover:bg-orange-400 hover:scale-110 active:translate-y-1">
                  <DeviceThermostatIcon fontSize="inherit" className="mb-1.5" />
                </li>
                <li className="pt-0.5 pb-0.5 px-2 transition ease-out delay-110  rounded-xl hover:rounded-xl hover:bg-orange-400 hover:scale-110 active:translate-y-1">
                  <UmbrellaIcon fontSize="inherit" className="mb-1.5" />
                </li>
                <li className="pt-0.5 pb-0.5 px-2 transition ease-out delay-110 rounded-xl hover:rounded-xl hover:bg-orange-400 hover:scale-110 active:translate-y-1">
                  <AirIcon fontSize="inherit" className="mb-1.5" />
                </li>
              </ul>
            </div>
          </div>

          {/* 4 Days forecast data */}
          <div className="mt-12 static ">
            {/* <div className="absolute w-2/6 -bottom-24">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#f3f4f5"
                  fill-opacity="1"
                  d="M0,160L12.6,170.7C25.3,181,51,203,76,181.3C101.1,160,126,96,152,112C176.8,128,202,224,227,229.3C252.6,235,278,149,303,144C328.4,139,354,213,379,250.7C404.2,288,429,288,455,266.7C480,245,505,203,531,170.7C555.8,139,581,117,606,90.7C631.6,64,657,32,682,37.3C707.4,43,733,85,758,138.7C783.2,192,808,256,834,245.3C858.9,235,884,149,909,128C934.7,107,960,149,985,165.3C1010.5,181,1036,171,1061,154.7C1086.3,139,1112,117,1137,138.7C1162.1,160,1187,224,1213,240C1237.9,256,1263,224,1288,213.3C1313.7,203,1339,213,1364,224C1389.5,235,1415,245,1427,250.7L1440,256L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
                ></path>
              </svg>
            </div> */}
            <ul className="flex justify-between">
              <li className="space-y-28">
                <WbSunnyIcon fontSize="large" />
                <div className="text-center">
                  <p className="font-semibold">20°C</p>
                  <p className="text-xs">Morning</p>
                </div>
              </li>

              <li className="space-y-28">
                <WbSunnyIcon fontSize="large" />
                <div className="text-center">
                  <p className="font-semibold">34°C</p>
                  <p className="text-xs">Afternoon</p>
                </div>
              </li>

              <li className="space-y-28">
                <WbSunnyIcon fontSize="large" />
                <div className="text-center">
                  <p className="font-semibold">28°C</p>
                  <p className="text-xs">Evening</p>
                </div>
              </li>

              <li className="space-y-28">
                <WbSunnyIcon fontSize="large" />
                <div className="text-center">
                  <p className="font-semibold">22°C</p>
                  <p className="text-xs">Night</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Forecast weather */}
        <div
          className="flex flex-col w-4/12 h-80 py-5 px-9 space-y-40 border-solid border-2 border-slate-200 rounded-lg bg-cover"
          style={{ backgroundImage: `url()` }}
        >
          <div className="space-y-2">
            <p className="text-xs font-medium">Tomorrow</p>
            <p className="text-lg font-bold">Kuala Lumpur</p>
          </div>

          <div>
            <p className="text-3xl font-bold p-1">20°C</p>
            <p className="text-md p-0.5">Rainy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

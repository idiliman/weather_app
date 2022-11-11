import React from "react";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import AirIcon from "@mui/icons-material/Air";

// https://www.freepik.com/free-vector/gradient-japanese-temple-with-sun_9925868.htm?query=cloudy%20cartoon
// https://www.freepik.com/free-vector/torii-gate-fuji-mountain_9925876.htm

export default function Content() {
  return (
    <div className="basis-11/12 ml-10">
      {/* Top content */}
      <div className="flex justify-between">
        {/* Weather */}
        <div className="flex flex-col grow-0 justify-around w-100 h-80 py-1 px-9 border-solid border-2 border-slate-200 rounded-lg bg-cover" style={{backgroundImage:`url()`}}>
          {/* Info */}
          <div className="flex items-center p-2">
            <FilterDramaIcon fontSize="large" />
            <div className="text-sm ml-3 font-medium">
              <p>Weather in</p>
              <p>Kuala Lumpur</p>
            </div>
          </div>

          {/* Current temp */}
          <div>
            <p className="text-3xl font-bold p-1">22°C</p>
            <p className="text-md p-0.5">Partly Cloudy</p>
          </div>

          {/* Weather detail eg: Pressure, visibility */}
          <div className="flex justify-between space-x-4 items-center h-20">
            <div className="text-center py-2 px-5 border-solid border-2 rounded-lg border-slate-200">
              <p>Pressure</p>
              <p>800mb</p>
            </div>
            <div className="text-center py-2 px-5 border-solid border-2 rounded-lg border-slate-200">
              <p>visibility</p>
              <p>4.3 km</p>
            </div>
            <div className="text-center py-2 px-5 border-solid border-2 rounded-lg border-slate-200">
              <p>Humidity</p>
              <p>87%</p>
            </div>
          </div>
        </div>

        {/* Air quality */}
        <div className="flex flex-col grow-0 justify-around w-100 h-80 py-1 px-9 border-solid border-2 border-slate-200 rounded-lg bg-cover" style={{backgroundImage:`url()`}}>
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

          <div className="flex justify-between items-center w-80 h-20 p-3 border-solid border-2 rounded-lg border-slate-200">
            <p>Good</p>
            <p>Hazardous</p>
          </div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="flex justify-between mt-11">
        {/* Temp */}
        <div className="">
        Temp
        </div>
        {/* Forecast weather */}
        <div className="">Forecast weather</div>
      </div>
    </div>
  );
}

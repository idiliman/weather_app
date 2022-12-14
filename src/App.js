import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Navi from "./components/Navi";
import Sidebar from "./components/Sidebar";

import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";

export default function App() {
  const [weatherData, setWeatherData] = useState([]);

  const pullWeatherData = (data) => {
    setWeatherData(data);
  };

  

  return (
    // <div className="w-screen h-screen " style={{backgroundImage:`url(https://www.transparenttextures.com/patterns/cubes.png)`}}>
    //   <header className="flex flex-col mx-96">
    //   <input
    //     className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-auto p-1.5 outline-none rounded border border-slate-200 mt-5"
    //     placeholder="Enter City..."
    //     onChange={(e) => setCity(e.target.value)}
    //     value={city}
    //     onKeyPress={getWeather}
    //   />
    //   {/* Weather data UI */}
    //   {typeof weatherData.main === "undefined" ? (
    //     <div className="text-center mt-5 ">
    //       <p className="text-xl">Enter city to get the weather 🤖</p>
    //     </div>
    //   ) : (
    //     <div className="text-center space-y-36 text-5xl mt-24">
    //       <p>{weatherData.name}</p>
    //       <p>
    //         {Math.round(weatherData.main.temp)}
    //         °C
    //         <DeviceThermostatIcon />
    //       </p>
    //       <p>{weatherData.weather[0].main}</p>
    //     </div>
    //   )}
    //   {/* Error UI */}
    //   <div className="mt-6 item-center justify-center text-red-500">
    //       {weatherData.cod === "404" && (
    //         <Stack sx={{ width: "100%" }} spacing={2} className="">
    //           <Alert severity="error" className="item-center justify-center">
    //             <AlertTitle>Error</AlertTitle>
    //             <strong>City not found</strong>
    //           </Alert>
    //         </Stack>
    //       )}
    //   </div>
    //   </header>
    // </div>

    <container className="flex mt-8 mb-24 mx-5 max-w-screen max-h-screen">
      <div className="grow basis-6/12">
        <header>
          <Header onAdd={pullWeatherData} />
        </header>
        <main className="flex mt-4">
          <Navi />
          <Content cityName={weatherData.name}/>
        </main>
      </div>
      <div className="basis-4/12">
        <Sidebar />
      </div>
    </container>
  );
}

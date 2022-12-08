import React, { useState, useEffect } from "react";
import AvatarUrl from "../function/AvatarUrl";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export default function Header(props) {
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState("");

  const apiKey = "4a798db9c043f7e754baeab23e77d730";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const defaultApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kuala Lumpur&units=metric&appid=${apiKey}`;

  const getWeather = async (event) => {
    if (event.key === "Enter") {
      try {
        setLoading(true);

        event.preventDefault();

        console.log("Fetching weather");
        const response = await axios.get(apiUrl);
        const weather = response.data;

        props.onAdd(weather);
        console.log(weather);
      } catch (err) {
        console.log(err, "Error fetching weather");
      } finally {
        setLoading(false);
      }
    }
  };

  const getDefaultWeather = async () => {
    try {
      setLoading(true);

      console.log("Fetching weather");
      const response = await axios.get(defaultApiUrl);
      const weather = response.data;

      props.onAdd(weather);
      console.log(weather);

    } catch (err) {
      console.log(err, "Error fetching weather");

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Mounting weather");
    getDefaultWeather();
  },[]);

  const handleChange = async (event) => {
    await setCity(event.target.value);
    event.preventDefault();
  };

  return (
    <header className="flex bg-white items-center p-3">
      <logo className="flex items-center p-2 mr-2 text-4xl">
        <BeachAccessIcon fontSize="inherit" />
      </logo>

      <nav className="flex grow p-2 ml-11">
        <logo className="flex items-center mr-2">
          <img
            src={AvatarUrl()}
            className="w-12 h-12 rounded-full bg-gray-200 shadow ring-2 ring-indigo-400 ring-offset-2 ring-opacity-50"
          />
        </logo>

        <div className="flex flex-col item-center pl-2">
          <p className="text-2xl">Hello,</p>
          <p className="text-3xl font-medium">Username</p>
        </div>
      </nav>

      <form
        action="#"
        className="mb-7 text-slate-300 mr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <input
          type="text"
          placeholder="Enter City"
          className=" text-black p-3 w-80 outline-none rounded-lg mr-4 bg-slate-100"
          onChange={handleChange}
          value={city}
          onKeyPress={getWeather}
        />

        <button className="border-none -ml-11" onClick={getWeather}>
          <SearchIcon color="inherit" />
        </button>
      </form>
    </header>
  );
}

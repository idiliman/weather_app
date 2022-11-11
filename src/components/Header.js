import React from "react";
import getAvatarUrl from "../function/getAvatarUrl";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <header className="flex bg-white items-center p-3">
      <logo className="flex items-center p-2 mr-2 text-4xl">
        <BeachAccessIcon fontSize="inherit" />
      </logo>

      <nav className="flex grow p-2 ml-5">
        <logo className="flex items-center mr-2">
          <img
            src={getAvatarUrl()}
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
          placeholder="Search City"
          className=" text-black p-3 w-80 outline-none rounded-lg mr-4 bg-slate-100"
        />
        <button className="border-none -ml-11">
          <SearchIcon color="inherit" />
        </button>
      </form>
    </header>
  );
}

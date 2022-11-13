import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import InsightsIcon from "@mui/icons-material/Insights";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navi() {
  return (
    <div className="basis-1/12  flex flex-col justify-between">
      {/* Navigation */}
      <ul className="flex flex-col text-2xl space-y-11 mx-auto">
        <li className="pt-0.5 pb-0.5 px-2 transition ease-out delay-110 bg-orange-400 rounded-xl hover:rounded-xl hover:scale-110 active:translate-y-1">
          <BarChartIcon fontSize="inherit" className="mb-1.5" />
        </li>
        <li className="pt-0.5 pb-0.5 px-2 transition ease-out delay-110 rounded-xl hover:rounded-xl hover:bg-orange-400 hover:scale-110 active:translate-y-1">
          <InsightsIcon fontSize="inherit" className="mb-1.5" />
        </li>
        <li className="pt-0.5 pb-0.5 px-2 transition ease-out delay-110 rounded-xl hover:rounded-xl hover:bg-orange-400 hover:scale-110 active:translate-y-1">
          <PlaceIcon fontSize="inherit" className="mb-1.5" />
        </li>
        <li className="pt-0.5 pb-0.5 px-2 transition ease-out delay-110 rounded-xl hover:rounded-xl hover:bg-orange-400 hover:scale-110 active:translate-y-1">
          <CalendarMonthIcon fontSize="inherit" className="mb-1.5" />
        </li>
        <li className="pt-0.5 pb-0.5 px-2 transition ease-out delay-110 rounded-xl hover:rounded-xl hover:bg-orange-400 hover:scale-110 active:translate-y-1">
          <SettingsIcon fontSize="inherit" className="mb-1.5" />
        </li>
      </ul>

      <div className="">Copyright &copy;</div>
    </div>
  );
}

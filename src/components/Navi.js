import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import InsightsIcon from "@mui/icons-material/Insights";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navi() {
  return (
    <div className="bg-[#ec4899] flex flex-col items-center basis-1/12 h-fit">
      {/* Navigation */}
      <ul className="">
        <li>
          <BarChartIcon />
        </li>
        <li>
          <InsightsIcon />
        </li>
        <li>
          <PlaceIcon />
        </li>
        <li>
          <CalendarMonthIcon />
        </li>
        <li>
          <SettingsIcon />
        </li>
      </ul>
    </div>
  );
}

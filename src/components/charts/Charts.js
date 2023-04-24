import React from "react";
import "./charts.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Chart from "../Chart/Chart";
function Charts() {
  return (
    <div className="charts">
      <div className="featured">
        <div className="top">
          <span>Total Revenue</span>
          <MoreVertIcon />
        </div>
        <div className="bottom">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
          <h3>Total sales made today</h3>
          <span>$420</span>
          <p>
            Previous transactions processing. Last payments may not be included.
          </p>
          <ul>
            <li>
              Target
              <span className="negative">
                <KeyboardArrowDownIcon /> $12.4k
              </span>
            </li>
            <li>
              Last Week
              <span className="positive">
                <KeyboardArrowUpOutlinedIcon /> $12.4k
              </span>
            </li>
            <li>
              Last Month
              <span className="positive">
                <KeyboardArrowUpOutlinedIcon /> $12.4k
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
    </div>
  );
}

export default Charts;

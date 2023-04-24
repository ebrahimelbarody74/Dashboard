import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">Oricoadmin</div>
      </div>
      <div className="center">
        <ul>
          <p>MAIN</p>
          <Link>
            <li>
              <DashboardIcon />
              <span>Dashboard</span>
            </li>
          </Link>
          <p>LISTS</p>
          <Link>
            <li>
              <PersonOutlineIcon />
              <span>User</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <StoreIcon />
              <span>Products</span>
            </li>
          </Link>
          <Link>
            <li>
              <CreditCardIcon />
              <span>Orders</span>
            </li>
          </Link>
          <Link>
            <li>
              <LocalShippingIcon />
              <span>Delivery</span>
            </li>
          </Link>
          <p>USEFUL</p>
          <Link>
            <li>
              <InsertChartIcon />
              <span>Stats</span>
            </li>
          </Link>
          <Link>
            <li>
              <NotificationsNoneIcon />
              <span>Notification</span>
            </li>
          </Link>
          <p>SERVICE</p>
          <Link>
            <li>
              <SettingsSystemDaydreamOutlinedIcon />
              <span>System Health</span>
            </li>
          </Link>
          <Link>
            <li>
              <PsychologyOutlinedIcon />
              <span>Logs</span>
            </li>
          </Link>
          <Link>
            <li>
              <SettingsApplicationsIcon />
              <span>Settings</span>
            </li>
          </Link>
          <p>USER</p>
          <Link>
            <li>
              <AccountCircleOutlinedIcon />
              <span>Profile</span>
            </li>
          </Link>
          <Link>
            <li>
              <ExitToAppIcon />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

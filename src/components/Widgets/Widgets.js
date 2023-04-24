import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import "./Widgets.scss";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widget">
        <div className="left">
          <div className="title">USERS</div>
          <div className="counter">100</div>
          <div className="link">see all users</div>
        </div>
        <div className="right">
          <div className="percentage ">
            <KeyboardArrowUpIcon />
            20%
          </div>
          <PersonOutlinedIcon />
        </div>
      </div>
      <div className="widget">
        <div className="left">
          <div className="title">ORDERS</div>
          <div className="counter">100</div>
          <div className="link">see all users</div>
        </div>
        <div className="right">
          <div className="percentage ">
            <KeyboardArrowUpIcon />
            20%
          </div>
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
      <div className="widget">
        <div className="left">
          <div className="title">EARNINGS</div>
          <div className="counter">100</div>
          <div className="link">see all users</div>
        </div>
        <div className="right">
          <div className="percentage ">
            <KeyboardArrowUpIcon />
            20%
          </div>
          <MonetizationOnOutlinedIcon />
        </div>
      </div>
      <div className="widget">
        <div className="left">
          <div className="title">BALANCE</div>
          <div className="counter">100</div>
          <div className="link">see all users</div>
        </div>
        <div className="right">
          <div className="percentage ">
            <KeyboardArrowUpIcon />
            20%
          </div>
          <AccountBalanceWalletOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Widgets;

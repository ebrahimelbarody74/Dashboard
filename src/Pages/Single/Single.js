import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";
import "./Single.scss";
function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit">Edit</div>
            <h2 className="title">Information</h2>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
                class="itemImg"
              />
              <div className="info">
                <h1>Jane Doe</h1>
                <ul>
                  <li>
                    Email: <span>janedoe@gmail.com</span>
                  </li>
                  <li>
                    Phone: <span>+1 2345 67 89</span>
                  </li>
                  <li>
                    Address: <span>Elton St. 234</span>
                  </li>
                  <li>
                    Garaden Yd: <span> Yd. NewYork</span>
                  </li>
                  <li>
                    Country: <span>USA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default Single;

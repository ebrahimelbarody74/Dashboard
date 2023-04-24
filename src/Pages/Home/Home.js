import React from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widgets from "../../components/Widgets/Widgets";
import Tables from "../../components/Table/Table";
import Charts from "../../components/charts/Charts";
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Widgets />
        <Charts />
        <Tables />
      </div>
    </div>
  );
}

export default Home;

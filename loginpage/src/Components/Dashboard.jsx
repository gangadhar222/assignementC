import React from "react";
import ToggleButton from "./ToggleButton";
import "./Dashboard.css";
import RectangularComponent from "./RectangularComponent";

export default function Dashboard() {
  let details = [
    {
      count: 121,
      status: "BOOKING",
      statusDetails: "No. of Waybills",
      icon: "/icon_booking.svg",
    },
    {
      count: 55,
      status: "OFD",
      statusDetails: "Out for Delivery",
      icon: "/icon_ofd.svg",
    },
    {
      count: 430,
      status: "DEL",
      statusDetails: "Delivered",
      icon: "/icon_del.png",
    },
    {
      count: 23,
      status: "UNDEL",
      statusDetails: "Undelivered",
      icon: "/icon_undel.png",
    },
  ];
  return (
    <div>
      <div className="navbar">
        <ToggleButton className="toggleComponent" />
        <img src="/logo.svg" className="logoD" />
        <div className="user"></div>
        <select className="select">
          <option className="option">Location 1</option>
        </select>
      </div>
      <div>
        <p className="dashboardText">Dashboard</p>
        <p className="dateText">12/12/2019-18/12/2019</p>
        <div className="calendarIcon"></div>
        <div className="searchIcon"></div>
      </div>
      <div>
        <div className="info">
          {details.map((item) => (
            <RectangularComponent
              count={item.count}
              status={item.status}
              statusDetails={item.statusDetails}
              icon={item.icon}
            />
          ))}
        </div>
        <div className="piechart"></div>
      </div>
      <div className="table">
        <p className="fename">FE NAME</p>
        <p className="del">DEL</p>
        <p className="del">UNDEL</p>
        <p className="del">NA</p>
        <p className="del">DELIVERY IN %</p>
      </div>
      <div className="float">
        <p className="name marginLeft">Daarun Shaikh</p>
        <p className="deld">34</p>
        <p className="deld">27</p>
        <p className="deld">0</p>
        <p className="percent">
          97 %
        </p>
        <p className="bar"></p>
      </div>
      <div className="float">
        <p className="name marginLeft">Daha Mosin</p>
        <p className="deld">34</p>
        <p className="deld">27</p>
        <p className="deld">0</p>
        <p className="percent">
          97 %
        </p>
        <p className="bar"></p>
      </div>
    </div>
  );
}

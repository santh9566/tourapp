import React from "react";
import "./App.css";
import Service from "./assets/serviceimg.jpg";
import Navbar from "./navbar";
import Card from "./card";
import Footer from "./footer";
function Serv(){
    return(
        <div className="service">
            <Navbar/>
            <img src={Service} alt="banner 3"/>
            <h2> Service </h2>
            <h7>Recently added..</h7>
            <Card/>
            <Footer/>
        </div>
    )
}
export default Serv

import React from "react";
import NavBar from "./navbar";
import Image from "./assets/homeimg.jpg"
import Footer from "./footer";
import ImageWithContent from "./content";
import "./App.css";
import Card from "./card";

function Home(){
    return(
        <div className="home">
            <NavBar/>
            <img src={Image}  alt="portfolio"/>
            <h2> Welcome </h2>
            


        <ImageWithContent/>
        <Card/>
        <Footer/>
        </div>
    )
}
export default Home
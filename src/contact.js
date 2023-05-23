import React from "react";
import "./App.css";
import Cont from "./assets/contactimg.jpg";
import Navbar from "./navbar";
import Form from "./form";
import Footer from "./footer";
function contact(){
    return(
        <div className="contact">
        <Navbar/>
        <img src={Cont} alt="banner 3"/>
        <h2> Contact us </h2>
        <Form/>
        <Footer/>
        </div>   
             
    

    )
}
export default contact
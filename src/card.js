import Card1 from "./assets/cardimg1.jpg";
import Card2 from "./assets/cardimg2.jpg";
import Card3 from "./assets/cardimg3.jpg";
import "./App.css"
import React from "react";

function Card(){
 return(
    <div className='container'>
         <div className="card">
       <img src={Card1} alt="image"/>
       <h6>Yamuna river</h6>
       <p>Yamuna River, also called Jumna, major river of northern India, primarily in Uttarakhand and Uttar Pradesh states. It is one of the country's most sacred rivers. The Yamuna rises on the slopes of the Bandarpunch</p>
        <button>Know more</button>
        </div>

        <div className="card">
       <img src={Card2} alt="image"/>
       <h6>Goa</h6>
       <p>Goa, state of India, comprising a mainland district on the country's southwestern coast and an offshore island. It is located about 250 miles (400 km) south of Mumbai (Bombay). One of India's smallest states,</p>
       <button>Know more</button>
        </div>

        <div className="card">
       <img src={Card3} alt="image"/>
       <h6>Simla</h6>
       <p>Shimla, formerly Simla, city, capital of Himachal Pradesh state, northwestern India. The city lies northeast of Chandigarh on a ridge of the Himalayan foothills, at an elevation of about 7,100 feet (2,200 metres).</p>
       <button>Know more</button>
        </div>

        </div>
 )
}
export default Card
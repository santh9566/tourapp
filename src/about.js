import React from "react"
import "./App.css"
import Navbar from "./navbar"
import Image2 from "./assets/aboutimg.jpg";
import ImageWithContent from "./content";
import Footer from "./footer";
import Slider1 from "./assets/slider1.jpg";
import Slider2 from "./assets/silder2.jpg";
import Slider3 from "./assets/slider3.jpg";
import Slider4 from "./assets/slider4.jpg";
import Slider5 from "./assets/slider5.jpg";
import Slider6 from "./assets/slider6.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function About (){
    return(
        <div className="about">
            <Navbar/>
            <img src={Image2} alt="banner 2"/>
            <h2> About Us </h2>
            <h7>Our History</h7>
            <p>Name a travel style or preference and there’s a tour company out there that caters to it—though not all travel tour companies are created equally. To help plan your next jaunt to destinations near and far, we rounded up some of the best tour companies out there, whether you’re a food-obsessed jetsetter, wish to lean into hidden histories, or want maximum adventure on a budget.</p>
            <h7>Our Success</h7>
            <p>When it comes to an itinerary, Travel + Leisure readers want more than a string of photo opportunities — and the right tour operator makes all the difference in creating a trip of a lifetime versus one that simply checks off a list of sights. This year, our readers were especially drawn to companies that utilize local expertise and experience to thoughtfully design trips that will entertain as well as inspire.

Every year for our World's Best Awards survey, T+L asks readers to weigh in on travel experiences around the globe — to share their opinions on the top hotels, resorts, cities, islands, cruise ships, spas, airlines, and more.</p>
            <h7>Our Goal</h7>
            <p>Among the five companies on this year's list that weren't on last year's were two women-only tour operators that cater to travelers of all ages. AdventureWomen (No. 14) has multiday tours designed by women from Bhutan to Yellowstone National Park, while Explorer Chick (No. 15) has everything from day trips — like glassblowing in Baltimore and cave rappelling in St. Louis — to full itineraries in Machu Picchu and the Galápagos. One reader said her Everest Base Camp trip with AdventureWomen was filled with "like-minded women" who "bonded so well," while another said she felt it was a "safe tour group for women."</p>
            
            <Carousel>
      <div>
        <img src={Slider1} alt="Slider 1" />
        <p className="legend">Effil Tower</p>
      </div>
      <div>
        <img src={Slider2} alt="Slider 2" />
        <p className="legend">Great Wall Of China </p>
      </div>
      <div>
        <img src={Slider3} alt="Slider 3" />
        <p className="legend">Charminar</p>
      </div>
      <div>
        <img src={Slider4} alt="Slider 4" />
        <p className="legend">Egypt</p>
      </div>
      <div>
        <img src={Slider5} alt="Slider 5" />
        <p className="legend">Las Vegas</p>
      </div>
      <div>
        <img src={Slider6} alt="Slider 6" />
        <p className="legend">Twin Towers</p>
      </div>
      
    </Carousel>

            
            <ImageWithContent/>
            <Footer/>
        </div>

    )

}
export default About
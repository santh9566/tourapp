import React from "react";
import Image1 from "./assets/contentimg1.jpg"
import Image2 from "./assets/contentimg2.jpg";
import Image3 from "./assets/contentimg3.jpg";
import "./App.css"

function ImageWithContent() {
    return (
        <>
        <div className="image-with-content">
            <div className="image-container">
                <img src={Image1} alt="image1" />
            </div>
            <div>
                <p><span>Taj Mahal</span>, also spelled Tadj Mahall, mausoleum complex in Agra, western Uttar Pradesh state, northern India. The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628-58) to immortalize his wife Mumtaz Mahal ("Chosen One of the Palace"), who died in childbirth in 1631, having been the emperor's inseparable companion since their marriage in 1612.</p>
            </div>
        </div>
        
        <div className="image-with-content">
            <div className="image-container">
                <img src={Image2} alt="image1" height="50%" width="20%" />
            </div>
            <div>
                <p><span>Himalayas</span>, Nepali Himalaya, great mountain system of Asia forming a barrier between the Plateau of Tibet to the north and the alluvial plains of the Indian subcontinent to the south. The Himalayas include the highest mountains in the world, </p>
            </div>
        </div>
        
        <div className="image-with-content">
            <div className="image-container">
                <img src={Image3} alt="image1" />
            </div>
            <div>
                <p><span>Ladakh</span>, large area of the northern and eastern Kashmir region, northwestern Indian subcontinent. Administratively, Ladakh is divided between Pakistan (northwest), as part of Gilgit-Baltistan, and India (southeast), as part of Ladakh union territory (until October 31, 2019, part of Jammu and Kashmir state); </p>
            </div>
        </div>
        
</>

    
    );
}

export default ImageWithContent;

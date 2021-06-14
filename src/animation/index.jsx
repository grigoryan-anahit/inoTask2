import React from "react";
import { Carousel } from 'react-bootstrap';
import  img4 from "../images/img4.jpg";
import  img3 from "../images/img3.jpg";
const CarouselPage = () => {
  return (
    <Carousel fade id='carouselBig' controls={false}>
         
    <Carousel.Item id='carouselItem'>
        <div className='txtDiv'>
             <h1 id='carouselTxt1'>We Create Amazing<br></br> 
                                  Architecture<br></br> 
                                  design
            </h1>
            <p className='carouselP'>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                It is i paradisematic country in which roasted
                parts of sentences fly into your mouth
            </p>
            <button className='carouselBtn'>View our works</button>
        </div>
       <img id='carouselImg'
            className="d-block w-100 "
            src={img3}
            alt="First slide"
      />
  </Carousel.Item>
     
    <Carousel.Item  id='carouselItem'>
         <div className='txtDiv'> 
             <h1 id='carouselTxt2'>We Love<br></br> 
                                  Modern designs
            </h1>
            <p className='carouselP'>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                It is i paradisematic country in which roasted
                parts of sentences fly into your mouth
            </p>
            <button className='carouselBtn'>View our works</button>
        </div>
        <img id='carouselImg'
            className="d-block w-100 "
            src={img4}
            alt="First slide"
      />
    </Carousel.Item>
    
  </Carousel>
  );
}

export default CarouselPage;
// const AnimationPage = () => {
//     return (
//         <MDBAnimation type="fadeOut" infinite>
//             <img className="img-fluid" alt="" src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" />
//         </MDBAnimation>
//     );
// };

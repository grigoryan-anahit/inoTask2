import React from 'react';
import OwlCarousel from 'react-owl-carousel2';


import  customer1 from "../images/customer1.jpg";
import  customer2 from "../images/customer2.jpg";
import  customer3 from "../images/customer3.jpg";
import  customer4 from "../images/customer4.jpg";
import  customer5  from "../images/customer5.jpg";

const options = {
    items: 3,
     rewind: true,
    autoplay: true
};

class CarouselCustomers extends React.Component {
    
  render(){
   
    return (
      <OwlCarousel ref="car" options={options}  >
            <div className='owlDiv'>
                <div className='customerImgDiv'>
                    <img src={customer1} alt='customer' className='customerImg' />
                </div>
                
                <p className='owlTxt'>
                    Far far away, behind the word mountains,<br></br> 
                    far from the countries Vokalia and <br></br> 
                    Consonantia, there live the blind texts
                </p>
                <h5>Garreth Smith</h5>
                <p >Exterior Designer</p>
            </div>
            <div className='owlDiv'>
                <div className='customerImgDiv'>
                    <img src={customer2} alt='customer' className='customerImg' />
                </div>
                
                <p className='owlTxt'>
                    Far far away, behind the word mountains,<br></br> 
                    far from the countries Vokalia and <br></br> 
                    Consonantia, there live the blind texts
                </p>
                <h5>Garreth Smith</h5>
                <p >Exterior Designer</p>
            </div>
            <div className='owlDiv'>
                <div className='customerImgDiv'>
                    <img src={customer3} alt='customer' className='customerImg' />
                </div>
                
                <p className='owlTxt'>
                    Far far away, behind the word mountains,<br></br> 
                    far from the countries Vokalia and <br></br> 
                    Consonantia, there live the blind texts
                </p>
                <h5>Garreth Smith</h5>
                <p >Exterior Designer</p>
            </div>
            <div className='owlDiv'>
                <div className='customerImgDiv'>
                    <img src={customer4} alt='customer' className='customerImg' />
                </div>
                
                <p className='owlTxt'>
                    Far far away, behind the word mountains,<br></br> 
                    far from the countries Vokalia and <br></br> 
                    Consonantia, there live the blind texts
                </p>
                <h5>Garreth Smith</h5>
                <p >Exterior Designer</p>
            </div>
            <div className='owlDiv'>
                <div className='customerImgDiv'>
                    <img src={customer5} alt='customer' className='customerImg' />
                </div>
                
                <p className='owlTxt'>
                    Far far away, behind the word mountains,<br></br> 
                    far from the countries Vokalia and <br></br> 
                    Consonantia, there live the blind texts
                </p>
                <h5>Garreth Smith</h5>
                <p >Exterior Designer</p>
            </div>
            <div className='owlDiv'>
                <div className='customerImgDiv'>
                    <img src={customer2} alt='customer' className='customerImg' />
                </div>
                
                <p className='owlTxt'>
                    Far far away, behind the word mountains,<br></br> 
                    far from the countries Vokalia and <br></br> 
                    Consonantia, there live the blind texts
                </p>
                <h5>Garreth Smith</h5>
                <p >Exterior Designer</p>
            </div>
            <div className='owlDiv'>
                <div className='customerImgDiv'>
                    <img src={customer5} alt='customer' className='customerImg' />
                </div>
                
                <p className='owlTxt'>
                    Far far away, behind the word mountains,<br></br> 
                    far from the countries Vokalia and <br></br> 
                    Consonantia, there live the blind texts
                </p>
                <h5>Garreth Smith</h5>
                <p >Exterior Designer</p>
            </div>
            <div className='owlDiv'>
                <div className='customerImgDiv'>
                    <img src={customer1} alt='customer' className='customerImg' />
                </div>
                
                <p className='owlTxt'>
                    Far far away, behind the word mountains,<br></br> 
                    far from the countries Vokalia and <br></br> 
                    Consonantia, there live the blind texts
                </p>
                <h5>Garreth Smith</h5>
                <p >Exterior Designer</p>
            </div>
           
    </OwlCarousel>
          
        
      );
  }
}

export default CarouselCustomers;
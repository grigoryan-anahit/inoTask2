import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import {Row, Col , Container } from 'react-bootstrap';

const options = {
    items: 5,
     rewind: true,
    autoplay: true
};

class ClientsCarousel extends React.Component {
    
  render(){
   
    return (
      <Container >
          <Row >
              <Col   >
              <OwlCarousel ref="car" options={options}  >
            <div className='logoDiv'>
                <h4>CLIENT LOGO 1</h4>
            </div>
            <div className='logoDiv'>
                <h4>CLIENT LOGO 2</h4>
            </div>
            <div className='logoDiv'>
                <h4>CLIENT LOGO 3</h4>
            </div>
            <div className='logoDiv'>
                <h4>CLIENT LOGO 4</h4>
            </div>
            <div className='logoDiv'>
                <h4>CLIENT LOGO 5</h4>
            </div>
            <div className='logoDiv'>
                <h4>CLIENT LOGO 6</h4>
            </div>
            <div className='logoDiv'>
                <h4>CLIENT LOGO 7</h4>
            </div>
           
    </OwlCarousel>
              </Col>
          </Row>
      </Container>
          
        
      );
  }
}

export default ClientsCarousel;
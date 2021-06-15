import React from 'react';
import CarouselPage from '../../animation';
import CarouselCustomers from '../../animationCustomers';
import ClientsCarousel from '../../animationClients';

import AboutH from './about';
import Workflow from './workFlow';
import ProjectHome from './projectHome';
import ProjectHomeTwo from './projectHomeTwo';
import Expert from './expert';
import Footer from './footer';
import BlogHome from './blogHome';

import s from './home.module.css';

class Home extends React.Component{
    
 render(){
    return (
        <div className={s.homePage}>
         <div className={s.carouselDiv}>
     
            <CarouselPage />
         </div>
          <AboutH />
          <div className={s.blueDiv}>
            <div className={s.blueNum} >
                <p className='year'>18</p>
                <p >351</p>
                <p >564</p>
                <p >300</p>
            </div>
            <div className={s.blueNum}>
                <p >Years of Experienced</p>
                <p >Happy Clients</p>
                <p >Finished Projects</p>
                <p >Working Days</p>
            </div>
          </div>
          <Workflow />
          <ProjectHome />
          <ProjectHomeTwo />
    
   
             <div className={s.testimonyPage}>
                <div className={s.headerDiv}>
                     <div className={s.hrDivPr}>
                        <p className={s.hrTxt} >TESTIMONY </p>
                        <hr className={s.hrPr}></hr>
                    </div>
                    <h3 className={s.prHeader}>Our satisfied customer says</h3>
                    <p className={s.htTxt}>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia<br></br> 
                        live the blind texts. Separated they live in. 
                        </p>
                </div>
                <CarouselCustomers />
            </div>
          
            <Expert />
        
            <BlogHome />
        
            <div className={s.clients}>
                    <div className={s.prDiv1}>
                        <div className={s.prDiv1Left}>
                            <div className={s.hrDivPr}>
                                <p className={s.hrTxt} >CLIENTS </p>
                                <hr className={s.hrPr}></hr>
                            </div>
                            <h3 className={s.prHeader}>Our CLients</h3>
                        </div>
                        <div className={s.prDiv1Right}>
                            <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there<br></br> 
                            live the blind texts. Separated they live in.
                            </p>
                        </div>
                    </div> 
                   <div className={s.clientCarDiv}>
                   <ClientsCarousel />
                   </div>
            </div>
         
            <Footer />
</div>

      
        
    )
    
    
   }
}
export default Home;
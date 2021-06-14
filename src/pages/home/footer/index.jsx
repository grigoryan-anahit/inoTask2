import s from './footer.module.css';
import FooterNav from '../../../footerNav';
import ServiceNav from '../../../footerNav/servicesNav';
import {Button} from 'react-bootstrap';

import fb from '../../../images/fb.png';
import tw from '../../../images/tw.png';
import insta from '../../../images/insta.png';

const Footer=()=>{
    return (
        <div className={s.footer}>
               <div className={s.footerWrapper}>
                        <div className={s.footerDiv}>
                            <h4>Mosaic</h4>
                            <p className={s.footerTxt}>
                            Far far away, behind the word mountains,<br></br>
                            far from the countries Vokalia and <br></br>
                            Consonantia, there live the blind texts.
                            </p>
                            <div className={s.footerIcons}>
                                <div>
                                <img src={tw} alt='fb' className={s.fb} />
                                </div>
                                <div>
                                    <img src={fb} alt='fb' className={s.fb} />    
                                </div>
                                <div>
                                    <img src={insta} alt='fb' className={s.fb} />  
                                </div>
                            </div>
                       </div>
                  <div className={s.footerDiv}>
                      <h4>Links</h4>
                      <FooterNav/>
                  </div>
                    <div className={s.footerDiv}>
                        <h4>Services</h4>
                         <ServiceNav /> 
                    </div>
                    <div className={s.footerDiv}>
                        <h4>Newsletter</h4>
                        <p className={s.footerTxt}>Far far away, behind the word mountains, <br></br>
                            far from the countries.
                        </p>
                        <div className={s.inputBtnDiv}>
                            <input type='emeil' name='email' placeholder='Enter email address' className={s.footerInput} />
                            <Button variant="primary" size="lg" className={s.footerBtn} >Subscribe</Button>   
                        </div>
                    </div>
                  
               </div>
               <p className={s.lastTxt}>Copyright ©2021 All rights reserved | This template is made with  by Colorlib</p>
            </div>
    )
}
export default Footer;
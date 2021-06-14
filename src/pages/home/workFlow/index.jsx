import s from './work.module.css';
import icon from '../../../images/icon2.png';
import arrow from '../../../images/arrow.png';
import icons from '../../../images/icons.png';
const Workflow=()=>{
return(
    <div className={s.workflow}>
        <div className={s.divOne}>
            <h3>Our Work Flow</h3>
            <p  className={s.txt}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there<br></br> live the blind texts. Separated they live in. </p>
        </div>
         <div className={s.divTwo} >
                <div className={s.divs}>
                        <div className={s.imgDiv}>
                            <img src={icon} alt='design' className={s.icon} />
                            <img src={arrow} alt='design' className={s.arrowIcon} />
                        </div>
                        <h4 className={s.disHeader}>PERFECTLY DESIGN</h4>
                        <p >Even the all-powerful Pointing has no control<br></br>
                            about the blind texts it is an almost <br></br>
                            unorthographic.
                        </p>
                </div>
                <div  className={s.divs}>
                        <div className={s.imgDiv}>
                            <img src={icon} alt='design' className={s.icon} />
                            <img src={arrow} alt='design' className={s.arrowIcon} />
                        </div>
                        <h4 className={s.disHeader}>CAREFULLY PLANNED</h4>
                        <p>Even the all-powerful Pointing has no control<br></br>
                            about the blind texts it is an almost <br></br>
                            unorthographic.
                        </p>
                </div>
                <div  className={s.divs}>
                    <div className={s.imgDiv}>
                        <img src={icon} alt='design' className={s.icon} />
                        <img src={arrow} alt='design' className={s.arrowIcon} />
                    </div>
                    <h4 className={s.disHeader}>SMARTLY EXECUTE</h4>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
             </div>
    <div className={s.divThree}>
            <div className={s.divThree1}>
                <h4>Our Services</h4>
                <p>Even the all-powerful Pointing has no control<br></br> about the blind texts it is an almost<br></br> unorthographic.</p>
            </div>
            <div className={s.divThreeDiv}>
                    <div className={s.divThreeDivchik}>
                        <img src={icons} alt='book' className={s.divThreeImg} />
                        <h5>DESIGN</h5>
                        <p>Even the all-powerful Pointing has no <br></br>control about the blind texts it is an almost<br></br> unorthographic.</p>
                    </div>
                    <div className={s.divThreeDivchik}>
                        <img src={icons} alt='book' className={s.divThreeImg} />
                        <h5>DESIGN</h5>
                        <p>Even the all-powerful Pointing has no <br></br>control about the blind texts it is an almost<br></br> unorthographic.</p>
                    </div>
                    <div className={s.divThreeDivchik}>
                        <img src={icons} alt='book' className={s.divThreeImg} />
                        <h5>DESIGN</h5>
                        <p>Even the all-powerful Pointing has no <br></br>control about the blind texts it is an almost<br></br> unorthographic.</p>
                    </div>
                    <div className={s.divThreeDivchik}> 
                        <img src={icons} alt='book' className={s.divThreeImg} />
                        <h5>DESIGN</h5>
                        <p>Even the all-powerful Pointing has no <br></br>control about the blind texts it is an almost<br></br> unorthographic.</p>
                    </div>
            </div>
   </div>
</div> 
)
}
export default Workflow;
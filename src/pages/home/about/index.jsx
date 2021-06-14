import s from './abouth.module.css';
import img1 from '../../../images/img1.jpg';
import nextIcon from '../../../images/next.png' ;
const AboutH=()=>{
    return (
        <div className={s.about}>
             <div className={s.aboutImg}>
             <img src={img1} alt='kithchenImg' className={s.image}/>
             </div>
             <div className={s.aboutTxt}>
                 <div className={s.hrDiv}>
                   <p className={s.ab}>ABOUT </p>
                   <hr className={s.hr}></hr>
                 </div>
                 <p className={s.aboutTxtHeader}>
                     We are the best Exterior Interior & <br></br>Architecture firm
                 </p>
                 
                <p className={s.aboutTxtMain}>
                Since at least the middle of the 20th century, the term interior decorator has been so loosely applied as to be nearly meaningless,
                 with the result that other, more descriptive terms have come into use. The term interior design indicates a broader area of activity 
                 and at the same time suggests its status as a serious profession. In some European countries, where the profession is well established, 
                 it is known as interior architecture. Individuals who are concerned with the many elements that shape man-made environments have come to 
                 refer to the total field as environmental design.<br></br><br></br>
                 Although interior design is still a developing profession without a clear definition of its limits, the field can be thought of in terms 
                 of two basic categories: residential and nonresidential. The latter is often called contract design because of the manner in which the
                  designer receives his compensation.
                </p>
                <button className={s.aboutBtn}> Learn More<img src={nextIcon} alt='next' className={s.nextIcon} /></button>
             </div>

         </div>
    )
}
export default AboutH;
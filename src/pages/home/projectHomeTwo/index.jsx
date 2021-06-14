import s from './projectHomeTwo.module.css';
import img5 from '../../../images/img5.jpg';
import img6 from '../../../images/img6.jpg';
import img7 from '../../../images/img7.jpg';
import img8 from '../../../images/img8.jpg';
import img9 from '../../../images/img9.jpg';
import img10 from '../../../images/img10.jpg';
import img11 from '../../../images/img11.jpg';
import img12 from '../../../images/img12.jpg';
const ProjectHomeTwo=()=>{
    return (
        <div className={s.prBigDiv}>
        <div className={s.BigimgDiv} >
            <img src={img5} alt='nice' className={s.bigDivImg}/>
        </div>
        <div className={s.BigimgDiv}>
            <img src={img6} alt='nice' className={s.bigDivImg}/>
        </div>
        <div className={s.BigimgDiv}>
            <img src={img7} alt='nice' className={s.bigDivImg}/>
        </div>
        <div className={s.BigimgDiv}>
            <img src={img8} alt='nice' className={s.bigDivImg}/>
        </div>
        <div className={s.BigimgDiv}>
            <img src={img9} alt='nice' className={s.bigDivImg}/>
        </div>
        <div className={s.BigimgDiv}>
            <img src={img10} alt='nice' className={s.bigDivImg}/>
        </div>
        <div className={s.BigimgDiv}>
            <img src={img11} alt='nice' className={s.bigDivImg}/>
        </div>
        <div className={s.BigimgDiv}>
            <img src={img12} alt='nice' className={s.bigDivImg}/>
        </div>
        <div className={ `${ s.hiddenVisible} ${s.hidden}`} >
            <p className={s.hiddenTxt}>INTERIOR DESIGN</p>
            <p className={s.hiddenTxt1}>Office Interior Design</p>
        </div>
        
    </div> 
    )
}
export default ProjectHomeTwo;
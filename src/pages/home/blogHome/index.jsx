import s from './blogHome.module.css';

import img6 from '../../../images/img6.jpg';
import img7 from '../../../images/img7.jpg';
import img8 from '../../../images/img8.jpg';

const BlogHome=()=>{
    return (
        <div className={s.blog}>
                    <div className={s.prDiv1}>
                        <div className={s.prDiv1Left}>
                            <div className={s.hrDivPr}>
                                <p className={s.hrTxt} >BLOG </p>
                                <hr className={s.hrPr}></hr>
                            </div>
                            <h3 className={s.prHeader}>Recent Blog</h3>
                        </div>
                        <div className={s.prDiv1Right}>
                            <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there<br></br> 
                            live the blind texts. Separated they live in.
                            </p>
                        </div>
                    </div> 
                    <div className={s.blogDivs}>
                        <div className={s.blogDiv}>
                            <div className={s.blogImgDiv}>
                                <img src={img6} alt='nice' className={s.blogImg} />
                            </div>
                            <p className={s.blogTxt}>
                                Even the all-powerful<br></br> 
                                Pointing has no control<br></br>
                                about the blind texts</p>
                        </div>
                        <div className={s.blogDiv}>
                            <div className={s.blogImgDiv}>
                                <img src={img7} alt='nice' className={s.blogImg} />
                            </div>
                            <p className={s.blogTxt}>
                                Even the all-powerful<br></br> 
                                Pointing has no control<br></br>
                                about the blind texts</p>
                        </div>
                        <div className={s.blogDiv}>
                            <div className={s.blogImgDiv}>
                                <img src={img8} alt='nice' className={s.blogImg} />
                            </div>
                            <p className={s.blogTxt}>
                                Even the all-powerful<br></br> 
                                Pointing has no control<br></br>
                                about the blind texts</p>
                        </div>
                    </div>
            </div>
    )
}
export default BlogHome;
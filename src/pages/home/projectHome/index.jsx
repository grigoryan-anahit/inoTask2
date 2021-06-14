import s from './projectHome.module.css'
const ProjectHome=()=>{
    return (
        <div className={s.project}>
        <div className={s.prDiv1}>
            <div className={s.prDiv1Left}>
                <div className={s.hrDivPr}>
                    <p className={s.hrTxt} >PROJECTS </p>
                    <hr className={s.hrPr}></hr>
                </div>
                <h3 className={s.prHeader}>Featured Projects</h3>
            </div>
            <div className={s.prDiv1Right}>
                <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there<br></br> 
                live the blind texts. Separated they live in. A small river named Duden flows by their place and<br></br>
                 supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of <br></br>
                 sentences fly into your mouth.
                </p>
            </div>
         </div> 
         </div> 
    )
}
export default ProjectHome;
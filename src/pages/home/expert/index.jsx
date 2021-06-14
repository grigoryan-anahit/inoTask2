import s from './expert.module.css';
import React from 'react';
import expert1 from '../../../images/expert1.jpg';
import expert2 from '../../../images/expert2.jpg';
import expert3 from '../../../images/expert3.jpg';
import expert4 from '../../../images/expert4.jpg';
class Expert extends React.Component{
  state={
      hiddenIsOpen:false,
      hiddenIsOpenOne:false,
      hiddenIsOpenTwo:false,
      hiddenIsOpenThree:false,

  }

    hiddenOpen=()=>{
         this.setState(prevstate=>({
             ...prevstate,
             hiddenIsOpen:true}))
    }
    hiddenClose=()=>{
        this.setState(prevstate=>({
            ...prevstate,
            hiddenIsOpen:false}))
   }
   hiddenOpenOne=()=>{
    this.setState({hiddenIsOpenOne:true})
}
hiddenCloseOne=()=>{
   this.setState({hiddenIsOpenOne:false})
}
hiddenOpenTwo=()=>{
    this.setState({hiddenIsOpenTwo:true})
}
hiddenCloseTwo=()=>{
   this.setState({hiddenIsOpenTwo:false})
}
hiddenOpenThree=()=>{
    this.setState({hiddenIsOpenThree:true})
}
hiddenCloseThree=()=>{
   this.setState({hiddenIsOpenThree:false})
}
  render(){
   
  return (
    <div className={s.expertPage}>
     <div className={s.headerDiv}>
           <div className={s.hrDivPr}>
               <p className={s.hrTxt} >EXPERT TEAM </p>
               <hr className={s.hrPr}></hr>
           </div>
           <h3 className={s.prHeader}>Our Architect Team</h3>
           <p className={s.htTxt}>
               Far far away, behind the word mountains, far from the countries Vokalia and Consonantia<br></br> 
               live the blind texts. Separated they live in. 
               </p>
         </div>
       <div className={s.expertsDivs}>

            <div className={s.expertsDiv} onMouseLeave={this.hiddenClose}>
               <div onMouseEnter={this.hiddenOpen}>
               <div className={s.expertImgDiv}>
                   <img src={expert1} alt='expert' className={s.expertImg}/>
               </div>
               <h4>John Wilson</h4>
               <p className={s.expertTitle}>Co-Founder / CEO</p>
               </div>
                   
            </div>

            <div className={s.expertsDiv} onMouseLeave={this.hiddenCloseOne}>
              <div onMouseEnter={this.hiddenOpenOne}>
              <div className={s.expertImgDiv}>
                   <img src={expert2} alt='expert' className={s.expertImg}/>
               </div>
               <h4>John Wilson</h4>
               <p className={s.expertTitle}>Co-Founder / CEO</p>
              </div>
            </div>

            <div className={s.expertsDiv} onMouseLeave={this.hiddenCloseTwo}>

               <div onMouseEnter={this.hiddenOpenTwo}>
               <div className={s.expertImgDiv}>
                   <img src={expert3} alt='expert' className={s.expertImg}/>
               </div>
               <h4>John Wilson</h4>
               <p className={s.expertTitle}>Co-Founder / CEO</p>
               </div>
            </div>

            <div className={s.expertsDiv} onMouseLeave={this.hiddenCloseThree}>
               <div onMouseEnter={this.hiddenOpenThree}>
               <div className={s.expertImgDiv}>
                   <img src={expert4} alt='expert' className={s.expertImg}/>
               </div>
               <h4>John Wilson</h4>
               <p className={s.expertTitle}>Co-Founder / CEO</p>
               </div>
            </div>
            
       </div>
       {/* /////////////////////////////////////// */}
              <div className={this.state.hiddenIsOpen? s.visible:`${ s.visible} ${s.hidden}` } onMouseLeave={this.hiddenClose}>
                        <h4>John Wilson</h4>
                        <p className={s.expertTitle}>Co-Founder / CEO</p>
                        <p>I am an ambitious workaholic,<br></br>
                         but apart from that, pretty<br></br> 
                         simple person.</p>
                   </div>
                   <div className={this.state.hiddenIsOpenOne? s.visiblee:`${ s.visiblee} ${s.hiddenn}` } onMouseLeave={this.hiddenCloseOne}>
                        <h4>David Wilson</h4>
                        <p className={s.expertTitle}>Co-Founder / CEO</p>
                        <p>I am an ambitious workaholic,<br></br>
                         but apart from that, pretty<br></br> 
                         simple person.</p>
                   </div>
                   <div className={this.state.hiddenIsOpenTwo? s.visibleee:`${ s.visibleee} ${s.hiddennn}` } onMouseLeave={this.hiddenCloseTwo}>
                        <h4>John Wilson</h4>
                        <p className={s.expertTitle}>Co-Founder / CEO</p>
                        <p>I am an ambitious workaholic,<br></br>
                         but apart from that, pretty<br></br> 
                         simple person.</p>
                   </div>
                   <div className={this.state.hiddenIsOpenThree? s.visibleeee:`${ s.visibleeee} ${s.hiddennnn}` } onMouseLeave={this.hiddenCloseThree}>
                        <h4>John Wilson</h4>
                        <p className={s.expertTitle}>Co-Founder / CEO</p>
                        <p>I am an ambitious workaholic,<br></br>
                         but apart from that, pretty<br></br> 
                         simple person.</p>
                   </div>
</div>
  )
  }
}
export default Expert;
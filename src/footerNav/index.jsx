import s from './footerNav.module.css';
import {NavLink} from 'react-router-dom';

const items=[
 {
    id:1,
    title:'Home',
    path:'/',
    exact:true
  },
  {
    id:2,
    title:'About',
   path:'/about',
  
 },
 {
   id:3,
   title:'Project',
   path:'/project',
  
 },
 {id:4,
   title:'Services',
   path:'/services',
  
 },
 {id:7,
   title:'Contact',
   path:'/contact'
 }
]
const FooterNav=()=>{
    const navbarItemsJsx= items.map(item=>(
         <li className={s.navItemF} key={item.id}>
             <NavLink className={s.navLinkF}
                     to={item.path} >
                         { item.title}
                         </NavLink>
                         </li>))
    
return (
       
        <ul className={s.navList}>
           {navbarItemsJsx}
        </ul>
     
    
)
}
export default FooterNav;
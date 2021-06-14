import s from '../footerNav.module.css';
import {NavLink} from 'react-router-dom';

const items=[
 {
    id:1,
    title:'Architectural Design',
    path:'/',
    exact:true
  },
  {
    id:2,
    title:'Interior Design',
   path:'/intdesign',
  
 },
 {
   id:3,
   title:'Exterior Design',
   path:'/extdesign',
  
 },
 {id:4,
   title:'Lighting Design',
   path:'/design',
  
 },
 {id:7,
   title:'AutoCAD Service',
   path:'/service'
 }
]
const ServiceNav=()=>{
    const navbarItemsJsx= items.map(item=>(
         <li  key={item.id}>
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
export default ServiceNav;
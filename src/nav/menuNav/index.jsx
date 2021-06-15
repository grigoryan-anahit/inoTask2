import s from './menuNav.module.css';
import {NavLink} from 'react-router-dom';
const MenuNav=({navbarItems})=>{
    
        const navbarItemsJsx= navbarItems.map(item=>(
             <li className={s.navItems} key={item.id}>
                 <NavLink className={s.navLink}
                         activeClassName={s.navLinkActive}
                         to={item.path} 
                         exact={item.exact}>
                             { item.title}
                             </NavLink>
                             </li>))
    return (
        <ul className={s.navList}>
        {navbarItemsJsx}
     </ul>
    )
}
export default MenuNav;
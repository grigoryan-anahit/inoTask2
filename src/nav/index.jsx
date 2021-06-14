import s from './nav.module.css';
import {NavLink} from 'react-router-dom';
const Nav=({navbarItems})=>{
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
    <nav>
        <div className={s.navBar}>
        <p className={s.mosaic}>
            Mosaic
        </p>
        <ul className={s.navList}>
           {navbarItemsJsx}
        </ul>
        </div>
    </nav>
)
}
export default Nav;

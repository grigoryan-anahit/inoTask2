import s from './nav.module.css';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MenuNav from './menuNav';

const Nav=({navbarItems, menuIsOpen, toggleMenu})=>{
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
        <h3 className={s.mosaic}>
            Mosaic
        </h3>
        <ul className={s.navList}>
           {navbarItemsJsx}
        </ul>
        <div className={s.menuDiv} onClick={toggleMenu} >
        <FontAwesomeIcon icon={faBars} 
                             color='black' 
                             size='2x' 
                             className={s.menu}
             />
             <h3>MENU</h3>
        </div>
        </div>
       {menuIsOpen && <div className={s.menuNavList}> <MenuNav  navbarItems={navbarItems}/> </div> }
    </nav>
)
}
export default Nav;

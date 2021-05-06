import React,{useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaOpencart} from 'react-icons/fa';
import {CgClose} from 'react-icons/cg';
import {Link} from 'react-router-dom';
import {SideBarData} from './SideBarData';
import './Header.css';
import HeaderSlider from './headerSlider';
const Header = () => {
    const[menu, showMenu]=useState(false);

    const showNavMenu = ()=>showMenu(!menu);
    return (
        <div>
        <div className="container nav-bar fixed-top">
            <Link to="#" className="col mt-3 menu-bars">
            <HiOutlineMenuAlt4 onClick={showNavMenu}/>
            </Link>
            <Link to="#" className="col mt-3 menu-bar-1 ">
            <FaOpencart/>
            </Link>
            <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showNavMenu}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bar">
                            <CgClose/>
                        </Link>
                    </li>
                    {SideBarData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
        <HeaderSlider/>
        </div>
    )
}

export default Header

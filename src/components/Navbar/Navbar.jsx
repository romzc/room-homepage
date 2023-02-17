import React from 'react'
import './navbar.css'
import LogoIcon from '../../assets/logo.svg'
import BurgerIcon from '../../assets/icon-hamburger.svg'
import CloseIcon from '../../assets/icon-close.svg'

const Navbar = () => {

    const [showNav, setShowNav] = React.useState(false)


    return (
        <nav className='navbar'>
            <img onClick={()=>setShowNav(prev=>!prev)} className='burger' src={BurgerIcon} alt="burger"/>
            <img className='logo' src={LogoIcon} alt="logo" />
            <ul className='navbar_list'>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>

            <ul className={`navbar_list mobile_bar ${ showNav && 'show'}`}>
                <img onClick={()=>setShowNav(prev=>!prev)} src={CloseIcon} alt="close" />
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>

        </nav>
    )
}

export { Navbar }
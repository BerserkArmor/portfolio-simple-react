import React from 'react'
import logo from './images/dn_logo.png'
import './header.css'
function Header() {
    return (
        <div className="header">
            <div className="header__menu" >
                <a href="/" ><img className="header__menu__logo" src={logo} alt="logo"/></a>
                <div className="header__nav">
                    <nav>
                        <a href="/contacto" >Contacto</a>
                        <a href="/#proyectos" >Proyectos</a>
                        <a href="https://github.com/BerserkArmor" target="__blank" >Github</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header

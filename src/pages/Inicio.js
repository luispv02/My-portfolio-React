import React from 'react'
import HeaderTop from '../components/HeaderTop'
import Hero from '../components/Hero'
import NavBottom from '../components/NavBottom'
import {menuScroll} from '../utils/helpers'

function Inicio() {

    menuScroll();

    return (
        <div className="Header">
            <HeaderTop/>
            <Hero />
            <NavBottom />
        </div>
    )
}

export default Inicio

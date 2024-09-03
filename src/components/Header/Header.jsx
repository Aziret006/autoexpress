import React from 'react'
import './Header.scss'
import logo from '../../img/AutoExpert24.svg'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div>
                <div className='container'>
                    <div className='header_all'>
                        <img src={logo} alt="" />
                        <nav className='nav_link'>
                            <ul>
                                <li>Автомобили</li>
                                <li>Автокредит</li>
                                <li>ТРейд-Ин</li>
                                <li>Выкуп</li>
                                <li>Госпрограммы</li>
                                <li>Контакты</li>
                            </ul>
                            <div className='burger_menu'>
                                <FaBars onClick={() => setIsOpen(true)} />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className='isOpen' onClick={() => setIsOpen(false)}>
                        <div className='overlay'>
                            <li>Автомобили</li>
                            <li>Автокредит</li>
                            <li>ТРейд-Ин</li>
                            <li>Выкуп</li>
                            <li>Госпрограммы</li>
                            <li>Контакты</li>
                        </div>
                    </div>
                )
            }
        </>
    )
}

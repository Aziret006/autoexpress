import React from 'react'
import './Footer.scss'
import AutoExpert from '../../img/AutoExpert.svg'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
export default function Footer() {
    return (
        <div className='footer_back'>
            <div className="container">
                <div className="footer_title">
                    <img src={AutoExpert} alt="" />
                    <ul>
                        <li>Все авто</li>
                        <li>Китайские авто</li>
                        <li>Авто для такси</li>
                        <li>Автокредит</li>
                        <li>ТРейд-Ин</li>
                        <li>Выкуп</li>
                        <li>Госпрограммы</li>
                    </ul>
                </div>
                <div className='footer_border'>
                </div>
               <div className='flex_grid_footer'>
               <div className='catalock'>
                    <h1>Каталог авто</h1>
                    <div className='selects'>
                    </div>
                    <div className='grid_marka'>
                        <div className='grid_gap'>
                            <li>KIA</li>
                            <li>LADA</li>
                            <li>changan</li>
                            <li>jaecoo</li>
                        </div>
                        <div className='grid_gap'>
                            <li>KIA</li>
                            <li>LADA</li>
                            <li>changan</li>
                            <li>jaecoo</li>
                        </div>
                        <div className='grid_gap'>
                            <li>KIA</li>
                            <li>LADA</li>
                            <li>changan</li>
                            <li>jaecoo</li>
                        </div>
                        <div className='grid_gap'>
                            <li>KIA</li>
                            <li>LADA</li>
                            <li>changan</li>
                            <li>jaecoo</li>
                        </div>
                        <div className='grid_gap'>
                            <li>KIA</li>
                            <li>LADA</li>
                            <li>changan</li>
                            <li>jaecoo</li>
                        </div>
                        <div className='grid_gap'>
                            <li>KIA</li>
                            <li>LADA</li>
                            <li>changan</li>
                            <li>jaecoo</li>
                        </div>
                        <div className='grid_gap'>
                            <li>KIA</li>
                            <li>LADA</li>
                            <li>changan</li>
                            <li>jaecoo</li>
                        </div>
                    </div>
                </div>
                <div className='contact'>
                    <h1>Контакты</h1>
                    <div className='selects'>
                    </div>
                    <div className='info'>
                        <div className='iconka_text'>
                            <IoLocationSharp color='#36DA82' className='iconkans' />
                            <li>+7 (861) 299-41-05</li>
                        </div>
                        <div className='iconka_text'>
                            <FaPhone color='#36DA82' className='iconkans'/>
                            <li>Западный обход, 67</li>
                        </div>
                        <div className='iconka_text'>
                        <IoTime color='#36DA82' className='iconkans' />
                            <li>9:00 - 21:00, без выходных</li>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}

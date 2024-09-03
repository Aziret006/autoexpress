import React, { useState } from 'react'
import image3 from '../../../img/image3.svg'
import { FaPlus } from "react-icons/fa6";
import image5 from '../../../img/image5.svg'
import './Buy.scss'
export default function Buy() {
    const [data, setData] = useState(false)
    return (
        <>
            <div>
                <div className='pay_item'>
                    <h2>CHERYEXEED VX New</h2>
                    <img src={image3} alt="" />
                    <div className='payment_checkbox_grid'>
                        <div className='payment_checkbox'>
                            <input type="checkbox" />
                            <p>President 7 мест</p>
                        </div>
                        <div className='payment_checkbox'>
                            <input type="checkbox" />
                            <p>2.0 8AT (249 л.с.) 4WD</p>
                        </div>
                    </div>
                    <div className='buy_pay'>
                        <h2>от 4 390 000 руб.</h2>
                        <p>Кредит от<span>84 644 ₽/мес.</span></p>
                    </div>
                    <button onClick={() => setData(true)}>Купить в кредит</button>
                </div>
                {
                    data && (
                        <div className='button_modal'>
                            <div className='modal_back' onClick={() => setData(false)}>
                            </div>
                            <div className='modal_context'>
                                <div className='modal_title'>
                                    <div className='plus'> <FaPlus size={20} /></div>
                                    <h3>Трудно принять решение? Оставьте заявку,
                                        мы подберем для Вас самые выгодные условия!</h3>
                                    <h5>Купить новый <span>CHERYEXEED VX New</span></h5>
                                    <h6>в кредит от
                                        <p>84 644 </p><span>₽/мес.</span></h6>
                                    <div className='img'><img src={image5} alt="" /></div>
                                    <div className='title_buy'>
                                        <h6>До <span>4 марта</span></h6>
                                        <h4>от <span>4 390 000</span> руб.</h4>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </>
    )
}

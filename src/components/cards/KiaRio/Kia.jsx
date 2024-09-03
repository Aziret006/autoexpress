import React from 'react'
import './Kia.scss'
import image6 from '../../../img/image6.svg'

export default function Kia() {
    return (
        <div>
            <div className='discount_block'>
                <div className='title_button_flex'>
                    <h2>KIA Rio</h2>
                    <button>Осталось 48</button>
                </div>
                <img src={image6} alt="" />
                <div className='flex_box'>
                    <input type="checkbox" />
                    <h4>Скидка до: <span>4 марта</span></h4>
                </div>
                <div className='price_and_btn'>
                    <h3>от 564 000 руб.</h3>
                    <h5>Кредит от <span>10 618 ₽/мес.</span></h5>
                </div>
                <button className='button'>Купить в кредит</button>
            </div>
        </div>
    )
}

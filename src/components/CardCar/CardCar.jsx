import React from 'react'
import './CardCar.scss'
import image7 from '../../img/image7.svg'
export default function CardCar() {
    return (
        <div>
            <div className="container">
                <div className='card_block_back'>
                    <div className='card_block_flex'>
                        <img src={image7} alt="" />
                        <div className='card_block_offers'>
                            <div className='card_title_all'>
                                <div className='card_title'>
                                    <h1>от 4.9%</h1>
                                    <h4>По льготной <br />
                                        ставке</h4>
                                </div>
                                <p>Купите свой авто на выгодных условиях!</p>
                                <div className='input_checkbox_back'>
                                    <input type="text" placeholder='Ваше имя' />
                                    <input type="text" placeholder='Ваш телефон' />
                                    <button>Отправить заявку</button>
                                    <div className='input_text'>
                                        <input type="checkbox" />
                                        <p>Согласен на обработку <span>персональных данных</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

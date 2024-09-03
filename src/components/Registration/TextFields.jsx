import React from 'react'
import './TextFields.scss'
import image4 from '../../img/image4.svg'
export default function TextFields() {
    return (
        <div>
            <div className="container">
                <div className='flex_image'>
                    <img src={image4} alt="" />
                    <div className='input_block'>
                        <div className='input_context'>
                            <p>Уже выбрали авто? <br />
                                Оставьте заявку</p>
                            <input type="text" placeholder='Ваше имя' />
                            <input type="text" placeholder='Ваш телефон' />
                            <div className='input_text'>
                                <input type="checkbox" />
                                <p>Согласен на обработку <span>персональных данных</span></p>
                            </div>
                            <button>Отправить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

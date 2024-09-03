import React from 'react'
import './HomePage.scss'
import { IoIosArrowDown } from "react-icons/io";
export default function HomePage() {
  return (
    <div>
      <div className='container'>
        <div className='homepage_all'>
          <div className='label'>
            <div className='card_block'><p>Marka</p><IoIosArrowDown /></div>
            <div className='card_block'><p>Model</p><IoIosArrowDown /></div>
            <div className='page_flex'>
              <div className='menu_item'><p>Цены от ...</p></div>
              <div className='menu_item'><p>Цены до ...</p></div>
            </div>
            <button>Показать</button>
          </div>
          <div className='input_block'>
            <div className='input_context'>
              <p>Есть вопросы? Задайте их нашему эксперту! Отправьте Ваши данные и мы Вам перезвоним.</p>
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

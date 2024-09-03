import React from 'react'
import './Main.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import image from '../../img/image.svg'
import TextBlock from '../cards/TextBlock/TextBlock';
export default function Main() {
    return (
        <div>
            <div className='container'>
                <div className='main_all'>
                    <div className='context_all'>
                        <div className='text_height'>
                            <div className='height'>
                            </div>
                            <h4>Купить новый автомобиль <br />
                                на выгодных условиях</h4>
                        </div>
                        <div className='context_button'>
                            <h1>Новая <br />
                                <span>Lada Vesta 2024</span></h1>
                            <p>Новая Lada Vesta. Проверенный и надежный автомобиль в <br /> стильном кузове. Полный набор современных опций <br />
                                для вашего комфорта.</p>
                            <button>Подробнее  <FaArrowRightLong size={26} /></button>
                        </div>
                    </div>
                    <div className='image_all'>
                        <div className='img_big'>
                            <img src={image} alt="" />
                        </div>
                        <div className='text_all_flex'>
                            <TextBlock />
                            <TextBlock />
                            <TextBlock />
                            <TextBlock />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

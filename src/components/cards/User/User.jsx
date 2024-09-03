import React from 'react'
import './User.scss'
import { BiLike } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
export default function User() {
    return (
        <div className='user-card'>
            <div className='icon_user'>
                <BiLike className='like' />
            </div>
            <li>18 банков на выбор</li>
            <div className='flex_context'>
                <p>Подробнее</p>
                <FaArrowRight />
            </div>
        </div>
    )
}

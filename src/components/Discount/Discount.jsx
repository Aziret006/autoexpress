import React from 'react'
import './Discount.scss'
import Kia from '../cards/KiaRio/Kia'
export default function Discount() {
    return (
        <div>
            <div className='container'>
                <div className='grid_discount'>
                    <Kia /><Kia /><Kia /><Kia />
                    <Kia /><Kia /><Kia /><Kia />
                </div>
            </div>
        </div>
    )
}

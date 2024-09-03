import React from 'react'
import './Payment.scss'
import Buy from '../cards/BuyMent/Buy'
export default function Payment() {
    return (
        <div>
            <div className='container'>
                <div className='Pay_Dgrid'>
                    <div className='pay_text'>
                        <h3>Горячее предложение</h3>
                    </div>
                    <div className='grid_tepleis'>
                        <Buy /><Buy /><Buy /><Buy />
                        <Buy /><Buy /><Buy /><Buy />
                        <Buy /><Buy /><Buy /><Buy />
                    </div>
                </div>
            </div>
        </div>
    )
}

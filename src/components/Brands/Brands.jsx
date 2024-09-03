import React from 'react'
import './Brands.scss'
import Toyota from '../cards/Toyota/Toyota'
export default function Brands() {
    return (
        <div>
            <div className='container'>
                <div className='brands_all'>
                    <div className='brands_text'>
                        <h5>Подобрать автомобиль </h5>
                    </div>
                    <div className='brands_grid'>
                        <Toyota /><Toyota /><Toyota />
                        <Toyota /><Toyota /><Toyota />
                        <Toyota /><Toyota /><Toyota />
                        <Toyota /><Toyota /><Toyota />
                        <Toyota /><Toyota /><Toyota />
                        <Toyota /><Toyota /><Toyota />
                        <Toyota /><Toyota /><Toyota />
                        <Toyota /><Toyota /><Toyota />
                        <Toyota /><Toyota /><Toyota />
                        <Toyota />
                    </div>
                </div>
            </div>
        </div>
    )
}

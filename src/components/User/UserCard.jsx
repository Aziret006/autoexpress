import React from 'react'
import './UserCard.scss'
import User from '../cards/User/User';
export default function UserCard() {
    return (
        <div>
            <div className='container'>
                <div className='flex_all_user'>
                    <User />
                    <User />
                    <User />
                    <User />
                </div>
            </div>
        </div>
    )
}

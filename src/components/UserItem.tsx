'use client'

import React from 'react'

const UserItem = () => {
    return (
        <div className='flex items-center justify-center gap-2 rounded p-4 w-full h-16'>
            <div className="avatar rounded-full min-h-8 min-w-8 bg-primary text-white font-bold flex items-center justify-center">
                <p>JD</p>
            </div>
            <div className='grow'>
                <p className='font-bold'>Jane Doe</p>
                <p className='text-neutral-500'>Jane@mail.com</p>
            </div>
        </div>
    )
}

export default UserItem

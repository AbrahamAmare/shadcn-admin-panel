'use client'

import { Target } from 'lucide-react'
import React from 'react'

export const Brand = () => {
    return (
        <div className='flex gap-2 items-center justify-center w-full h-16 py-4'>
            <Target size={36} />
            <p className='text-bold text-xl justify-start'>LOGO</p>
        </div>
    )
}

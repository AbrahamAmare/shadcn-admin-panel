'use client'
import React, { useState } from 'react'
import { BellIcon } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card } from '../ui/card'
import { Separator } from '@radix-ui/react-dropdown-menu'

const UserNotification = () => {
    const [notification, setNotification] = useState<any>([
        {
            text: "You have a new lead",
            date: "02-01-2024",
            read: true
        },
        {
            text: "Please update your daily plans",
            date: "02-01-2024",
            read: false
        },
        {
            text: "Reminder you have leads to contact",
            date: "02-01-2024",
            read: true
        }
    ])
    return (
        <Card className='pt-6'>
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <div className='relative p-2 cursor-pointer'>
                        <div className={`absolute -top-2 -right-1 h-4 w-4 rounded-full ${notification.find((x: any) => x.read === true) ? 'bg-primary' : 'bg-neutral-50'} `}>
                        </div>

                        <BellIcon className='h-5 w-5' />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className='border border-neutral-300 z-40'>
                    {
                        notification.map((item: any, index: number) => (
                            <DropdownMenuItem key={index} className='py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2 border-neutral-300'>
                                <div className={`h-3 w-3 rounded-full my-1 ${!item.read ? 'bg-primary' : 'bg-neutral-50'} `}>
                                </div>

                                <div>
                                    <p className='font-semibold'>{item.text}</p>
                                    <p className='text-xs text-neutral-500'>{item.date}</p>
                                </div>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu >
        </Card>
    )
}

export default UserNotification

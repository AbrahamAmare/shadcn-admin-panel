'use client'

import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card } from '../ui/card'
import { Separator } from '@radix-ui/react-dropdown-menu'

const SignedUser = () => {
    return (
        <Card className='pt-4 rounded '>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className='flex gap-4 items-center cursor-pointer'>
                        <p className='text-neutral-500'>Jane Doe</p>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="Use Profile Image" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 outline outline-primary border-neutral-300">
                    <p className='font-semibold text-center'>Profile Settings</p>
                    <ul className='space-y-2 p-2'>
                        <li className='cursor-pointer hover:bg-primary hover:text-primary-foreground p-1 rounded text-center'>
                            Profile
                        </li>
                        <li className='cursor-pointer hover:bg-primary hover:text-primary-foreground p-1 rounded text-center'>
                            Settings
                        </li>
                        <li className='cursor-pointer hover:bg-primary hover:text-primary-foreground p-1 rounded text-center'>
                            Sign Out
                        </li>
                    </ul>
                </DropdownMenuContent>
            </DropdownMenu>
        </Card>
    )
}

export default SignedUser

'use client'
import React, { useState } from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { CircleX, MenuIcon } from 'lucide-react'
import Brand from './shared/Brand'
import UserItem from './UserItem'
import MenuList from './MenuList'

const HeaderMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    return (
        <Drawer direction="left" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DrawerTrigger>
                <MenuIcon onClick={() => setIsMenuOpen(true)} />
            </DrawerTrigger>
            <DrawerContent>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center px-4'>
                        <Brand />
                        <CircleX size={36} onClick={() => setIsMenuOpen(false)} />
                    </div>
                    <div className='grow b-red-200 px-4 py-2' >
                        <MenuList />
                    </div>
                    <div className='align-bottom'>
                        <UserItem />
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default HeaderMobile

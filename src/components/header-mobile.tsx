'use client'
import React, { useEffect, useState } from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { CircleX, Menu, MenuIcon } from 'lucide-react'
import { Brand } from './shared/brand'
import UserItem from './user-item'
import MenuList from './menu-list'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from './ui/button'

const HeaderMobile = () => {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    // to fix issues with hydration
    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    if (!isMounted) {
        return null
    }


    return (
        <>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                    <Button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='block lg:hidden mr-2'
                        variant="ghost"
                        size="sm"
                    >
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center px-4'>
                            <Brand />
                        </div>
                        <div className='grow b-red-200 px-4 py-2' >
                            <MenuList />
                        </div>
                        <div className='align-bottom'>
                            <UserItem />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default HeaderMobile

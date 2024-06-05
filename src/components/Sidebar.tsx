import React from 'react'
import UserItem from './user-item'

import {
    Bell,
    GlobeLock,
    Inbox,
    MemoryStick,
    ReceiptText,
    Settings,
    User,
} from "lucide-react"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import MenuList from './menu-list'
import { Brand } from './shared/brand'

const Sidebar = () => {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    text: "Profile",
                    icon: <User />
                },
                {
                    link: "/",
                    text: "Billing",
                    icon: <ReceiptText />
                },
                {
                    link: "/",
                    text: "Inbox",
                    icon: <Inbox />
                },
                {
                    link: "/",
                    text: "Notifications",
                    icon: <Bell />
                },
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings",
                    icon: <Settings />
                },
                {
                    link: "/",
                    text: "Privacy",
                    icon: <GlobeLock />

                },
                {
                    link: "/",
                    text: "Logs",
                    icon: <MemoryStick />
                }
            ]
        }
    ]

    console.log(menuList[0].items)
    return (
        <div className='fixed top-0 left-0 hidden lg:flex lg:flex-col gap-4 w-72 min-w-72 h-screen min-h-screen shadow-lg border border-r border-r-slate-300 z-40'>
            <Brand />
            <div className='grow b-red-200 px-4 py-2 scrollbar-thin scrollbar-webkit overflow-y-auto'>
                <MenuList />
            </div>
            <UserItem />
        </div>
    )
}

export default Sidebar

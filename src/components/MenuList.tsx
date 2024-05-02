'use client'

import {
    Bell,
    ChevronDown,
    GlobeLock,
    Inbox,
    LayoutDashboard,
    MemoryStick,
    Percent,
    ReceiptText,
    ScanLine,
    Settings,
    User,
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ReactNode, useState } from "react"


const MenuList = () => {
    return (
        <ul className="space-y-2">
            {
                menuList.map((menu: MenuType, index: number) => (
                    <Menu menu={menu} key={index} />
                ))
            }
        </ul>
    )
}

export default MenuList

function Menu({ menu }: { menu: MenuType }) {
    return (
        <>
            <p className='text-neutral-500 pb-1 text-sm'>{menu.group}</p>
            <li className='px-8'>
                <MenuItemGroup menuItems={menu.items} />
            </li>
        </>
    )
}

function MenuItemGroup({ menuItems }: { menuItems: MenuItemType[] }) {

    return (
        menuItems.map((item: MenuItemType, index: number) => (
            <MenuItem menuItem={item} key={index} />
        ))
    )
}

function MenuItem({ menuItem }: { menuItem: MenuItemType }) {
    const pathname = usePathname()
    const router = useRouter()
    const [isMenuItemOptionOpen, setIsMenuItemOptionOpen] = useState<boolean>(false)

    const toggleMenuItemOption = () => {
        setIsMenuItemOptionOpen(!isMenuItemOptionOpen);
    };

    return (
        <>
            {
                menuItem.options ? (
                    <div onClick={toggleMenuItemOption}>
                        <div className={`${pathname === menuItem.link ? "active" : ''} flex justify-between gap-2 rounded hover:bg-primary hover:text-primary-foreground p-1 cursor-pointer transition-none ease-in-out delay-500`}>
                            <div className='flex items-center gap-4'>
                                <p className='font-semibold'>{menuItem.icon}</p>
                                <p className='font-semibold'>{menuItem.text}</p>
                            </div>
                            <div className='justify-end'>
                                <ChevronDown className={`${isMenuItemOptionOpen ? 'rotate-180' : ''} justify-self-end`} />
                            </div>
                        </div>

                        <div className="flex flex-col pl-10 pb-2">
                            {
                                isMenuItemOptionOpen && menuItem.options && menuItem.options.map((option: MenuItemOptionType, index: number) => (
                                    <Link className={`${pathname === option.link ? 'active-child' : ''} text-md cursor-pointer`}
                                        key={index} href={option.link}>
                                        {option.text}
                                    </Link>
                                ))
                            }
                        </div>
                    </div >
                ) : (
                    <Link href={menuItem.link} className={` ${pathname === menuItem.link ? "active" : ''} flex justify-between gap-2 rounded hover:bg-primary hover:text-primary-foreground p-1 cursor-pointer transition-none ease-in-out delay-500`}>
                        <div className='flex items-center gap-4'>
                            <p className='font-semibold'>{menuItem.icon}</p>
                            <p className='font-semibold'>{menuItem.text}</p>
                        </div>
                    </Link>
                )
            }
        </>
    )
}

function Item({ menuItem, children }: { menuItem: MenuItemType, children?: ReactNode }) {
    const pathname = usePathname()
    return (
        <Link href={menuItem.link} className={` ${pathname === menuItem.link ? "active" : ''} flex justify-between gap-2 rounded hover:bg-primary hover:text-primary-foreground p-1 cursor-pointer transition-none ease-in-out delay-500`}>
            <div className='flex items-center gap-4'>
                <p className='font-semibold'>{menuItem.icon}</p>
                <p className='font-semibold'>{menuItem.text}</p>
            </div>
            {children}
        </Link>
    )
}



type MenuType = {
    group?: string,
    items: MenuItemType[]
}

type MenuItemType = {
    text: string,
    link: string,
    icon: ReactNode,
    options?: MenuItemOptionType[]
}
type MenuItemOptionType = {
    link: string,
    text: string,
}

const menuList: MenuType[] = [
    {
        group: "General",
        items: [
            {
                link: "/",
                text: "Dashboard",
                icon: <LayoutDashboard size={20} />
            },
            {
                link: "/customers",
                text: "Customers",
                icon: <User size={20} />,
                options: [
                    {
                        link: "/new",
                        text: "New Customers"
                    },
                    {
                        link: "/customers/customer-orders",
                        text: "Customer Orders"
                    }
                ]
            },
            {
                link: "/orders",
                text: "Orders",
                icon: <ScanLine size={20} />,
                options: [
                    {
                        link: "/list",
                        text: "Orders List"
                    },
                    {
                        link: "/order-history",
                        text: "Order Analytics"
                    }
                ]
            },
            {
                link: "/sales",
                text: "Sales",
                icon: <Percent size={20} />,
                options: [
                    {
                        text: "Sales List",
                        link: "/sales-list"
                    },
                    {
                        text: "Sales Analytics",
                        link: "/sale-analytics"
                    },
                ]
            },
            {
                link: "/billing",
                text: "Billing",
                icon: <ReceiptText size={20} />
            },
            {
                link: "/inbox",
                text: "Inbox",
                icon: <Inbox size={20} />
            },
            {
                link: "/notifications",
                text: "Notifications",
                icon: <Bell size={20} />
            },
        ]
    },
    {
        group: "Settings",
        items: [
            {
                link: "/general-settings",
                text: "General Settings",
                icon: <Settings size={20} />
            },
            {
                link: "/privacy",
                text: "Privacy",
                icon: <GlobeLock size={20} />

            },
            {
                link: "/logs",
                text: "Logs",
                icon: <MemoryStick size={20} />,
                options: [
                    {
                        text: "Activity Logs",
                        link: "/activity-logs"
                    },
                    {
                        text: "Error Logs",
                        link: "/error-logs"
                    }
                ]
            }
        ]
    }
]

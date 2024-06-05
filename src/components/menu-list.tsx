'use client'

import { menuList } from "./menus"
import { MenuItemOptionType, MenuItemType, MenuType } from "@/types/menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MenuList = () => {
    return (
        <div className="space-y-2">
            {
                menuList.map((menu: MenuType, index: number) => (
                    <Menu menu={menu} key={index} />
                ))
            }
        </div>
    )
}

export default MenuList

function Menu({ menu }: { menu: MenuType }) {
    return (
        <>
            <p className='text-neutral-500 pb-1 text-sm'>{menu.group}</p>
            <div className='px-8'>
                <MenuItemGroup menuItems={menu.items} />
            </div>
        </>
    )
}

function MenuItemGroup({ menuItems }: { menuItems: MenuItemType[] }) {
    return (
        <div className="space-y-2">
            {
                menuItems.map((item: MenuItemType, index: number) => (
                    <MenuItem menuItem={item} key={index} />
                ))
            }
        </div>
    )
}
function MenuItem({ menuItem }: { menuItem: MenuItemType }) {
    const { text, link, icon, options } = menuItem
    const pathname = usePathname()

    return (
        <div>
            {
                menuItem.options ? (
                    <Accordion type="single" collapsible>
                        <AccordionItem value={text}>
                            <div className={`${pathname === link ? "active" : ''} rounded hover:bg-primary hover:text-primary-foreground p-1 cursor-pointer`}>
                                <AccordionTrigger>
                                    <div className='flex items-center gap-4'>
                                        <p className='font-semibold'>{icon}</p>
                                        <p className='font-semibold'>{text}</p>
                                    </div>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent>
                                <div className="flex flex-col pl-10 space-y-2">
                                    {
                                        options && options.map((option: MenuItemOptionType, index: number) => (
                                            <Link className={`${pathname === option.link ? 'active-child' : ''} text-md cursor-pointer hover:text-primary`}
                                                key={index} href={option.link}>
                                                {option.text}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ) : (
                    <Link href={menuItem.link} className={` ${pathname === link ? "active" : ''} flex justify-between gap-2 rounded hover:bg-primary hover:text-primary-foreground p-1 cursor-pointer`}>
                        <div className='flex items-center gap-4'>
                            <p className='font-semibold'>{icon}</p>
                            <p className='font-semibold'>{text}</p>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

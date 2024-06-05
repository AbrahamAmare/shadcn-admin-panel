'use client'

import { SearchCommand } from './shared/search-command'
import SignedUser from './shared/signed-user'

import UserNotification from './shared/user-notification'
import HeaderMobile from './header-mobile'


const Header = () => {
    return (
        <div className='fixed right-0 left-0 lg:left-72 border-b h-16 z-40 px-4 border border-r border-slate-300'>
            <div className='grid grid-cols-2 gap-4 items-center justify-between'>
                <SearchCommand />
                <div className="flex gap-4 items-center justify-start lg:justify-end h-16">
                    <UserNotification />
                    <SignedUser />
                </div>
                <div className='justify-self-end block lg:hidden'>
                    <HeaderMobile />
                </div>
            </div>
        </div>
    )
}

export default Header

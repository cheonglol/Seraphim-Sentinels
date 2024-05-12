import { PrimeIcons } from 'primereact/api'
import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem'
import React from 'react'
import { LoginSignupModalButton } from './LoginSignUpModalButton'

export const HeaderNav = () => {
    const menuItems: MenuItem[] = [
        {
            label: 'test (bro still work in progress lah, wait leh), i think i got so many pages? so much time? no bro.',
            icon: PrimeIcons.ARROW_DOWN,
            url: '/',
        },
    ]

    return (
        <div className="py-4 max-w-[90vw] m-auto">
            <Menubar
                start={
                    <a
                        className="m-2 font-mono text-blue-500 hover:font-semibold bg-white p-2 rounded-lg"
                        href="/"
                    >
                        🍃
                    </a>
                }
                end={<LoginSignupModalButton />}
                model={menuItems}
                className="p-4"
            />
        </div>
    )
}

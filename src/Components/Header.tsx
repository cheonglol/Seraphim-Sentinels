import { PrimeIcons } from 'primereact/api'
import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem'
import React from 'react'
import { LoginSignupModalButton } from './LoginSignUpModalButton'

export const Header = () => {
    const menuItems: MenuItem[] = [
        { label: 'test', icon: PrimeIcons.ARROW_DOWN, url: '/' },
    ]

    return (
        <div className="p-4">
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

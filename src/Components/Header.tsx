import { PrimeIcons } from 'primereact/api'
import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem'
import React from 'react'

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
                model={menuItems}
                className="p-4"
            />
        </div>
    )
}

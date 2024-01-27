import React from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'

interface Props {
    headerContent?: any | undefined
    mainContent: any
    footerContent?: any
}

export const BasicLayout = ({
    headerContent,
    mainContent,
    footerContent,
}: Props) => {
    const defaultHeader = <Header />
    const defaultFooter = <Footer />

    return (
        <>
            <header className="py-4">
                {!headerContent ? defaultHeader : headerContent}
            </header>
            <main className="py-8 px-[4vw] min-h-screen ">{mainContent}</main>
            <footer>{!footerContent ? defaultFooter : footerContent}</footer>
        </>
    )
}

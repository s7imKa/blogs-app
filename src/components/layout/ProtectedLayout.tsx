import React from 'react'
import { Header } from './Header/Header'

type ProtectedLayoutProps = {
    children: React.ReactNode
}

export const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

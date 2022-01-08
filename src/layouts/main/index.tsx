import Header from "../../components/Header";
import React from "react";

interface LayoutProps {
    children: React.ReactNode
}

export default function MainLayout({...props}: LayoutProps): JSX.Element{
    return (
        <>
            <Header />
            <main>{props.children}</main>
        </>
    )
}

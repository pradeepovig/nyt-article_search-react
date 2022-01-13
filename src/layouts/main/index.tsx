import Header from "../../components/Header";
import React from "react";

interface LayoutTypes {
    children: React.ReactNode
}

export default function MainLayout({ ...props }: LayoutTypes): JSX.Element{
    return (
        <>
            <Header aria-label="Header"/>
            <main aria-label="Main">{props.children}</main>
        </>
    );
}

import React from "react";
import Navbar from "./nav";
import Footer from "./footer";

export default function Layout ({ Children }) {
    return <>
        <Navbar/>
        {Children}

        <Footer/>
    </>
}
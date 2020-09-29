import React from "react";

export default function () {
    return (
        <nav>
            {/* <!-- My name (aka Brand Image) --> */}
            <div>
                <a className="navbarLogo" href="/">
                    <img id="logoImg" src="/images/freeLogo.svg" />
                </a>
            </div>
            <div>
                {/* <!-- Navbar links --> */}
                <ul className="navbarLinks">
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

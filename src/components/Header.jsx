import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container">
                
                <a className="logo" href="index.html">
                    <img id="logo-image" src="/images/logo.svg" alt="Silicon Inc." />
                </a>

                <nav className="nav-links">
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Contacts</a>
                </nav>

                <div className="dark-mode">
                    <div className="switch-text">Dark Mode</div>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="btn-account">
                    <a className="btn" href="#">
                        <i className="bi bi-person"></i> Sign In/Up
                    </a>
                </div>

                <button className="btn-mobilemenu">
                    <i className="bi bi-list"></i>
                </button>

            </div>
        </header>
    )
}

export default Header
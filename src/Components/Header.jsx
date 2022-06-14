import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg navbar-dark justify-content-end fixed-top">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="nßavbarNav">
        <ul className="navbar-nav">
            <li className="nav-item px-3">
                <a className="nav-link" href="#about">ABOUT</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" href="#skills">SKILLS</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" href="#experience">EXPERIENCE</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" href="#education">EDUCATION</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" href="#projects">PROJECTS</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" href="#leadership">LEADERSHIP</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" href="#contact">CONTACT</a>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default Header
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
        <div className="container text-center">
            <div className="h4 text-center mb-4">Contact me</div>
            <p>Drop me an email or connect via LinkedIn! I'd be glad to hear from you!</p>
            <a className="cc-email btn btn-link" href="mailto:johnkdunyo@gmail.com">
                <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
            </a>
            <a className="cc-github btn btn-link" href="https://github.com/johnkdunyo" target="_blank" rel="noreferrer">
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a className="cc-linkedin btn btn-link" href="https://www.linkedin.com/in/johnkdunyo" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            </a>
        </div>
        <div className="text-center text-muted">
            <span className="badge badge-light copyleft">&copy;</span>
            <span className="badge badge-light"> 2022 - Jon Dexter.</span>
        </div>
    </footer>
  )
}

export default Footer
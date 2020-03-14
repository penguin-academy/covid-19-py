import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer pt-10 pb-5 mt-auto bg-primary footer-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-brand">CovPY Auto Reporte</div>
            <div className="mb-3">Resguardando la salud paraguaya</div>
            <div className="icon-list-social mb-5">
              <a className="icon-list-social-link" href="/">
                <i className="fab fa-instagram" />
              </a>
              <a className="icon-list-social-link" href="/">
                <i className="fab fa-facebook" />
              </a>
              <a className="icon-list-social-link" href="/">
                <i className="fab fa-github" />
              </a>
              <a className="icon-list-social-link" href="/">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row align-items-center">
          <div className="col-md-6 small">
            Copyright © CovPY 2020 - made with
            <img
              src="/img/heart.svg"
              alt="Heart"
              style={{ padding: '0 10px', maxWidth: 45 }}
            />
            in Paraguay
          </div>
          <div className="col-md-6 text-md-right small">
            <Link to="/legal">Privacy · Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

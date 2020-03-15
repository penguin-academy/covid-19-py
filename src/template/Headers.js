import React from 'react'

const Headers = () => {
  return (
    <div>
      {/* Headers 1 */}
      <header>
        <div className="container">
          <nav className="navbar">
            <a href="https://www.froala.com">
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                height={30}
                alt="image"
              />
            </a>
          </nav>
        </div>
      </header>
      {/* Headers 2 */}
      <header>
        <div className="container text-center">
          <nav className="navbar">
            <a className="ml-auto mr-auto" href="https://www.froala.com">
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                height={30}
                alt="image"
              />
            </a>
          </nav>
        </div>
      </header>
      {/* Headers 3 */}
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav0"
              aria-controls="navbarNav0"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav0">
              <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 4 */}
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="https://www.froala.com">
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                height={30}
                alt="image"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav1"
              aria-controls="navbarNav1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav1">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    <i className="fab fa-slack" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    <i className="fab fa-github" />
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-outline-primary ml-md-3"
                href="https://www.froala.com"
              >
                Button
              </a>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 5 */}
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav2"
              aria-controls="navbarNav2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="col-4 col-md-2 text-right text-md-center order-lg-6">
              <a href="https://www.froala.com">
                <img
                  src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                  height={30}
                  alt="image"
                />
              </a>
            </div>
            <div
              className="collapse navbar-collapse col-12 col-md-5 order-lg-1"
              id="navbarNav2"
            >
              <ul className="navbar-nav col-5">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-slack" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Headers 6 */}
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="https://www.froala.com">
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                height={30}
                alt="image"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav3"
              aria-controls="navbarNav3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav3">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    About
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-outline-primary ml-md-3"
                href="https://www.froala.com"
              >
                Button
              </a>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 7 */}
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <div className="col-2 text-left">
              <a href="https://www.froala.com">
                <img
                  src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                  height={30}
                  alt="image"
                />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav4"
              aria-controls="navbarNav4"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center col-md-8"
              id="navbarNav4"
            >
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav col-2 justify-content-end d-none d-md-flex">
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-google" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Headers 8 */}
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="https://www.froala.com">
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                height={30}
                alt="image"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav5"
              aria-controls="navbarNav5"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav5">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-end ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Docs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Log In
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-primary ml-md-3"
                href="https://www.froala.com"
              >
                Button
              </a>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 9 */}
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <div className="col-2 text-left">
              <a href="https://www.froala.com">
                <img
                  src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                  height={30}
                  alt="image"
                />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse-1"
              aria-controls="navbarNav6"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-1">
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-1">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Log In <i className="fas fa-sign-in-alt" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 10 */}
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <div className="col-3 text-left">
              <a href="https://www.froala.com">
                <img
                  src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                  height={30}
                  alt="image"
                />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse-2"
              aria-controls="navbarNav7"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse navbar-collapse-2 justify-content-center col-md-6"
              id="navbarNav7"
            >
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse navbar-collapse-2">
              <ul className="navbar-nav ml-auto justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Log In
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-primary ml-md-3"
                href="https://www.froala.com"
              >
                Register
              </a>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 11 */}
      <header className="bg-dark">
        <div className="container">
          <nav className="navbar">
            <a href="https://www.froala.com">
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                height={30}
                alt="image"
              />
            </a>
          </nav>
        </div>
      </header>
      {/* Headers 12 */}
      <header className="bg-dark">
        <div className="container text-center">
          <nav className="navbar">
            <a className="ml-auto mr-auto" href="https://www.froala.com">
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                height={30}
                alt="image"
              />
            </a>
          </nav>
        </div>
      </header>
      {/* Headers 13 */}
      <header className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav8"
              aria-controls="navbarNav8"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav8">
              <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 14 */}
      <header className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="https://www.froala.com">
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                height={30}
                alt="image"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav9"
              aria-controls="navbarNav9"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav9">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    <i className="fab fa-slack" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    <i className="fab fa-github" />
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-outline-light ml-md-3"
                href="https://www.froala.com"
              >
                Button
              </a>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 15 */}
      <header className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav10"
              aria-controls="navbarNav10"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="col-4 col-sm-2 text-center order-lg-6">
              <a href="https://www.froala.com">
                <img
                  src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                  height={30}
                  alt="image"
                />
              </a>
            </div>
            <div
              className="collapse navbar-collapse col-12 col-md-5 order-lg-1"
              id="navbarNav10"
            >
              <ul className="navbar-nav col-5">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-slack" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Headers 16 */}
      <header className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="https://www.froala.com">
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                height={30}
                alt="image"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav11"
              aria-controls="navbarNav11"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav11">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    About
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-outline-light ml-md-3"
                href="https://www.froala.com"
              >
                Button
              </a>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 17 */}
      <header className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <div className="col-2 text-left">
              <a href="https://www.froala.com">
                <img
                  src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                  height={30}
                  alt="image"
                />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav12"
              aria-controls="navbarNav12"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center col-md-8"
              id="navbarNav12"
            >
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav col-2 justify-content-end d-none d-md-flex">
              <li className="nav-item active">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  <i className="fab fa-google" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Headers 18 */}
      <header className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="https://www.froala.com">
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                height={30}
                alt="image"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav13"
              aria-controls="navbarNav13"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav13">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-end ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Docs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Log In
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-light ml-md-3"
                href="https://www.froala.com"
              >
                Button
              </a>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 19 */}
      <header className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <div className="col-2 text-left">
              <a href="https://www.froala.com">
                <img
                  src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                  height={30}
                  alt="image"
                />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse-3"
              aria-controls="navbarNav14"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-3"
              id="navbarNav14"
            >
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Log In <i className="fas fa-sign-in-alt" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* Headers 20 */}
      <header className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <div className="col-3 text-left">
              <a href="https://www.froala.com">
                <img
                  src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/logo.png"
                  height={30}
                  alt="image"
                />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse-4"
              aria-controls="navbarNav15"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse navbar-collapse-4 justify-content-center col-md-6"
              id="navbarNav15"
            >
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.froala.com">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse navbar-collapse-4">
              <ul className="navbar-nav ml-auto justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.froala.com">
                    Log In
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-primary ml-md-3"
                href="https://www.froala.com"
              >
                Register
              </a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Headers

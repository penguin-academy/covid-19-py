import React from 'react'

const Home = ({ history }) => {
  const onGoToReportPage = () => {
    history.push('report')
  }

  return (
    <div>
      <div>
        <div className="main-container">
          <section
            className="cover cover-features imagebg space--lg"
            data-overlay={2}
          >
            <div className="background-image-holder">
              <img alt="background" src="img/landing-23.jpg" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-7">
                  <h1> Build stylish, lean sites with Stack </h1>
                  <p className="lead">
                    Stack offers a clean and contemporary look to suit a range
                    of purposes from corporate, tech startup, marketing site to
                    digital storefront.
                  </p>
                  <button
                    className="btn btn--primary type--uppercase"
                    onClick={onGoToReportPage}
                  >
                    <span className="btn__text">Autoreportarse</span>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="feature feature-2 boxed boxed--border bg--white">
                    <i className="icon icon-Clock-Back color--primary" />
                    <div className="feature__body">
                      <p>
                        Save time with a multitude of styled components designed
                        to showcase your content
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature feature-2 boxed boxed--border bg--white">
                    <i className="icon icon-Duplicate-Window color--primary" />
                    <div className="feature__body">
                      <p>
                        Construct mockups or production-ready pages in-browser
                        with Variant Page Builder
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature feature-2 boxed boxed--border bg--white">
                    <i className="icon icon-Life-Jacket color--primary" />
                    <div className="feature__body">
                      <p>
                        Take comfort in 6 months included support with a
                        dedicated support forum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="imageblock switchable feature-large">
            <div className="imageblock__content col-lg-6 col-md-4 pos-right">
              <div className="background-image-holder">
                <img alt="image" src="img/education-5.jpg" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-7">
                  <h2>Stack is design-driven</h2>
                  <p className="lead">
                    Stack offers a clean and contemporary to suit a range of
                    purposes from corporate, tech startup, marketing site to
                    digital storefront. Elements have been designed to showcase
                    content in a diverse yet consistent manner.
                  </p>
                  <p className="lead">
                    Multiple font and colour scheme options mean that
                    dramatically altering the look of your site is just clicks
                    away — Customizing your site in the included Variant Page
                    Builder makes experimenting with styles and content
                    arrangements dead simple.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="masonry">
                <div className="masonry__container row masonry--active">
                  <div className="col-md-4 masonry__item">
                    <div className="card card-2 text-center">
                      <div className="card__top">
                        <a href="#">
                          <img alt="Image" src="img/landing-8.jpg" />
                        </a>
                      </div>
                      <div className="card__body">
                        <h4>Photography 101</h4>
                        <span className="type--fade">
                          Understanding the fundamentals
                        </span>
                        <p>
                          Construct mockups or production-ready pages in-browser
                          with Variant Page Builder
                        </p>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <span className="h6 type--uppercase">Explore</span>
                          <a href="#">
                            <i className="material-icons">flip_to_front</i>
                          </a>
                        </div>
                        <div className="card__action">
                          <span className="h6 type--uppercase">Save</span>
                          <a href="#">
                            <i className="material-icons">favorite_border</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 masonry__item">
                    <div className="card card-2 text-center">
                      <div className="card__top">
                        <span className="label">New</span>
                        <a href="#">
                          <img alt="Image" src="img/landing-14.jpg" />
                        </a>
                      </div>
                      <div className="card__body">
                        <h4>Kiln Fired Pottery</h4>
                        <span className="type--fade">
                          Video Tutorial Series
                        </span>
                        <p>
                          Construct mockups or production-ready pages in-browser
                          with Variant Page Builder
                        </p>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <span className="h6 type--uppercase">Explore</span>
                          <a href="#">
                            <i className="material-icons">flip_to_front</i>
                          </a>
                        </div>
                        <div className="card__action">
                          <span className="h6 type--uppercase">Save</span>
                          <a href="#">
                            <i className="material-icons">favorite_border</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 masonry__item">
                    <div className="card card-2 text-center">
                      <div className="card__top">
                        <span className="label">New</span>
                        <a href="#">
                          <img alt="Image" src="img/landing-14.jpg" />
                        </a>
                      </div>
                      <div className="card__body">
                        <h4>Kiln Fired Pottery</h4>
                        <span className="type--fade">
                          Video Tutorial Series
                        </span>
                        <p>
                          Construct mockups or production-ready pages in-browser
                          with Variant Page Builder
                        </p>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <span className="h6 type--uppercase">Explore</span>
                          <a href="#">
                            <i className="material-icons">flip_to_front</i>
                          </a>
                        </div>
                        <div className="card__action">
                          <span className="h6 type--uppercase">Save</span>
                          <a href="#">
                            <i className="material-icons">favorite_border</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home

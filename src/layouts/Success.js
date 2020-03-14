import React from 'react'
import { Link } from 'react-router-dom'
import { Lottie } from '@crello/react-lottie'
import * as checkData from '../lottie/check.json'

const Success = ({ history }) => {
  return (
    <header className="page-header page-header-light bg-white">
      <div className="page-header-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 text-center">
              <Lottie
                width={'15rem'}
                height={'15rem'}
                config={{ animationData: checkData.default }}
                style={{ margin: '0 auto' }}
                speed="0.3"
              />

              <h1 className="page-header-title">Successfully sent!</h1>
              <p className="page-header-text">
                Thank you for your submission. What do you want to do next?
              </p>
              <div>
                <Link
                  className="btn btn-primary btn-marketing rounded-pill lift lift-sm"
                  to="/report"
                >
                  Make another submission
                </Link>
                <Link
                  className="btn btn-link btn-marketing rounded-pill"
                  to="/"
                >
                  Go to the start page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Success

import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Container100 = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #329ef7;
  background: linear-gradient(-220deg, #329ef7, #4158d0);
`
const Wrap100 = styled.div`
  width: 960px;
  background: #fff;
  border-radius: 5px;
`

const Form = () => {
  return (
    <section
      className="fdb-block"
      style={{
        backgroundImage:
          'url(https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/hero/red.svg)',
        padding: '5rem 0'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="fdb-box">
              <div className="row">
                <div className="col-12 col-md-6 m-md-auto d-none d-lg-block ml-lg-0 col-lg-5">
                  <img
                    alt="image"
                    className="img-fluid"
                    src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/draws/group-chat.svg"
                  />
                </div>
                <div className="col-12 col-md-10 col-lg-6 mt-4 mt-lg-0 ml-auto mr-auto ml-lg-auto text-left">
                  <div className="row">
                    <div className="col">
                      <h1>Subscribe</h1>
                      <p className="lead">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your email address"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="h4">
                        * Leave your email address to be notified first.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  // return (
  //   <Container100 className="page-wrapper">
  //     <Wrap100 className="card">
  //       <div className="card-body">
  //         <h1 className="card-title">Card title</h1>
  //       </div>
  //     </Wrap100>
  //   </Container100>
  // )
}

export default Form

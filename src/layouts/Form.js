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
  background: #9053c7;
  background: linear-gradient(-135deg, #c850c0, #4158d0);
`
const Wrap100 = styled.div`
  width: 960px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 130px 0px;
  @media (max-width: 768px) {
    padding: 100px 0px;
  }
`

/* 
  & > li:first-child .bubble:before,
  & > li:first-child .bubble:after {
    width: 50%;
    margin-left: 50%;
  }
  & > li:last-child .bubble:before,
  & > li:last-child .bubble:after {
    width: 50%;
    margin-right: 50%;
  }
*/
const StepIndicator = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 80%;
  text-transform: uppercase;
  margin-bottom: 1em;
  display: flex;
  width: 100%;
  position: relative;
  & > li {
    list-style: none;
    text-align: center;
    width: auto;
    padding: 0;
    margin: 0;
    position: relative;
    text-overflow: ellipsis;
    color: #bbb;
    display: block;
    flex: 1;
  }
  & > li:hover {
    color: #6f6f6f;
  }
  & > li .bubble {
    border-radius: 1000px;
    width: 50px;
    height: 50px;
    background-color: #bbb;
    display: block;
    margin: 0 auto 0.5em auto;
  }
  & > li .bubble:before,
  & > li .bubble:after {
    display: block;
    position: absolute;
    top: 24px;
    width: 100%;
    height: 2px;
    content: '';
    background-color: #bbb;
  }
  & > li .bubble:before {
    left: 0;
  }
  & > li .bubble:after {
    right: 0;
  }

  & > li.completed {
    color: #24c1e8;
  }
  & > li.completed .bubble {
    background-color: #24c1e8;
    color: #24c1e8;
  }
  & > li.completed .bubble:before,
  & > li.completed .bubble:after {
    background-color: #24c1e8;
  }
  & > li a:hover .bubble {
    background-color: #1d9ab9;
    color: #1d9ab9;
  }
  & > li a:hover .bubble:before,
  & > li a:hover .bubble:after {
    background-color: #1d9ab9;
  }

  @media (max-width: 400px) {
    & {
      font-size: 60%;
    }
    & > li .bubble {
      width: 22px;
      height: 22px;
    }
    & > li .bubble:before,
    & > li .bubble:after {
      top: 10px;
    }
  }
`

const Form = () => {
  return (
    <Container100>
      <Wrap100>
        <StepIndicator>
          <li className="completed">
            <a href="/">
              <span className="bubble" />
              Step 1
            </a>
          </li>
          <li className="completed">
            <a href="/">
              <span className="bubble" />
              Step 2
            </a>
          </li>
          <li>
            <a href="/">
              <span className="bubble" />
              Step 3
            </a>
          </li>
          <li>
            <a href="/">
              <span className="bubble" />
              Step 4
            </a>
          </li>
          <li>
            <a href="/">
              <span className="bubble" />
              Step 5
            </a>
          </li>
        </StepIndicator>
      </Wrap100>
    </Container100>
  )
}

export default Form

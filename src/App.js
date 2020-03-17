import React, { createContext, useState, useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './layouts/Home'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Form from './layouts/Form'
import Success from './layouts/Success'
import Legal from './layouts/Legal'

import firebase from 'firebase/app'
import firebaseConfig from '../src/constants/firebaseConfig'

firebase.initializeApp(firebaseConfig)

function App() {
  const [form, setForm] = useState({})

  const isEmpty = obj => {
    if (!obj) return true
    else return Object.keys(obj).length === 0 && obj.constructor === Object
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/report" exact>
            <Form onFinish={setForm} />
          </Route>
          <Route path="/success" exact>
            {isEmpty(form) ? <Redirect to="/" /> : <Success form={form} />}
          </Route>

          <Route path="/legal" exact component={Legal} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

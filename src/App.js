import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory
} from 'react-router-dom'

import Home from './layouts/Home'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Start from './layouts/Start'
import Form from './layouts/Form'
import Success from './layouts/Success'
import Legal from './layouts/Legal'
import About from './layouts/About'
import Quizz from './layouts/Quizz'

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
        <ScrollToTop>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/start" exact>
              <Start setFormState={setForm} />
            </Route>
            <Route path="/report" exact>
              {isEmpty(form) ? (
                <Redirect to="/start" />
              ) : (
                <Form setFormState={setForm} form={form} />
              )}
            </Route>
            <Route path="/success" exact>
              {isEmpty(form) ? (
                <Redirect to="/start" />
              ) : (
                <Success form={form} />
              )}
            </Route>

            <Route path="/legal" exact component={Legal} />
            <Route path="/about" exact component={About} />
            <Route path="/quizz" exact component={Quizz} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

function ScrollToTop({ children }) {
  const history = useHistory()
  useEffect(() => {
    const unlisten = history.listen(() => window.scrollTo(0, 0))
    return () => unlisten()
  }, [])

  return <>{children}</>
}

export default App

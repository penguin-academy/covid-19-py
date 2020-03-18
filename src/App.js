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
import Person from './layouts/Person'

import firebase from 'firebase/app'
import firebaseConfig from '../src/constants/firebaseConfig'

firebase.initializeApp(firebaseConfig)

function App() {
  const [form, setForm] = useState({ progress: 0 })
  const [formerProgress, setformerProgress] = useState(form.progress)

  useEffect(() => {
    if (form.progress !== formerProgress) {
      setformerProgress(form.progress)
      window.scrollTo(0, 0)
    }
  }, [form.progress])

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
            <Route path="/report" exact>
              <Protected level={0} current={form.progress}>
                <Start form={form} setFormState={setForm} />
              </Protected>
              <Protected level={1} current={form.progress}>
                <Form form={form} setFormState={setForm} />
              </Protected>
              <Protected level={2} current={form.progress}>
                <Person form={form} setFormState={setForm} />
              </Protected>
              <Protected level={3} current={form.progress}>
                <Success form={form} />
              </Protected>
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

const Protected = ({ level, current, children }) =>
  level === current ? children : ''

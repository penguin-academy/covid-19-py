import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory
} from 'react-router-dom'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Home from './layouts/Home'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Start from './layouts/Start'
import Form from './layouts/Form'
import Success from './layouts/Success'
import Legal from './layouts/Legal'
import About from './layouts/About'
import Quizz from './layouts/Quizz'

import { en } from "./i18n/en"
import { es } from "./i18n/es"

import firebase from 'firebase/app'
import firebaseConfig from '../src/constants/firebaseConfig'

firebase.initializeApp(firebaseConfig)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: 'translation',
    fallbackNS: 'translation',
    resources: {
      en,
      es,
    },
    lng: "en",
    fallbackLng: "es",
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false
    }
  })

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

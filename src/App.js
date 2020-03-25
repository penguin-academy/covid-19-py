import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

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
import Stats from './layouts/Stats'

import './App.css'

// import en from './i18n/en.json'
import es from './i18n/es.json'

import firebase from 'firebase/app'
import firebaseConfig from '../src/constants/firebaseConfig'

firebase.initializeApp(firebaseConfig)

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: 'translation',
    fallbackNS: 'translation',
    resources: {
      // en,
      es
    },
    fallbackLng: 'es',
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false
    }
  })

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
        <ScrollToTop formReset={setForm}>
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
            <Route path="/stats" exact component={Stats} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

function ScrollToTop({ children, formReset }) {
  const history = useHistory()
  useEffect(() => {
    const unlisten = history.listen(() => {
      formReset({ progress: 0 })
      window.scrollTo(0, 0)
    })
    return () => unlisten()
  }, [])

  return <>{children}</>
}

export default App

const Protected = ({ level, current, children }) =>
  level === current ? children : ''

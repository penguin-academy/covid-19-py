// @ts-check

import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import Home from './layouts/Home'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Start from './layouts/Start'
import Legal from './layouts/Legal'
import About from './layouts/About'

import './App.css'

// import en from './i18n/en.json'
import es from './i18n/es.json'
import gn from './i18n/gn.json'

import firebase from 'firebase/app'
import firebaseConfig from '../src/constants/firebaseConfig'

const Success = React.lazy(() => import('./layouts/Success'))
const Stats = React.lazy(() => import('./layouts/Stats'))
const Form = React.lazy(() => import('./layouts/Form'))
const Person = React.lazy(() => import('./layouts/Person'))
const Quizz = React.lazy(() => import('./layouts/Quizz'))

firebase.initializeApp(firebaseConfig)

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: 'translation',
    fallbackNS: 'translation',
    resources: {
      // en,
      es,
      gn
    },
    fallbackLng: 'es',
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false
    }
  })

function App() {
  const [form, setForm] = useState({ progress: 0 })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [form.progress])

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop formReset={setForm}>
          <NavigationBar />
          <React.Suspense fallback={<div />}>
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
          </React.Suspense>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

/** @type {React.FC<{ formReset(param: { progress: 0 }): void }>} */
const ScrollToTop = ({ children, formReset }) => {
  const history = useHistory()
  useEffect(() => {
    const unlisten = history.listen(() => {
      formReset({ progress: 0 })
      window.scrollTo(0, 0)
    })
    return () => unlisten()
  }, [history, formReset])

  return <>{children}</>
}

export default App

/** @type {React.FC<{ level: number; current: number }>} */
const Protected = ({ level, current, children }) => (
  <>{level === current ? children : ''}</>
)

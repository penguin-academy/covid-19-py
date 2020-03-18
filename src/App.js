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

import firebase from 'firebase/app'
import firebaseConfig from '../src/constants/firebaseConfig'

firebase.initializeApp(firebaseConfig)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          leadTitle: "Coronavirus Self-Reporting in Paraguay. Do you have any symptoms? Tell us about it and we'll help you out.",
          leadSecondary: "Do you have a fever? Dry coughing? Breathing problems? Any other symptoms? Fill out the form.",
          ctaCheckSymptoms: "Check my symptoms",
          alertTestTitle: "This is a Test",
          trialVersion: "test version",
          alertTestMessage: "This is not the final version of the app. This app is in the <1>{{trialVersion}}</1> stage while we adjust some final details. As soon as it's ready, all the contributors will be announcing it on the official channels. Thank you all for the support and for helping us improve this app!",
        }
      },
      es: {
        translation: {
          leadTitle: "Autoreporte de Coronavirus en Paraguay ¿Tenés síntomas? Decinos cuáles y te ayudamos",
          leadSecondary: "¿Fiebre? ¿Tos Seca? ¿Dificultad para respirar? ¿Otro síntoma? Completá el formulario.",
          ctaCheckSymptoms: "Revisar mis síntomas",
          alertTestTitle: "Versión de Prueba",
          trialVersion: "modo de prueba",
          alertTestMessage: "Esta no es la versión oficial de la app. Esta app se encuentra en <1>{{trialVersion}}</1> para ajustar los últimos detalles. Apenas esté lista, todos los colaboradores lo estaremos lanzando por nuestros canales oficiales. ¡Muchas gracias por ayudar a hacerla mejor!",
        }
      }
    },
    lng: "en",
    fallbackLng: "es",
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false
    }
  });

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

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './layouts/Home'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Report from './layouts/Report'
import Success from './layouts/Success'
import Legal from './layouts/Legal'

import firebase from 'firebase/app'
import firebaseConfig from './constants/firebaseConfig'

firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/report" exact component={Report} />
          <Route path="/success" exact component={Success} />
          <Route path="/legal" exact component={Legal} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

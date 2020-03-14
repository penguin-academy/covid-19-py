import React, { useReducer } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './layouts/Home'
import NavigationBar from './layouts/NavigationBar'
import Footer from './layouts/Footer'
import Report from './layouts/Report'

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
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

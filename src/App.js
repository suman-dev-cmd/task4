import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

import Navbar from "./components/Navbar"
import React, { Component } from 'react'
import NewsCom from "./components/NewsCom"

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NewsCom page={6} />
      </div>
    )
  }
}

export default App


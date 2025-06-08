import Navbar from "./components/Navbar"
import React, { Component } from 'react'
import NewsCom from "./components/NewsCom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: "general",
    };
  }
  
  setCat=(crtValue)=>{
    this.setState({currentCategory:crtValue});
  }
//{this.currentCategory}
render() {
    return (
      <div>
           
          <Navbar toggle={this.setCat} /> 
          <Routes>   
          <Route exact path="/" element={<NewsCom pageSize={6} country="us" key="home" category={this.state.currentCategory} />} />
          <Route exact path="/general" element={<NewsCom pageSize={6} country="us" key="general" category={this.state.currentCategory}/>} />
          <Route exact path="/business" element={<NewsCom pageSize={6} country="us" key="bussiness" category={this.state.currentCategory}/>} />
          <Route exact path="/health" element={<NewsCom pageSize={6} country="us" key="health" category={this.state.currentCategory} />} />
          <Route exact path="/science" element={<NewsCom pageSize={6} country="us" key="science" category={this.state.currentCategory} />} />
          <Route exact path="/sports" element={<NewsCom pageSize={6} country="us" key="sports" category={this.state.currentCategory} />} />
          <Route exact path="/technology" element={<NewsCom pageSize={6} country="us"key="technology" category={this.state.currentCategory} />} />
          </Routes>
        
      </div>
    )
  }
}

export default App


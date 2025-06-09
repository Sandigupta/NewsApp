import Navbar from "./components/Navbar"
import React, { Component } from 'react'
import NewsCom from "./components/NewsCom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCatogryCol:'#fff'
    };
  }
  
  // setCat=(crtValue)=>{
  //   this.setState({currenttoggle:crtValue});
  // }

  clickedtoggle = (color) => {
    this.setState({ currentCatogryCol: color === "#fff" ? "grey" : "#fff" });
  }
//{this.currenttoggle}
render() {
    return (
      <div>
           
          <Navbar toggle={this.clickedtoggle} bgColor={this.state.currentCatogryCol}/> 
          <Routes>   
          <Route exact path="/" element={<NewsCom pageSize={6} country="us" key="home" bgColor={this.state.currentCatogryCol} toggle={this.clickedtoggle} category="general" />} />
          <Route exact path="/general" element={<NewsCom pageSize={6} country="us" key="general" category="general" bgColor={this.state.currentCatogryCol} toggle={this.clickedtoggle}/>} />
          <Route exact path="/business" element={<NewsCom pageSize={6} country="us" key="bussiness" category="business" />} />
          <Route exact path="/health" element={<NewsCom pageSize={6} country="us" key="health" category="health"/>} />
          <Route exact path="/science" element={<NewsCom pageSize={6} country="us" key="science" category="science"/>} />
          <Route exact path="/sports" element={<NewsCom pageSize={6} country="us" key="sports" category="sports" />} />
          <Route exact path="/technology" element={<NewsCom pageSize={6} country="us" key="technology" category="technology" />} />
          <Route exact path="/entertainment" element={<NewsCom pageSize={6} country="us"key="entertainment" category="entertainment" />} />

          </Routes>
        
      </div>
    )
  }
}

export default App


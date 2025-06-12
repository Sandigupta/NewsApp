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
  apiKey = import.meta.env.API_KEY;

  // setCat=(crtValue)=>{
  //   this.setState({currenttoggle:crtValue});
  // }

  // clickedtoggle = (color) => {
  //   this.setState({ currentCatogryCol: color === "black" ? "grey" : "black" });
  // }
//{this.currenttoggle}
render() {
    return (
      <div>
           
          <Navbar toggle={this.clickedtoggle} bgColor={this.state.currentCatogryCol}/> 
          <Routes>   
          <Route exact path="/" element={<NewsCom pageSize={6} country="us" api apikey={this.apiKey}  key="home" bgColor={this.state.currentCatogryCol} toggle={this.clickedtoggle} category="general" />} />
          <Route exact path="/general" element={<NewsCom pageSize={6} country="us"  apikey={this.apiKey} key="general" category="general" bgColor={this.state.currentCatogryCol} toggle={this.clickedtoggle}/>} />
          <Route exact path="/business" element={<NewsCom pageSize={6} country="us"  apikey={this.apiKey} key="bussiness" category="business" />} />
          <Route exact path="/health" element={<NewsCom pageSize={6} country="us"  apikey={this.apiKey} key="health" category="health"/>} />
          <Route exact path="/science" element={<NewsCom pageSize={6} country="us"  apikey={this.apiKey} key="science" category="science"/>} />
          <Route exact path="/sports" element={<NewsCom pageSize={6} country="us"  apikey={this.apiKey} key="sports" category="sports" />} />
          <Route exact path="/technology" element={<NewsCom pageSize={6} country="us"  apikey={this.apiKey} key="technology" category="technology" />} />
          <Route exact path="/entertainment" element={<NewsCom pageSize={6} country="us" apikey={this.apiKey} key="entertainment" category="entertainment" />} />
          </Routes>
        
      </div>
    )
  }
}

export default App


import MetroTransitHeader from './MetroTransitHeader'
import MetroTransitContent from './MetroTransitContent'
import { Link } from "react-router-dom"
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
        <MetroTransitHeader/>
        <MetroTransitContent/>
      </div>
    );
  }
}

export default App;

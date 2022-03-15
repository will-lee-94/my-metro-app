import React from 'react';
import MetroTransitBusRoutes from './MetroTransitBusRoutes';


class MetroTransitContent extends React.Component {
  render(){
    return (
      <div>
        Bus Routes!
        <MetroTransitBusRoutes/>
      </div>
    );
  }
}

export default MetroTransitContent;

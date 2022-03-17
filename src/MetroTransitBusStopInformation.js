import React from 'react';
import MetroTransitConsumer from './api/MetroTransitConsumer.js'

class MetroTransitBusStopInformation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            departures: null
        }
        this.createStopInfoTable = this.createStopInfoTable.bind(this)
        this.MetroConsumer = new MetroTransitConsumer()
    }

    async componentDidMount(){
        console.log(this.props)
        var departures = await this.MetroConsumer.getDepartTimes(this.props.route_number, this.props.route_direction, this.props.stop)
        this.setState({departures: departures})
    }

    createStopInfoTable(){
        // Create Bus Stop Information/Departure Table
        var table = []
        if(this.state.departures !== null){
            table = this.state.departures.map(function(departures){
                
                return (
                    <table>
                        <tbody>
                            <tr key={"initialRow"}>
                                <th> Route </th>
                                <th> Destination </th>
                                <th> Departing </th>
                            </tr>
                        </tbody>
                    </table>
                )
            })
        }
        return table
    }

    setCurrentRouteNumber(route_description){
        for(var i = 0; i<this.state.busRoutes.length; i++){
            if(this.state.busRoutes[i]['Description']===route_description){
                this.setState({selectedRouteID: this.state.busRoutes[i]['Route']})
            }
        }
    }


    render(){
        return (
            <div>
                <br></br>
                <br></br>
                <h1>Bus Stop Information</h1>
                To-Do
                {/* <this.createStopInfoTable/> */}
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default MetroTransitBusStopInformation;

import React from 'react';
import MetroTransitConsumer from './api/MetroTransitConsumer.js'
import MetroTransitBusStopInformation from './MetroTransitBusStopInformation.js';

class MetroTransitBusStops extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            busStops: null,
            selectedBusStop: "Select stop",
            stopNumber: null
        }
        this.MetroConsumer = new MetroTransitConsumer()
        this.handleChange = this.handleChange.bind(this)
        this.getListOfBusStops = this.getListOfBusStops.bind(this)
        this.DisplayBusStopInfo = this.DisplayBusStopInfo.bind(this)
    }

    async componentDidMount(){
        var route_number = this.props.route_number
        var route_direction = this.props.route_direction
        if(route_number !== null && route_direction !== null){
            console.log('Calling Metro Consumer API for Bus Stops for Route: ' + route_number + ' going ' + route_direction)
            var busStops = await this.MetroConsumer.getBusStops(route_number, route_direction)
            this.setState({busStops: busStops})
        }
    }

    // When a user selects a Bus Direction in the dropdown fire an event!
    handleChange(event){
        var selected_index = event.target.selectedIndex - 1
        this.setState({selectedBusStop: event.target.value})

        if(selected_index>0){
            var stop_number = this.state.busStops[selected_index]['Value']
            this.setState({stopNumber: stop_number})
        }
    }

    // Create a dropdown list of Bus Directions for the given bus route number
    getListOfBusStops(){
        var busStops = []

        // Create Default Route
        var defaultOption = <option key={'Select stop'} value={'Select stop'}>Select stop</option>
        busStops.push(defaultOption)

        // Create Dynamic Bus Routes with map function
        if(this.state.busStops !== null){
            var allBusStops = this.state.busStops.map(function(bus_stop){
                var stopKey = "stop-" + bus_stop['Text']
                return (
                    <option key={stopKey} value={bus_stop["Text"]}>
                        {bus_stop["Text"]}
                    </option>
                )
            })
            busStops.push(allBusStops)
        }
        return busStops
    }

    DisplayBusStopInfo(){
        if(this.state.stopNumber !== null && this.state.selectedBusStop !== 'Select stop'){
            return <MetroTransitBusStopInformation 
                key={this.state.stopNumber}
                route_number={this.props.route_number}
                route_direction={this.props.route_direction}
                stop={this.state.stopNumber}
                
            />
        }
        else{
            return null
        }
    }

    render(){
        return (
            <div>
                <h1>Bus Stops</h1>
                <select value={this.state.selectedBusStop} onChange={this.handleChange}>
                    <this.getListOfBusStops/>
                </select>
                <this.DisplayBusStopInfo/>
            </div>
        );
    }
}

export default MetroTransitBusStops;

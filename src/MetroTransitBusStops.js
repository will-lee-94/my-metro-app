import React from 'react';
import MetroTransitConsumer from './api/MetroTransitConsumer.js'

class MetroTransitBusStops extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            busStops: null,
            selectedBusStop: "Select stop"
        }
        this.MetroConsumer = new MetroTransitConsumer()
        this.handleChange = this.handleChange.bind(this)
        this.getListOfBusStops = this.getListOfBusStops.bind(this)
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
        this.setState({selectedBusStop: event.target.value})
    }

    // Create a dropdown list of Bus Directions for the given bus route number
    getListOfBusStops(){
        var busStops = []

        // Create Default Route
        var defaultOption = <option value={'Select stop'}>Select stop</option>
        busStops.push(defaultOption)

        // Create Dynamic Bus Routes with map function
        if(this.state.busStops !== null){
            var allBusStops = this.state.busStops.map(function(bus_stop){
                return (
                    <option value={bus_stop["Text"]}>
                        {bus_stop["Text"]}
                    </option>
                )
            })
            busStops.push(allBusStops)
        }
        return busStops
    }

    render(){
        return (
            <div>
                <select value={this.state.selectedBusStop} onChange={this.handleChange}>
                    <this.getListOfBusStops/>
                </select>
            </div>
        );
    }
}

export default MetroTransitBusStops;

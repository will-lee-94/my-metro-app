import React from 'react';
import MetroTransitConsumer from './api/MetroTransitConsumer.js'
import MetroTransitBusStops from './MetroTransitBusStops.js'

class MetroTransitBusDirections extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            busDirections: null,
            selectedBusDirection: "Select direction",
            selectedBusDirectionVal: null
        }
        this.MetroConsumer = new MetroTransitConsumer()
        this.handleChange = this.handleChange.bind(this)
        this.getListOfBusDirections = this.getListOfBusDirections.bind(this)
        this.DisplayBusStops = this.DisplayBusStops.bind(this)
    }

    async componentDidMount(){
        var route_number = this.props.route_number
        if(route_number !== null){
            var busDirections = await this.MetroConsumer.getBusDirections(route_number)
            this.setState({busDirections: busDirections})
        }
    }

    // When a user selects a Bus Direction in the dropdown fire an event!
    // Need to set state of Bus Direction and the Bus Direction Value (0, 1, 2, 3)
    handleChange(event){
        var selected_index = event.target.selectedIndex - 1
        this.setState({selectedBusDirection: event.target.value})
        this.setState({selectedBusDirectionVal: selected_index})
    }

    // Create a dropdown list of Bus Directions for the given bus route number
    getListOfBusDirections(){
        var busDirections = []

        // Create Default Route
        var defaultOption = <option value={'Select direction'}>Select direction</option>
        busDirections.push(defaultOption)

        // Create Dynamic Bus Routes with map function
        if(this.state.busDirections !== null){
            var directions = this.state.busDirections.map(function(direction){
                return (
                    <option value={direction["Text"]}>
                        {direction["Text"]}
                    </option>
                )
            })
            busDirections.push(directions)
        }
        return busDirections
    }

    DisplayBusStops(){
        if(this.props.route_number !== null && this.state.selectedBusDirectionVal !== null && this.props.route_number !== null && this.state.selectedBusDirectionVal !== -1){
            return <MetroTransitBusStops 
                route_number={this.props.route_number} 
                route_direction={this.state.selectedBusDirectionVal} 
                key={this.state.selectedBusDirection}
                />
        }
        else{
            return null
        }
    }

    render(){
        return (
            <div>
                <select value={this.state.selectedBusDirection} onChange={this.handleChange}>
                    <this.getListOfBusDirections/>
                </select>
                <br></br>
                <br></br>
                <this.DisplayBusStops/>
            </div>
        );
    }
}

export default MetroTransitBusDirections;

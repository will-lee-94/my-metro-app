import React from 'react';
import MetroTransitConsumer from './api/MetroTransitConsumer.js'
import MetroTransitBusDirections from './MetroTransitBusDirections.js';

class MetroTransitBusRoutes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            busRoutes: null,
            selectedRoute: "Select route",
            selectedRouteID: null
        }
        this.MetroConsumer = new MetroTransitConsumer()
        this.handleChange = this.handleChange.bind(this)
        this.getListOfRoutes = this.getListOfRoutes.bind(this)
        this.setCurrentRouteNumber = this.setCurrentRouteNumber.bind(this)
        this.DisplayBusDirections = this.DisplayBusDirections.bind(this)
    }

    async componentDidMount(){
        var bus_routes = await this.MetroConsumer.getBusRoutes()
        this.setState({busRoutes: bus_routes})
    }

    handleChange(event){
        this.setState({selectedRoute: event.target.value})
        this.setCurrentRouteNumber(event.target.value)
    }

    getListOfRoutes(){
        // Save All Bus Routes
        var allRoutes = []

        // Create Default Route
        var defaultOption = <option key={'Select route'} value={'Select route'}>Select route</option>
        allRoutes.push(defaultOption)

        // Create Dynamic Bus Routes with map function
        if(this.state.busRoutes !== null){
            var routeOptions = this.state.busRoutes.map(function(route){
                var routeKey = "route-" + route['Description']
                return (
                    <option key={routeKey} value={route['Description']}>
                        {route['Description']}
                    </option>
                )
            })
            allRoutes.push(routeOptions)
        }
        return allRoutes
    }

    setCurrentRouteNumber(route_description){
        for(var i = 0; i<this.state.busRoutes.length; i++){
            if(this.state.busRoutes[i]['Description']===route_description){
                this.setState({selectedRouteID: this.state.busRoutes[i]['Route']})
            }
        }
    }

    DisplayBusDirections(){
        if(this.state.selectedRouteID !== null && this.state.selectedRoute!=='Select route'){
            return <MetroTransitBusDirections route_number={this.state.selectedRouteID} key={this.state.selectedRouteID}/>
        }
        else{
            return null
        }
    }


    render(){
        return (
            <div>
                <h1>Bus Routes</h1>
                <select value={this.state.selectedRoute} onChange={this.handleChange}>
                    <this.getListOfRoutes/>
                </select>
                <br></br>
                <br></br>
                <this.DisplayBusDirections/>
            </div>
        );
    }
}

export default MetroTransitBusRoutes;

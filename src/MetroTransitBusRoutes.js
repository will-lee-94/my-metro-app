import React from 'react';
import MetroTransitConsumer from './api/MetroTransitConsumer.js'

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
        var allRoutes = []
        // Create Default Route
        var defaultOption = <option value={'Select route'}>Select route</option>
        allRoutes.push(defaultOption)

        // Create Dynamic Bus Routes with map function
        if(this.state.busRoutes !== null){
            var routeOptions = this.state.busRoutes.map(function(route){
                return (
                    <option value={route['Description']}>
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


    render(){
        return (
            <div>
                <select value={this.state.selectedRoute} onChange={this.handleChange}>
                    <this.getListOfRoutes/>
                </select>
                <button onClick={() => {console.log(this.state.selectedRouteID)}}>Get Current Route!</button>
            </div>
        );
    }
}

export default MetroTransitBusRoutes;

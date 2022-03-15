import React from 'react';


class MetroTransitBusRoutes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            busRoutes: null,
            selectedRoute: null
        }
        console.log('initializing state')
        console.log(this.state)
        this.handleChange = this.handleChange.bind(this)
        this.getBusRoutes = this.getBusRoutes.bind(this)
    }

    getBusRoutes(){
        return 'Bus Routes!!'
    }

    componentDidMount(){
        // TO-DO
        console.log('Get Bus Routes from API!')
        //this.setState({busRoutes: this.getBusRoutes()})
    }

    handleChange(event){
        console.log(event.target.value)
        this.setState({selectedRoute: event.target.value})
    }

    render(){
        return (
            <select value={this.state.selectedRoute} onChange={this.handleChange}>
                <option value='route1'>Bus Route 1</option>
                <option value='route2'>Bus Route 2</option>
            </select>
        );
    }
}

export default MetroTransitBusRoutes;

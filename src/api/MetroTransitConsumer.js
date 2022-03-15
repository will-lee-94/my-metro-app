const axios = require('axios')

class MetroTransitConsumer{
    constructor(){

    }

    async getBusRoutes(){
        try{
            var bus_routes = await axios.get('https://svc.metrotransit.org/NexTrip/Routes')
            return bus_routes.data
        }
        catch(err){
            console.log(err)
        }
    }

    async getBusDirections(route_id){
        try{
            var bus_routes = await axios.get('https://svc.metrotransit.org/NexTrip/Directions/' + route_id)
            return bus_routes.data
        }
        catch(err){
            console.log(err)
        }
    }
}


export default MetroTransitConsumer;
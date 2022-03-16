const axios = require('axios')

class MetroTransitConsumer{
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

    async getBusStops(route_id, direction){
        try{
            var bus_routes = await axios.get('https://svc.metrotransit.org/NexTrip/Stops/' + route_id + '/' + direction)
            return bus_routes.data
        }
        catch(err){
            console.log(err)
        }
    }
}


export default MetroTransitConsumer;
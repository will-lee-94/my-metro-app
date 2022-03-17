import React from 'react'
import MetroTransitConsumer from '../../api/MetroTransitConsumer.js'

it('Calls Metro Transit API - getBusRoutes',  async () => {
    // Setup
    var consumer = new MetroTransitConsumer()
    var routes = await consumer.getBusRoutes()
    expect(routes).toBeInstanceOf(Array)
    expect(routes[0]['Description']).toBe('METRO Blue Line')
    expect(routes[0]['Route']).toBe('901')
})

it('Calls Metro Transit API - getBusDirections',  async () => {
    // Setup
    var consumer = new MetroTransitConsumer()
    var route_id = '901'
    var bus_directions = await consumer.getBusDirections(route_id)
    expect(bus_directions).toBeInstanceOf(Array)
    expect(bus_directions[0]['Text']).toBe('Northbound')
    expect(bus_directions[0]['Value']).toBe('0')
})

it('Calls Metro Transit API - getBusStops - route 901 direction 0',  async () => {
    // Setup
    var consumer = new MetroTransitConsumer()
    var route_id = '901'
    var route_direction = '0'
    var bus_stops = await consumer.getBusStops(route_id, route_direction)
    expect(bus_stops).toBeInstanceOf(Array)
    expect(bus_stops[0]['Text']).toBe('Mall of America Station')
    expect(bus_stops[0]['Value']).toBe('MAAM')
})

it('Calls Metro Transit API - getBusStops - route 901 direction 1',  async () => {
    // Setup
    var consumer = new MetroTransitConsumer()
    var route_id = '901'
    var route_direction = '1'
    var bus_stops = await consumer.getBusStops(route_id, route_direction)
    expect(bus_stops).toBeInstanceOf(Array)
    expect(bus_stops[0]['Text']).toBe('Target Field Station Platform 2')
    expect(bus_stops[0]['Value']).toBe('TF2')
})

it('Calls Metro Transit API - getDepartures - route 901, direction 0, stop TF2',  async () => {
    // Setup
    var consumer = new MetroTransitConsumer()
    var route_id = '901'
    var route_direction = '1'
    var stop = 'TF2'
    var departures = await consumer.getDepartTimes(route_id, route_direction, stop)
    expect(departures).toBeInstanceOf(Array)
    console.log(departures)
    // expect(bus_stops[0]['Text']).toBe('Target Field Station Platform 2')
    // expect(bus_stops[0]['Value']).toBe('TF2')
})
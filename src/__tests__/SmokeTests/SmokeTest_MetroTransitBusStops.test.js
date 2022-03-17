import React from 'react'
import ReactDOM from 'react-dom'
import MetroTransitBusStops from '../../MetroTransitBusStops.js'

it('renders Metro Transit Bus Stops without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MetroTransitBusStops/>, div)
})
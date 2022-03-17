import React from 'react'
import ReactDOM from 'react-dom'
import MetroTransitBusStopInformation from '../../MetroTransitBusStopInformation.js'

it('renders Metro Transit Bus Stops without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MetroTransitBusStopInformation/>, div)
})
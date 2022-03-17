import React from 'react'
import ReactDOM from 'react-dom'
import MetroTransitBusDirections from '../../MetroTransitBusDirections.js'

it('renders Metro Transit Bus Directions without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MetroTransitBusDirections/>, div)
})
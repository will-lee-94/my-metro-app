import React from 'react'
import ReactDOM from 'react-dom'
import MetroTransitBusRoutes from '../../MetroTransitBusRoutes.js'

it('renders Metro Transit Bus Routes without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MetroTransitBusRoutes/>, div)
})
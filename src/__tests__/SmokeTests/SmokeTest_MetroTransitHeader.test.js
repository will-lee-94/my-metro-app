import React from 'react'
import ReactDOM from 'react-dom'
import MetroTransitHeader from '../../MetroTransitHeader.js'

it('renders Metro Transit Header without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MetroTransitHeader/>, div)
})
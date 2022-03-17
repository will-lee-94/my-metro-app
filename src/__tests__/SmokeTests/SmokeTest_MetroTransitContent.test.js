import React from 'react'
import ReactDOM from 'react-dom'
import MetroTransitContent from '../../MetroTransitContent.js'

it('renders Metro Transit Content without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MetroTransitContent/>, div)
})
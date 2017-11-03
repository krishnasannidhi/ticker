import React from 'react'
import {render} from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import HomeContainer from './containers/HomeContainer'

const store=configureStore()
render(<Provider store={store}><HomeContainer/></Provider>,document.getElementById('ticker-container'))

import React from 'react'
import {render} from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import HomeContainer from './containers/HomeContainer'
//import test from './exp/importTest'

const store=configureStore()
render(<Provider store={store}><HomeContainer/></Provider>,document.getElementById('ticker-container'))
//render(<h1>{test()}</h1>,document.getElementById('ticker-container'))

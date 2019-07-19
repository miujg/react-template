import React from 'react'
import ReactDOM from 'react-dom'
import {Routers} from 'cons/index'
import {StoreContext, makeStore} from './store'

const store = makeStore()

ReactDOM.render((
  <StoreContext.Provider value={store}>
    <Routers />
  </StoreContext.Provider>
),document.getElementById('app'))
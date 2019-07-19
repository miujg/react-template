import './routers.scss'
import React from 'react'
import{Route, Switch, HashRouter} from 'react-router-dom'
import {Main} from 'cons/index'

export default function Routers(props:object) {
  
  return(
    <div className={'container'}>
      <HashRouter>
          <Switch>
            <Route path={'/'} component={Main} />
          </Switch>
        </HashRouter>
    </div>
  )
}
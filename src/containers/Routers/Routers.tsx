import './routers.scss'
import React from 'react'
import{Route, Switch, HashRouter} from 'react-router-dom'
import {User} from 'coms/index'

export default function Routers(props:object) {
  
  return(
    <div className={'container'}>
      <h1>router</h1>
      <HashRouter>
          <Switch>
            <Route path={'/'} component={User} />
          </Switch>
        </HashRouter>
    </div>
  )
}
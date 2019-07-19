import './main.scss'
import React, {useCallback} from 'react'
import {useMappedState, IState} from 'store'
import {Header, Bottom} from 'coms/index'

export default function Main(props:any) {
  return (
    <div className={'main'}>
        <div className={'top'}>
          <Header />
        </div>
        <div className={'bottom'}>
          <Bottom />
        </div>
    </div>
  )
}
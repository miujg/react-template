import React from 'react'
import {useMappedState, IState} from 'store'

export default function Header(props:any) {

  const user = useMappedState((state:IState) => state.user)
  const info = useMappedState((state:IState) => state.info)

  return(
    <div className={'header'}>
      <p>header</p>
      <span>{user.name} {info.sex}</span>
    </div>
  )
}
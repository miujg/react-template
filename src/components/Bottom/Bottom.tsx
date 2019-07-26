import React from 'react'
import {useDispatch} from 'store'

export default function Bottom(props:any){

  const dispatch = useDispatch()

  const handleChangeName = (e:any) => {
    dispatch({type: 'CHANGE_NAME', value: 'jgmiu1'})
  }

  const handleChangeSex = (e:any) => {
    dispatch({type: 'CHANGE_SEX', value: '女'})
  }

  return(
    <div className={'bottom'}>
      <p>buttom</p>
      <button onClick={handleChangeName}>change name</button>
      <button onClick={handleChangeSex}>change sex</button>
    </div>
  )
}
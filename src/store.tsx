import {createStore, Store} from 'redux'
import {reducers} from './redux/reducers'
import {userState, infoState} from './redux/interfaces'
import {create} from 'redux-react-hook'

export interface IState {
  user: userState
  info: infoState
}

interface Action {
  type: string,
  value: any
}

// store create
export function makeStore(): Store<IState, Action>{
  return createStore(reducers)
}

export const {StoreContext, useDispatch, useMappedState} = create<
  IState,
  Action,
  Store<IState, Action>
>()


interface infoState {
  sex: string
}

const INITIAL_STATE = {
  sex: '男'
}

type Action =
 | {
   type: 'CHANGE_SEX',
   value: string
 }

function info(state: infoState = INITIAL_STATE, action:Action) {
  switch(action.type){
    case 'CHANGE_SEX': {
      return {...state, sex: action.value}
    }
    
    default: return state
  }
}

export {
  info,
  infoState
}
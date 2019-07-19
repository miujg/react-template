
// userReducer state 结构定义
interface userState {
    name: string,
    age: number
}

// 初始值
const INITIAL_STATE = {
    name: 'jgmiu',
    age: 24
}

// action定义
type Action = 
  | {
        type: 'CHANGE_NAME',
        value: string
    }

function user(state: userState = INITIAL_STATE, action: Action){
    switch(action.type){
        case 'CHANGE_NAME': {
            return {
                ...state,
                name: action.value
            }
        }

        default: 
            return state
    }
}

export {
    user,
    userState
}
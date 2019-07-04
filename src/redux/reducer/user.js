import {CHANGE_NAME} from '../action/index'

const userReducer = (state = {name: 'jgmiu'}, action) => {
    switch(action.type) {
        case CHANGE_NAME: 
            return {...state, name: action.value}
        default:
            return state
    }
}

export default userReducer
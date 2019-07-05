/**
 * reduce 集合
 */
 
import  {combineReducers} from 'redux'
import userReducer from './user'

const reducers = combineReducers({userReducer})
export {
   reducers
}
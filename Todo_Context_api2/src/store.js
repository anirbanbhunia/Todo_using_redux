import {createStore, combineReducers} from 'redux'

//import reducers
import todoReducer from './reducers/todoReducer'

const reducer = combineReducers({todo:todoReducer})

const store = createStore(reducer)

export default store
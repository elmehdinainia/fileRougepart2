import {applyMiddleware, createStore} from 'redux'
import rooteReducer  from '../Reducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    rooteReducer,
    composeWithDevTools(applyMiddleware(thunk) )
   
)
export default store

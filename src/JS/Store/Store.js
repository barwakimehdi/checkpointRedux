import {createStore} from "redux"
import { reducerTask } from "../Reducers/ReducerTasks"



const store= createStore(reducerTask,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());


export default store
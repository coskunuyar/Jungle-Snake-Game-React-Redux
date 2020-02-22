import {SET_CORDINATES} from './actionCreators';
import { getRandomCoordinates } from './actionCreators';

const initialState = {
    foodCoordinates : getRandomCoordinates()
}

export default function foodReducer(state = initialState, action : any){
    let newState = {...state};
    switch(action.type){
        case SET_CORDINATES:
            newState.foodCoordinates = action.foodCoordinates;
            return newState;
        default:
            return newState
    }
}
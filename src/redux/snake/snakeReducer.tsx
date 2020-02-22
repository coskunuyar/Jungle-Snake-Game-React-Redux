import { UPDATE_DOTS , UPDATE_POINTS } from './actionCreators';

const initialState = { dots: [[2,0],[4,0],[6,0]] , points: 0 }
export default function snakeReducer(state = initialState , action: any){
    let newState = {...state};
    switch(action.type){
        case UPDATE_DOTS:
            newState.dots = action.dots;
            return newState;
        case UPDATE_POINTS:
            newState.points = action.points
            return newState;
        default:
            return newState;
    }
}
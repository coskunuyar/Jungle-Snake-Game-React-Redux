import { UPDATE_ANIMATION , STOP_GAME , RESUME_GAME} from './actionCreators';

const initialState = {
    animation : false,
    pause: false
}

export default function gameReducer(state = initialState, action : any){
    let newState = {...state};
    switch(action.type){
        case UPDATE_ANIMATION:
            newState.animation = action.animation;
            return newState;
        case STOP_GAME:
            newState.pause = true;
            return {...newState};
        case RESUME_GAME:
            newState.pause = false;
            return {...newState};
        default:
            return newState;
    }
}
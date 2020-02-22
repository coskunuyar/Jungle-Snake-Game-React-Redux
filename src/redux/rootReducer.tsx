import {combineReducers} from 'redux';
import foodReducer from './food/foodReducer';
import snakeReducer from './snake/snakeReducer';
import gameReducer from './game/gameReducer';

let rootReducer = combineReducers({ 
    foodState: foodReducer,
    snakeState: snakeReducer,
    gameState: gameReducer,
});

export default rootReducer;
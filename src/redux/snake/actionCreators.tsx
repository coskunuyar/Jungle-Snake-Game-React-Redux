export const UPDATE_DOTS = "UPDATE_DOTS";
export const UPDATE_POINTS = "UPDATE_POINTS";

export function updatePoints(newPoints: number){
    return { type: UPDATE_POINTS , points: newPoints}
}

export function updateSnake(dots: Array<Array<number>>){
    return { type: UPDATE_DOTS, dots }
}

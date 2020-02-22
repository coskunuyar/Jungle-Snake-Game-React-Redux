export const SET_CORDINATES = "SET_CORDINATES" ;

export const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    return [x,y]
}

export function setFoodCordinates(){
    return { type: SET_CORDINATES , foodCoordinates: getRandomCoordinates()}
}
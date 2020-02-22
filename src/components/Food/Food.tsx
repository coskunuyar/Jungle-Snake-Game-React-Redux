import React from 'react';
import { connect } from 'react-redux';
import './Food.css';


interface FoodProps{
    dot: Array<number>;
}

class Food extends React.Component<FoodProps,any>{
    render(){
        return(
            <div className="snake-food" style={{ left: `${this.props.dot[0]}%`, top: `${this.props.dot[1]}%`}}></div>
        );
    }
}

function mapStateToProps(reduxState : any){
    return {
        dot: reduxState.foodState.foodCoordinates
    }
}

export default connect(mapStateToProps, {})(Food)
import React from 'react';
import Snake from '../Snake/Snake';
import Food from '../Food/Food';
import { Component } from 'react';
import { connect } from 'react-redux';
import './GameArea.css';

interface GameAreaProps{
    animation: boolean,
    points: number
}

class GameArea extends Component<GameAreaProps,any>{
    render(){
        const { animation } = this.props; 
        return(
            <div className={"game-area game-border-"+ (animation ? 4 : (this.props.points%40)/10 )}>
            <Snake />
            <Food />
          </div>
        );
    }
}

function mapStateToProps(reduxState: any){
    return {
        points : reduxState.snakeState.points,
        animation: reduxState.gameState.animation
    }
}

export default connect(mapStateToProps,{})(GameArea);
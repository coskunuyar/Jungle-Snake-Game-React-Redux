import React from 'react';
import './Snake.css';
import { connect } from 'react-redux';

interface SnakeProps{
    snakeDots: Array<Array<number>>
}

class Snake extends React.Component<SnakeProps,any>{
    render(){
        return(
            <div>
                {this.props.snakeDots.map((dot: Array<number>, i: number) => {
                    const style = {
                        left: `${dot[0]}%`,
                        top: `${dot[1]}%`
                    }
                    return (
                        <div className="snake-dot" key={i} style={style}></div>
                    )
                })}
            </div>
        );
    }
}

function mapDispatchToProps(reduxState: any){
    return {
        snakeDots: reduxState.snakeState.dots
    }
}

export default connect(mapDispatchToProps, {})(Snake);

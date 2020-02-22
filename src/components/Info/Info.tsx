import React from 'react';
import { connect } from 'react-redux';
import './Info.css';


interface InfoProps{
    points: number;
}

class Info extends React.Component<InfoProps,any>{
    render(){
        const { points} = this.props;
        let resultArr = [];
        let stars = Math.floor(points / 40);
        for(let i=0; i<stars; i++){
            resultArr.push(<i className="fa fa-star star-yellow"></i>)
        }

        return(
            <div>
                <h3> Jungle Snake Game</h3> 
                <p>Developed By <a href="https://github.com/coskunuyar" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i> Coskun Uyar</a></p>
                <p>{Math.floor(points/40)} lvl.  {resultArr}/  {points} pts.</p>
            </div>
        )
    }
}

function mapStateToProps(reduxState: any){
    return {
        points: reduxState.snakeState.points
    }
}

export default connect(mapStateToProps,{})(Info);


import React,{Component} from 'react';
import './Progress.css';
import { connect } from 'react-redux';

interface ProgressProps{
    points: number
}

class Progress extends Component<ProgressProps,any>{
    render(){
        const { points } = this.props;
        let level = Math.floor(points / 40);
        let progressBar = (points - level * 40)/10;

        return(
           <div className="star-result">
               <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated"  
                          role="progressbar" 
                          style={{width: (progressBar * 25) + "%"}} />
            </div>
           </div>
        )
    }
}

function mapStateToProps(reduxState: any){
    return {
        points: reduxState.snakeState.points
    }
}

export default connect(mapStateToProps,{})(Progress);

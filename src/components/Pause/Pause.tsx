import React,{Component} from 'react';
import './Pause.css';
import { connect } from 'react-redux';
import { handlePauseToggle } from '../../redux/game/actionCreators';

interface PauseProps {
    pause: boolean,
    handlePauseToggle: ( pause: boolean) => void
}

class Pause extends Component<PauseProps,any>{
    render(){
        const { pause , handlePauseToggle } = this.props;
        return(
            <button className={pause ? "pause-button btn btn-sm btn-success" : "pause-button btn btn-sm btn-danger"} onClick={() => handlePauseToggle(pause)}>
                {pause ? <i className="fa fa-play" /> : <i className="fa fa-pause" />}
                <span className="pause-text">{pause ? "Resume" : "Pause"}</span>
            </button>
        )
    }
}

function mapStateToProps(reduxState: any){
    return({
        pause: reduxState.gameState.pause
    })
}

function mapDispatchToProps(){
    return {        
        handlePauseToggle
    };

}

export default connect(mapStateToProps,mapDispatchToProps())(Pause);

import React from 'react';
import Progress from '../Progress/Progress';
import Pause from '../Pause/Pause';
import Info from '../Info/Info';
import GameArea from '../GameArea/GameArea';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { Component } from 'react';
import { setFoodCordinates}  from '../../redux/food/actionCreators';
import { updatePoints} from '../../redux/snake/actionCreators';
import { updateSnake } from '../../redux/snake/actionCreators';
import { updateAnimation } from '../../redux/game/actionCreators';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

interface GameProps{
    pause: boolean,
    food: Array<number>,
    points: number,
    snakeDots: Array<Array<number>>,
    animation: boolean,
    setFoodCordinates: () => void,
    updatePoints: (point: number) => void,
    updateSnake: (snakeDots: Array<Array<number>> ) => void,
    updateAnimation: (animation: boolean) => void
}

interface GameState{
    speed: number,
    direction : "RIGHT" | "LEFT" | "UP" | "DOWN",
    gameInterVal: NodeJS.Timeout
}

class Game extends Component<GameProps,GameState> {
  constructor(props: GameProps){
    super(props)
    this.state = {
        speed: 70,
        direction: "RIGHT",
        gameInterVal: setInterval(() => console.log("Hello World!"),1000)
      };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.moveSnake = this.moveSnake.bind(this);
    this.controlSnakeBorders = this.controlSnakeBorders.bind(this);
    this.controlSnakeCollapsed = this.controlSnakeCollapsed.bind(this);
    this.checkLevelUpAnimation = this.checkLevelUpAnimation.bind(this);
    this.controlEat = this.controlEat.bind(this);
    this.onGameOver = this.onGameOver.bind(this);
    this.updateSpeed = this.updateSpeed.bind(this);
  }

  componentDidMount() {
    toast.success("⚔️ Welcome !!");
    this.updateSpeed(this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.controlSnakeBorders();
    this.controlSnakeCollapsed();
    this.controlEat();
  }

  onKeyDown = (e: KeyboardEvent) => {
    if(e.keyCode === 38 && this.state.direction !== 'DOWN'){
      this.setState({direction: 'UP'});
    }else if(e.keyCode === 40 && this.state.direction !== 'UP'){
      this.setState({direction: 'DOWN'});
    }else if(e.keyCode === 37 && this.state.direction !== 'RIGHT'){
      this.setState({direction: 'LEFT'});
    }else if(e.keyCode === 39 && this.state.direction !== 'LEFT'){
      this.setState({direction: 'RIGHT'});
    }
  }

  moveSnake(){
    if(this.props.pause) return
    let dots = [...this.props.snakeDots];
    let head = dots[dots.length - 1];

    if(this.state.direction === 'RIGHT'){
      head = [head[0] + 2, head[1]];
    }else if(this.state.direction === 'LEFT'){
      head = [head[0] - 2, head[1]];
    }else if(this.state.direction === 'DOWN'){
      head = [head[0], head[1] + 2];
    }else if(this.state.direction === 'UP'){
      head = [head[0], head[1] - 2];
    }
  
    dots.push(head);
    dots.shift();
    this.props.updateSnake(dots)
  }

  controlSnakeBorders() {
    let head = this.props.snakeDots[this.props.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  controlSnakeCollapsed() {
    let snake = [...this.props.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver();
      }
    })
  }

  checkLevelUpAnimation(points: number){
    if(points > 0 && (points % 40 === 0) ){
      this.props.updateAnimation(true);
      setTimeout(() => { this.props.updateAnimation(false);},1000);
    }else{
      this.props.updateAnimation(false);
    }
  }

  controlEat() {
    let head = this.props.snakeDots[this.props.snakeDots.length - 1];
    let food = this.props.food;
    let points = this.props.points + 10;

    if (head[0] === food[0] && head[1] === food[1]) {
      Math.floor(points / 40) > Math.floor(this.props.points / 40) && toast.warn("🧡🧡 Level Up !");
      this.props.setFoodCordinates();
      this.props.updatePoints( points );
      this.enlargeSnake();
      this.updateSpeed(this.state.speed-5);
      this.checkLevelUpAnimation(points);
    }
  }

  enlargeSnake() {
    let newSnake = [...this.props.snakeDots];
    newSnake.unshift([]);
    this.props.updateSnake(newSnake);
  }

  updateSpeed(nextSpeed: number){
    let gameInterVal = setInterval(this.moveSnake, nextSpeed);
    clearInterval(this.state.gameInterVal);
    this.setState({gameInterVal});
    this.setState({ speed: nextSpeed });
  }

  onGameOver() {
    toast.error("😭 Game Over");
    this.props.setFoodCordinates();
    this.props.updatePoints(0);
    this.props.updateSnake( [[0,0],[2,0],[4,0]]);
    this.props.updateAnimation(false);
    this.updateSpeed(70);
    this.setState({direction: "RIGHT"});
  }

  render() {
    return (
        <div style={{textAlign:"center"}}>
          <div className="info-tab">
            <Info/>
            <Progress />
            <Pause/>
          </div>
          <GameArea />
        </div>
    );
  }
}

function mapStateToProps(reduxState: any){
    return({
        pause: reduxState.gameState.pause,
        food: reduxState.foodState.foodCoordinates,
        points: reduxState.snakeState.points,
        snakeDots: reduxState.snakeState.dots,
        animation: reduxState.gameState.animation
    });
}

function mapDispatchToProps(){
    return {
        setFoodCordinates,
        updatePoints,
        updateSnake,
        updateAnimation
    };
}

export default connect(mapStateToProps,mapDispatchToProps())(Game);
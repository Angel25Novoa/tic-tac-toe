import './ScoreBoard.css';

//con parentesis react devuelve automáticamente un componente
const ScoreBoard = ({scoreX, scoreO}) => (
    <div className="score-board">
        <div>{scoreX}</div>
        <div>{scoreO}</div>
    </div>
)

export default ScoreBoard
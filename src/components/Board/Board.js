import Square from "../Square/Square";
import './Board.css';

const Board = ({squares, onClick, turn, winningSquares}) => {

    const createSquares = values => (
        //Esta función va a devolver un mapeo 
        //Un mapeo toma cada uno de los elementos de un array y devuelve esos mismos elementos modificados
        values.map( value => (
            <Square
                //para animar el signo ganador
                winner={winningSquares.includes(value)}
                turn={turn}
                onClick= {() => onClick(value)}
                //Le pasamos el value a square para que sepa que tiene como contenido
                //La pregunta es de los squares que recibió el board cual es el value en la posición que se necesita
                //Esto ya integra el elemento al HTML
                value = {squares[value]}
                //Los mapeados siempre necesitan keys ya que así react trackea los cambios en esos elementos 
                key={`square_${value}`}
            />
        ))
    );
    //Regresa los valores renderizados de los cuadrados del tablero
    return(
        <div className="Board">
            <div className="row">
                {createSquares([0,1,2])}
            </div>
            <div className="row">
                {createSquares([3,4,5])}
            </div>
            <div className="row">
                {createSquares([6,7,8])}
            </div>
        </div>
    )
}

export default Board;
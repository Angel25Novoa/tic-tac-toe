import './App.css';
import { useState } from 'react' 
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App =() => {

  //Este array va a decidir los turnos uno y uno
  const [turn, setTurn] = useState('X')
  //Este array va a decidir el estado de los cuadrados para darles un valor 'X' || 'O'
  const [squares, setSquares] = useState(Array(9).fill(null))
  //Este array va a almacenar la posición ganadora
  const[winningSquares, setWinningSquares] = useState([])
  //Este objeto sumará los puntos del ganador
  const [score, setScore] = useState({
    X:0,
    O:0
  })

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  }

  const checkForWinner = newSquares => {
    for(let i = 0; i < winningPositions.length; i++) {
      const [a,b,c] = winningPositions[i];
      if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
      //hay un ganador
      endGame(newSquares[a], winningPositions[i]);
      return
      }
    }
    if (!newSquares.includes(null)) {
      endGame(null, Array.from(Array(10).keys()));
      // Sería un empate
      return
    }
    //Se realiza la pregunta si turno es igual a X entonces cambia a O y visceversa
    setTurn(turn==='X' ? 'O': 'X');
  }

  //esta función se ejecuta cada que hay un click en un cuadrado
  const handleClick = square => {
    //recibe el value del cuadrado que se clickea
    //se realiza una copia de los cuadrados para asignar al estado una nueva variable
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares)
    checkForWinner(newSquares)
  }

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null) {
      setScore ({
        ...score,
        [result]: score[result] + 1,
      });
    }
    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);
  }

  //Esto llama a la función que renderiza el tablero con cuadrados
  return (
    <div className="container">
      <Board winningSquares={winningSquares} turn={turn} squares = {squares} onClick={handleClick} />
      <ScoreBoard scoreO={score.O} scoreX ={score.X} />
    </div>
  );
}

export default App;

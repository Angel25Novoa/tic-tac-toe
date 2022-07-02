import './Square.css'
import classNames from 'classnames'

const Square = ({value, onClick, turn, winner}) => {

    const handleClick = () => {
        //se pregunta si el value es null se ejecuta la función onClick
        (turn !== null &&value === null) && onClick();
    }

    let squareClass = classNames({
        //el cuadrado siempre deve tener este valor 
        square: true, 
        //aquí recive el value ya sea 'X' || 'O' y solo se agregará si value!== null
        [`square--${value}`]: value !== null,
        winner: winner,
    });

    return (
        //esto permite que cada cuadrado tenga la función onClick
        <div className={squareClass} onClick = {() => handleClick()}>
        </div>
        //se modifica el value dentro de square con un npm i -- save classnames
        //Esta librería facilita el trabajo con clases 
    )
}

export default Square
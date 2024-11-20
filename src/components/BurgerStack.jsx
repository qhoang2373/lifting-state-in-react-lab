import '../App.css';

const BurgerStack = (props) => {
    return (
        <ul>
          {stack.map((ingredient, index) => {
        return (
            <li key={index} style={{backgroundColor: ingredient.color}}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(ingredient)}>-</button>
        </li>    
     )
    })}
    </ul>
    )
    };
  export default BurgerStack;
  
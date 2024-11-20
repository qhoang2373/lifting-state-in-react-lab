
import '../App.css';

const IngredientList = (props) => {
    return <ul> 
        {props.inStockIngredients.map((inStockIngredient, index) => {
           return (
            <li key={index} 
            style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              
              <button onClick={() => addToBurger(ingredient)}>+</button>
            </li>
          );
        })}
      </ul>
  };
  
  export default IngredientList;
  
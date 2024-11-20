// IngredientList.jsx
import '../App.css';

const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((inStockIngredient, index) => (
        <li key={index} style={{ backgroundColor: inStockIngredient.color }}>
          {inStockIngredient.name}
          <button onClick={() => props.addToBurger(inStockIngredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
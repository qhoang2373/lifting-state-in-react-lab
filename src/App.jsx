import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from "./components/IngredientList";
import { useState } from 'react';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {

  const [burgerStack, setBurgerStack] = useState([]);
  // uses hook from React to manage the state of burgerStack

  const addToBurger = (newIngredient) => {
    const updatedBurgerStack = [...burgerStack, newIngredient];
    // creates a new array called using the spread operator "..."
    setBurgerStack(updatedBurgerStack);
  };
 // adds ingredients to the UI

  const removeFromBurger = (removedIngredient) => {
//  functon used to remove ingredients from the burger
    const updatedBurgerStack = burgerStack.filter(
      (ingredient) => ingredient.name !== removedIngredient.name
    );
    setBurgerStack(updatedBurgerStack);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList
          addToBurger={addToBurger}
          availableIngredients={availableIngredients}
        />
      <BurgerStack
          removeFromBurger={removeFromBurger}
          burgerStack={burgerStack}
          availableIngredients={availableIngredients}
        />
      </section>
    </main>
  );
};

export default App;
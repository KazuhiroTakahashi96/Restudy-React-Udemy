import Pizza from "./Pizza";
import pizzaData from "../data";

const Menu = () => {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.name} pizzaObj={pizza} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Menu;

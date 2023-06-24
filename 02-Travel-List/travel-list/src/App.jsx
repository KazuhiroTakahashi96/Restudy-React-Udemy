import { useState } from "react";
import Form from "./components/form";
import Logo from "./components/logo";
import PackingList from "./components/packingList";
import Stats from "./components/stats";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   const handlePrevious = () => {
//     if (step > 1) setStep((prev) => prev - 1);
//   };
//   const handleNext = () => {
//     if (step < 3) setStep((prev) => prev + 1);
//   };

//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
//         &times;
//       </button>

//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <p className="message">
//             Step {step}: {messages[step - 1]}
//           </p>

//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={() => handleNext()}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

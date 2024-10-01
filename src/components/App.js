import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packinglist";
import { Stats } from "./Stats";

/*const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 19, packed: true },
];*/

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItems) => {
    setItems((curItems) => [...curItems, newItems]);
  };

  const handleDeleteItem = (id) => {
    setItems((curItems) => curItems.filter((item) => item.id !== id));
  };

  const handleToggleItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirm = window.confirm("Are you sure You want to delete all item?");
    if (confirm) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

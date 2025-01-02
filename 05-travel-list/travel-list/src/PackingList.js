import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onCheckItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");
  
    let sortedItems;
  
    switch(sortBy) {
      case "description": sortedItems = [...items].sort((a, b) => a.description.localeCompare(b.description)); break;
      case "packed": sortedItems = [...items].sort((a, b) => a.packed - b.packed); break;
      case "number": sortedItems = [...items].sort((a, b) => a.quantity - b.quantity); break;
      default: sortedItems = items;
    }
  
    return (
      <div>
        <ul className="list">
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onCheckItem={onCheckItem}
            />
          ))}
        </ul>
        <div className="list actions">
          <div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="input">Sort by input order</option>
              <option value="description">Sort by description</option>
              <option value="packed">Sort by packed status</option>
              <option value="number">Sort by number of items</option>
            </select>
            <button onClick={() => onClearList()}>Clear list</button>
          </div>
        </div>
      </div>
    );
  }
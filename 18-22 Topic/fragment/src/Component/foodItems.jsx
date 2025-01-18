// Importing the useState hook from React
import { useState } from "react";

// Importing the Item component from the current directory
import Item from "./itme";

// Defining the FoodItems component which takes 'items' as a prop
const FoodItems = ({ items }) => {
  // Declaring a state variable 'activeItems' and a function 'setActiveItems' to update it
  let [activeItems, setActiveItems] = useState([]);

  // Function to handle the buy button click event
  // here item and  event is parameter
  let onBuyButton = (item, event) => {
    // Creating a new array with the current active items and the newly bought item
    let newItems = [...activeItems, item];
    // Updating the state with the new array
    setActiveItems(newItems);
  };

  // Returning a list of items
  return (
    <ul className="list-group">
      {/* // ye paarent vala arrayliya hai */}
      {items.map((item) => (
        // Rendering the Item component for each item in the 'items' array
        <Item
          key={item} // Setting a unique key for each item
          foodItem={item} // Passing the item as a prop to the Item component
          bought={activeItems.includes(item)} // Checking if the item is in the activeItems array
          handleBuyButton={(event) => onBuyButton(item, event)} // Passing the onBuyButton function as a prop
        ></Item>
      ))}
    </ul>
  );
};

// Exporting the FoodItems component as the default export
export default FoodItems;

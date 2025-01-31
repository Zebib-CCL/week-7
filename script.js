let inventories = [
  { Pname: "Chapstick", Quantity: 50, Price: 2.99 },
  { Pname: "Lotion",  Quantity: 25, Price: 10.99 },
  { Pname: "Boday Splash", Quantity: 20, Price: 21.99 },
  { Pname: "Perfume", Quantity: 30, Price: 160.99 },
];

//display all inventories
function displayInventories() {
  console.log("Inventory ist:");
  inventories.forEach((inventory, index) => {
    console.log(`${index + 1}.Pname: ${inventory.Pname}, Quantity: ${inventory.Quantity}, Price: ${inventory.Price}`);
  });
}
displayInventories();

// map
let mappedinventories = inventories.map((inventory) => 
  console.log(inventory)); 
  console.log(mappedinventories);
  
// filter
let Quantity = inventories.filter(item => item.Quantity > 20);
console.log(Quantity); 

//reduce
let totalValue = inventories.reduce((total, item) => total + (item.Quantity * item.Price), 0);
console.log(totalValue); 
 


// Get references to the button and the inventory display div
const button = document.getElementById("button");
const inventoriesDiv = document.getElementById("inventories");

//Flag to track whether the inventory list is currently visible
let isListVisible = false;

// Add event listener to the button
button.addEventListener("click", function() {
  if (isListVisible) {
      // If the list is visible, clear the content and hide it
      inventoriesDiv.innerHTML = "";
      isListVisible = false;
  } else {
      // If the list is not visible, display it
      const list = document.createElement("ul");

      // Loop through the inventory and add each item with its details
      inventories.forEach(item => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `${item.Pname}: 
                                <br>Quantity: ${item.Quantity} 
                                <br>Price: $${item.Price.toFixed(2)}
                                <hr>`;
          list.appendChild(listItem);
      });

      // Append the list to the inventories div
      inventoriesDiv.appendChild(list);
      isListVisible = true;
  }
});

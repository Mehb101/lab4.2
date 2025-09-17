let shoppingList = []

function addItem(item){
    if (!shoppingList.includes(item)){
    shoppingList.push(item);
    }
}

function removeLastItem(){
    shoppingList.pop();
}

function displayList(){
    console.log(shoppingList);
}

function filterItems(search){
    return shoppingList.filter(item => item.toLowerCase().includes(search.toLowerCase()));
}


addItem("mango");
addItem("banana");
addItem("kiwi");
removeLastItem();
displayList();
console.log(filterItems("mango"));

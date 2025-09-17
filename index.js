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


const input = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const rmvBtn = document.getElementById("remove-btn");
const listUL = document.getElementById("list");

console.log(input);
console.log(addBtn);
console.log(listUL);

function addAndDisplay(){
    shoppingList    .push(input.value);

    let li = document.createElement('li')
    li.textContent = input.value
    listUL.appendChild(li);
    input.value = "";

    console.log(shoppingList)
}

function rmv(){
    shoppingList.pop();
    listUL.lastElementChild.remove();
    console.log(shoppingList);
}

addBtn.addEventListener('click', addAndDisplay);
rmvBtn.addEventListener('click', rmv);

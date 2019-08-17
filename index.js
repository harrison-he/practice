const toDoItems = ["Example To Do", "Example To Do 2"];



const addToDoItem = event => {
    event.preventDefault();
    const value = event.target[0].value;
    if (value != "") {
        toDoItems.push(value);


        const node = document.createElement("LI");
        const createTextNode = document.createTextNode(value);
        node.appendChild(createTextNode);
        document.getElementById("toDoList").appendChild(node);
        document.getElementById("addToDo").value = "";
    }
   
}

const renderToDoItems = () => toDoItems.map(toDoItem => `<li>${toDoItem}</li>`).toString().replace(/,/g,"");

document.getElementById("toDoList").innerHTML = renderToDoItems();


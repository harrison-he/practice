const toDoItems = ["Example To Do", "Example To Do 2"];



const addToDoItem = event => {
    event.preventDefault();
    const value = event.target[0].value;
    if (value) {
        toDoItems.push(value);

        const node = document.createElement("LI");
        node.innerHTML = value;
        // const textNode = document.createTextNode(`${value} `);
        // node.appendChild(textNode);

        // const buttonNode = document.createElement("BUTTON");
        // const buttonTextNode = document.createTextNode("X");

        // buttonNode.appendChild(buttonTextNode);
        // node.appendChild(buttonNode);

        document.getElementById("toDoList").appendChild(node);
        document.getElementById("addToDo").value = "";
    }
   
}

const renderToDoItems = () => toDoItems.map(toDoItem => `<li>${toDoItem}</li>`).toString().replace(/,/g,"");

document.getElementById("toDoList").innerHTML = renderToDoItems();


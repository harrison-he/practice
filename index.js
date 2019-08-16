const toDoItems = ["Example To Do", "Example To Do 2"];



const addToDoItem = event => {
    event.preventDefault();
    toDoItems.push(event.target[0].value);
    document.getElementById("addToDo").value = "";
    document.getElementById("toDoList").innerHTML = renderToDoItems();
}

const renderToDoItems = () => toDoItems.map(toDoItem => `<li>${toDoItem}</li>`).toString().replace(/,/g,"");

document.getElementById("toDoList").innerHTML = renderToDoItems();


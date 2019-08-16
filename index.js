const toDoItems = ["Example To Do", "Example To Do 2"];



const addToDoItem = event => {
    event.preventDefault();
    toDoItems.push(event.target[0].value);
    document.getElementById("addToDo").value = "";
    document.getElementById("toDoList").innerHTML = renderToDoItems();
}

const renderToDoItems = () => toDoItems.map(toDoItem => `<li>${toDoItem}</li>`).toString().replace(/,/g,"");

const string = `
<h1>To Do List</h1>
<form onsubmit="addToDoItem(event)">
    <label for="addToDo">Enter To Do Item: </label>
    <input type="text" id="addToDo" name="addToDo" value="">
    <input type="submit" value="Add">
</form>
<ul id="toDoList">
    ${renderToDoItems()}
</ul>
`

document.getElementById("app").innerHTML = string;


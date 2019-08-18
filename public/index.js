const url = "https://polar-tor-22988.herokuapp.com";

const addToDoItem = async event => {
    event.preventDefault();
    const value = event.target[0].value;
    if (value) {
        document.getElementById("addToDo").value = "";

        try {
            await fetch(`${url}/api/toDo`, {
                method: "POST",
                body: value
            })

            const node = document.createElement("LI");
            node.innerHTML = value;

            document.getElementById("toDoList").appendChild(node);
        } catch (err) {
            console.log(err)
        }
    }

}

const renderToDoItems = async () => {
    let toDoItems = [];
    try {
        const response = await fetch(`${url}/api/toDo`)
        toDoItems = await response.json();

    } catch (err) {
        console.log(err)
    }
    return toDoItems.map(toDoItem => `<li>${toDoItem}</li>`).toString().replace(/,/g, "")
}
(async () => document.getElementById("toDoList").innerHTML = await renderToDoItems())()




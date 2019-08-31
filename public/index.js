const url = "https://polar-tor-22988.herokuapp.com/";

(async () => {
    const response = await fetch(`${url}/api/toDo`)
    const json = await response.json()
    document.querySelector("ul").innerHTML = json.map(todo => `<li>${todo.toDo}</li>`).toString().replace(/,/g,"")
})()

document.getElementById("to-do-form").addEventListener("submit", async event => {
    event.preventDefault()
    const response = await fetch(`${url}/api/toDo`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({toDo: event.target[0].value})
    })

    const json = await response.json()
    
    const li = document.createElement("li")

    li.innerText = json.toDo

    document.querySelector("ul").appendChild(li)
})


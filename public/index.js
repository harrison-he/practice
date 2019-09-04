const url = this.location.origin;

const deleteToDo = async event => {
    event.preventDefault()
    const response = await fetch(`${url}/api/toDo`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ toDo: event.target.id.replace("delete-","")})
    })
    document.querySelector("ul").removeChild(document.getElementById(event.target.id.replace("delete-","")))
}

(async () => {
    const response = await fetch(`${url}/api/toDo`)
    const json = await response.json()
    document.querySelector("ul").innerHTML = json.map(todo => `<li id=${todo._id}><button id="delete-${todo._id}" class="delete-btn">X</button> ${todo.toDo}</li>`).toString().replace(/,/g,"");
    [...document.getElementsByClassName("delete-btn")].forEach(element => element.addEventListener("click", deleteToDo));
})()

document.getElementById("to-do-form").addEventListener("submit", async event => {
    event.preventDefault()
    if (event.target[0].value) {
        const value = event.target[0].value
        document.getElementById("input").value = ""
        const response = await fetch(`${url}/api/toDo`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({toDo: value})
        })
        const json = await response.json()
        const li = document.createElement("li")
        li.id = json._id
        li.innerHTML = `<button id="delete-${json._id}" class="delete-btn">X</button> ${json.toDo}`
    
        document.querySelector("ul").appendChild(li)
        document.getElementById(`delete-${json._id}`).addEventListener("click",deleteToDo)
    }
    
})


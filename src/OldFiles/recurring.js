const url = this.location.origin;

(async () => {
    const recurringToDos = await fetch(`${url}/api/recurring`)
    const json = await recurringToDos.json()
    document.getElementById("recurring-table-body").innerHTML += json.map(item => `<tr><td>${item.recurringToDo}</td><td>${item.frequency}</td></tr>`).toString().replace(/,/g,"")
})()

document.getElementById("recurring-form").addEventListener("submit", async event => {
    event.preventDefault()

    if (event.target[0].value) {
        const recurringToDo = event.target[0].value
        const frequency = event.target[1].value

        document.getElementById("recurringInput").value = ""

        const response = await fetch(`${url}/api/recurring`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ recurringToDo, frequency })
        })
        const json = await response.json()

        const tr = document.createElement("tr")
        tr.innerHTML = `<td>${json.recurringToDo}</td><td>${json.frequency}</td>`
        document.getElementById("recurring-table-body").appendChild(tr)
    }
})

document.getElementById("add-recurring").addEventListener("click",  event => {
    event.preventDefault()
    const rows = document.getElementById("recurring-table-body").children;
   
    [...rows].forEach(async row => {
        const toDo = row.children[0].innerText;
        await fetch(`${url}/api/toDo`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ toDo })
        })
    });
})
// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users",{
        // evt.preventDefault()
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })

    .then(res => res.json())
    .then((newObj) => {
        console.log(newObj)
        document.body.innerHTML = newObj["id"]
    })
    .catch(error => {
        document.body.innerHTML = error.message
    })

}
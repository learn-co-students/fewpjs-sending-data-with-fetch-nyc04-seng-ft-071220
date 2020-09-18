// Add your code here
const submitData =(name,email) =>{
return fetch("http://localhost:3000/users", {
    method:"POST",
    headers:{ "content-type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify(
        {name,
        email}
    )
})
.then(res => res.json())
.then((obj) => {
    document.body.innerHTML = obj["id"]
}).catch((error) => {
    document.body.innerHTML = error.message
})
}
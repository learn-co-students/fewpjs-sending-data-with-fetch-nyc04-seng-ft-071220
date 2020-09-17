// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };




// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// })
//     .then(res=>res.json())
//     .then(dogObj=>{

//     });

// let theBody = document.querySelector("body");

function submitData(name, email){
    
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
    body: JSON.stringify({
        name: name,
        email: email
    })
    })
        .then(res => res.json())
        .then(userObj => {

            // let newUserP = document.createElement("p");
            // newUserP.innerText = userObj["id"];
            // theBody.append(newUserP);

            document.body.innerHTML = userObj["id"];
    })
        .catch(error =>{

            // let errorP = document.createElement("p");
            // errorP.innerText = error.message;
            // document.body.append(errorP);

            document.body.innerHTML = error.message;
        })
}


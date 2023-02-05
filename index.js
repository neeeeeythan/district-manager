fetch("users.json")

.then(function(response){

    return response.json();
})

.then(function(users){
    let placeholder= document.querySelector("#data-output");
    let out ="";
    
    for(let user of users){
        out += `
        <h4 class="user-name">${user.name}</h4>
        <p class="user-email">Email: ${user.email}</p>
        <p class="user-company">Company: ${user.company}</p>
        <p class="user-address">Address: ${user.address}</p>
        <p class="user-website">Website: ${user.website}</p>
        <p class="user-age">Age: ${user.age}</p>
        `;
    }

    placeholder.innerHTML = out;
})
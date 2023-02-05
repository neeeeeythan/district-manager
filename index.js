fetch("users.json")

.then(function(response){

    return response.json();
})

.then(function(users){
    let placeholder= document.querySelector("#data-output");
    let out ="";
    
    for(let user of users){
        out += `
                    <div class="col-lg-4 d-flex">
                        <div class="user-container d-flex">
                            <div class="col-lg-5">
                                <div class="user-image-container">
                                    <img src="/district-manager/assets/userphoto.png" alt="User Photo" class="userphoto">
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="user-info">
                                    <h4 class="user-name">${user.name}</h4>
                                    <p class="user-email">Email: ${user.email}</p>
                                    <p class="user-company">Company: ${user.company}</p>
                                    <p class="user-address">Address: ${user.address}</p>
                                    <p class="user-website">Website: ${user.website}</p>
                                    <p class="user-age">Age: ${user.age}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
    }

    placeholder.innerHTML = out;
})
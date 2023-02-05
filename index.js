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
                                    <p class="user-address">Address: ${user.address.zipcode} ${user.address.street} ${user.address.suite} ${user.address.city}</p>
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


window.onload = function countMe(){
   var divBy3, divBy5;
   for(var i=1; i<=100; i++){
    divBy3 = i % 3;
    divBy5 = i % 5;

    if (divBy3 !=0 && divBy5 !=0) {
        console.log(i + '\n');
    }

    if(divBy3 == 0){
        console.log("Foo \n")
    }
    else if(divBy5 == 0){
        console.log("Bar \n")
    }
   }

}


$(".convert-date").click(function(){
    var dateString = new Date($("#date").val());
    alert( dateString.getFullYear() + '/' + (dateString.getMonth() + 1) + '/' +  dateString.getDate());

});



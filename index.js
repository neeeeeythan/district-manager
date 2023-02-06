
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
                                    <p class="user-email">Email:<b> ${user.email}</b></p>
                                    <p class="user-company">Company: <b>${user.company}</b></p>
                                    <p class="user-address">Address: <b>${user.address.zipcode} ${user.address.street} ${user.address.suite} ${user.address.city}</b></p>
                                    <p class="user-website">Website: <b>${user.website}</b></p>
                                    <p class="user-age">Age: <b>${user.age}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
    }

    placeholder.innerHTML = out;

})

const filteredAges = [];
const ages = require('/district-manager/users.json');

function filterAge(e) {
  const {value} = e.target;
  const filter = e.target.value;
  if (filter === 'All' ) {
    filteredAges = ages;
    console.log("Age", filteredAges);
  } else if (target = 20 ) {
    filteredAges = ages.filter(x =>{
      if (x <= 20) {
        return x;
      }
    }).map(x=>x);
    console.log("Age", filteredAges);
  } else if (target = 21) {
    filteredAges = ages.filter(x =>{
      if (x > 20 && x <= 39) {
        return x;
      }
    }).map(x=>x);
    console.log("Age", filteredAges);
  } else if (target = 40) {
    filteredAges = ages.filter(x =>{
      if (x >= 40) {
        return x;
      }
    }).map(x=>x);
    console.log("Age", filteredAges);
  }
}


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



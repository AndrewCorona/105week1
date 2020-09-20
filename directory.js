console.log("directory.js");
function display(){
    //create the vars
    var pets=salon.pets;
    var text="";
    var petSection=document.getElementById("petSection");
    const dogIcon='<i class="fas fa-dog"></i>';
    const catIcon='<i class="fas fa-cat"></i>';
    const birdIcon='<i class="fas fa-crow"></i>';


    //travel the pets array
    for(var i=0;i<pets.length;i++){

      if (pets[i].petType === "Dog") {
        petIcon = dogIcon;
      }
    else if (pets[i].petType === "Cat") {
      petIcon = catIcon;
    }
    else if (pets[i].petType === "Bird") {
      petIcon = birdIcon;
    }
        console.log(pets[i]);
        //create the html text
        text+=`<div class="pet">
                <h2> ${pets[i].petName} </h2>                
                <p> Age: ${pets[i].petAge} </p>
                <p> Type: ${pets[i].petType},
                ${petIcon} </p>             
                <p> Breed: ${pets[i].petBreed} </p>
                <p> Gender: ${pets[i].petGender} </p>
                <p> Price: $${pets[i].petPrice} </p>
                <p> Service: ${pets[i].petService} </p>
                <p> Owner Name: ${pets[i].ownerName} </p>
                <p> Drop-off Date: ${pets[i].DropOff} </p>
                <p> Contact Phone: ${pets[i].contactPhone} </p>
                </div>`;
                console.log(text);
    

    }

    text +=`<div class="numberpets">
            <p> Number of pets: ${pets.length} </p>
            </div>`;



    
    //display the pets on the html
    petSection.innerHTML=text;
    
}







//show pet icon next to the type

//<div class="${petIcon}"/>


//challenge: display the number of registered pets somewhere on the html
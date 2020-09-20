//create an object literal for the pet salon (name,address,hours)
var salon={   
    salonname:`The Fashion Pet`,
    address:{
        street: `Av. University`,
        number:"215-B"
    },
    hours:{
        open:"8 a.m.",
        close:"5 p.m.",
    },
    pets:[]
}

class Pet{
    constructor(petName,petAge,petType,petBreed,petGender,petPrice,petService,ownerName,DropOff,contactPhone){
        this.petName=petName;
        this.petAge=petAge;
        this.petType=petType;
        this.petBreed=petBreed;
        this.petGender=petGender;
        this.petPrice=petPrice
        this.petService=petService;
        this.ownerName=ownerName;
        this.DropOff=DropOff;
        this.contactPhone=contactPhone;
    }
}

var scooby = new Pet("Scooby",50,"Dog","Dean","Male",130,"Full Service","Shaggy","September 18 2020","45678213");

var scrappy = new Pet("Scrappy",30,"Dog","Dean","Male",60,"Hair cut","Rudy-Doo","September 14 2020","30482104");

var garfield = new Pet("Garfield",45,"Cat","Tabby","Male",50,"Nail Clipping","Jon","September 20 2020","2439479102");
console.log(scooby);
//get the inputs and store them in variables
var txtName= document.getElementById('petName');
var txtAge= document.getElementById('petAge');
var txtType= document.getElementById('petType');
var txtBreed= document.getElementById('petBreed');
var txtGender= document.getElementById('petGender');
var txtPrice= document.getElementById('petPrice');
var txtService= document.getElementById('petService');
var txtownerName= document.getElementById('ownerName');
var txtDropOff= document.getElementById('DropOff');
var txtcontactPhone= document.getElementById('contactPhone');


function register(){
    //create thePet
    var thePet=new Pet(txtName.value,txtAge.value,txtType.value,txtBreed.value,txtGender.value,Number(txtPrice.value),txtService.value,txtownerName.value,txtDropOff.value,txtcontactPhone.value);
    console.log(thePet);
    //push thePet into the array
    salon.pets.push(thePet);
    display();
    profitcalc();
    clear();
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtType.value="";
    txtBreed.value="";
    txtGender.value="";
    txtPrice.value="";
    txtService.value="";
    txtownerName.value="";
    txtDropOff.value="";
    txtcontactPhone.value="";
}

function profitcalc(){
    var total = 0;
  for(var i=0;i<salon.pets.length;i++){
    total=total+salon.pets[i].petPrice;
  }
    document.getElementById("profits").innerHTML=`the total profits are: ${total}`;
  }  

function init(){

    //hook events
    console.log('Script');
    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(garfield);
    display();
    profitcalc();
    displayTable();
    $('#register-btn').on('click',register);
}

window.onload=init;

//homework; add services in services.html so that we can select them using jquery next class, like nail cut, wash, etc. just add pure html text. use a picture and some lorem text in multiple divs/classes.
//homework2; display all animals in a table in the index. like all the pet attributes into a listed table, can use bootstrap or style the css yourself.

/*
var tbody = $('#petChart tbody'),
    attributes = ["txtName", "txtAge", "txtType", "txtBreed", "txtGender", "txtPrice", "txtService", "txtownerName", "txtDropOff", "txtcontactPhone"];
$.each(salon.pets, function(i, salonpet) {
  var tr = $('<tr>');
  $.each(attributes, function(i, attribute) {
    $('<td>').html(salonpet[attribute]).appendTo(tr);  
  });
  tbody.append(tr);
});
*/

function displayTable(){
  let tbody=document.getElementById("petTable");
  let ChartPet;
  let table="";
  let row;
  for(var i=0;i<salon.pets.length;i++){
      ChartPet=salon.pets[i];
      row = `<tr id="${ChartPet.id}">
              <td>${ChartPet.petName}</td>
              <td>${ChartPet.petAge}</td>
              <td>${ChartPet.petType}</td>
              <td>${ChartPet.petBreed}</td>
              <td>${ChartPet.petGender}</td>
              <td>${ChartPet.petPrice}</td>
              <td>${ChartPet.petService}</td>
              <td>${ChartPet.ownerName}</td>
              <td>${ChartPet.DropOff}</td>
              <td>${ChartPet.contactPhone}</td>
          </tr>`;
          
      table+=row;
  }
  tbody.innerHTML=table;
  console.log(table);
  display();
}

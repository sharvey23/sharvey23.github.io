const container = document.getElementById("carContainer");
const noResults = document.getElementById("noResults");

function displayCars(cars){

container.innerHTML="";

cars.forEach(car=>{

let card=document.createElement("div");
card.className="card";

card.innerHTML=`

<h3>${car.year} ${car.make} ${car.model}</h3>

<p class="price">$${car.price}</p>

<p>Mileage: ${car.mileage}</p>

<p>Color: ${car.color}</p>

<p>${car.gasMileage}</p>

<button>View Details</button>

`;

container.appendChild(card);

});

}

function filterCars(){

let minYear=document.getElementById("minYear").value;
let maxYear=document.getElementById("maxYear").value;
let make=document.getElementById("make").value.toLowerCase();
let maxMileage=document.getElementById("maxMileage").value;
let minPrice=document.getElementById("minPrice").value;
let maxPrice=document.getElementById("maxPrice").value;
let color=document.getElementById("color").value.toLowerCase();

let filtered=usedCars.filter(car=>{

return(

(!minYear || car.year>=minYear) &&
(!maxYear || car.year<=maxYear) &&
(!make || car.make.toLowerCase().includes(make)) &&
(!maxMileage || car.mileage<=maxMileage) &&
(!minPrice || car.price>=minPrice) &&
(!maxPrice || car.price<=maxPrice) &&
(!color || car.color.toLowerCase().includes(color))

);

});

if(filtered.length===0){

container.innerHTML="";
noResults.innerText="No cars match your filter criteria. Please try again.";

}else{

noResults.innerText="";
displayCars(filtered);

}

}

document.getElementById("filterBtn").addEventListener("click",filterCars);

displayCars(usedCars);

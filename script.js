const container = document.getElementById("carContainer");
const noResults = document.getElementById("noResults");

function displayCars(cars){

container.innerHTML="";

cars.forEach(car=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML=`

<img src="${car.image}">

<div class="card-body">

<h3>${car.year} ${car.make} ${car.model}</h3>

<p class="price">$${car.price}</p>

<p>Mileage: ${car.mileage}</p>

<p>Color: ${car.color}</p>

</div>
`;

container.appendChild(card);

});

}


function filterCars(){

let minYear=document.getElementById("minYear").value;
let maxYear=document.getElementById("maxYear").value;
let maxMileage=document.getElementById("maxMileage").value;
let minPrice=document.getElementById("minPrice").value;
let maxPrice=document.getElementById("maxPrice").value;

let selectedMakes=[...document.querySelectorAll(".make:checked")].map(el=>el.value);
let selectedColors=[...document.querySelectorAll(".color:checked")].map(el=>el.value);


let filtered=usedCars.filter(car=>{

return (

(!minYear || car.year>=minYear) &&
(!maxYear || car.year<=maxYear) &&

(selectedMakes.length===0 || selectedMakes.includes(car.make)) &&

(!maxMileage || car.mileage<=maxMileage) &&

(!minPrice || car.price>=minPrice) &&
(!maxPrice || car.price<=maxPrice) &&

(selectedColors.length===0 || selectedColors.includes(car.color))

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


document.getElementById("applyFilters").addEventListener("click",filterCars);

displayCars(usedCars);

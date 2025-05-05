/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn =  document.getElementById("btn");
const input = document.getElementById("inter");
const lengths = document.getElementById("meter-feet");
const volume = document.getElementById("liters-Gallons");
const mass = document.getElementById("Kilograms-Pounds");



btn.addEventListener("click", ()=>{
    if(input.value!== ""){
        let nbr =  input.value.trim();
        lengths.innerHTML =  `${nbr} meters = ${(nbr* 3.281).toFixed(3)} feet | ${nbr} feet = ${(nbr/3.281).toFixed(3)} meters`;

        volume.innerHTML =  `${nbr} Liters = ${(nbr* 0.264).toFixed(3)} gallons | ${nbr} gallons = ${(nbr/0.264).toFixed(3)} Liters`;

        mass.innerHTML =  `${nbr} Kilos = ${(nbr* 2.204).toFixed(3)} pounds | ${nbr} pounds = ${(nbr/2.204).toFixed(3)} Kilos`;
    }else if(typeof input.value === "string" && isNaN(input.value)){
        alert("error the value in the input must be a number check it again");}
})
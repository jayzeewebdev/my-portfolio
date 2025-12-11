var dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "blue",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 5400
   };

//    alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
// document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
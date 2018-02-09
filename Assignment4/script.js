
function myTest() {
    document.getElementById("test").innerHTML = "It works!";
}
    

var zooAnimals = ["Jaguar", "Grizzly Bear", "Penguin", "Monkey", "Walrus"];
                  document.getElementById("zoo").innerHTML = zooAnimals;
function animalFunction() {
    zooAnimals.sort();
        document.getElementById("zoo").innerHTML = zooAnimals;
}
function enterAuto() 
{
    var text;
    var manufacturer = document.getElementById("myAutos").value;
    if (manufacturer =='ford') 
{
        greeting = ("Ford is the best!");
}
    else if (manufacturer =='Ford')
{
        greeting = ("Ford is the best!");
}
     else
{
    greeting = ("This is not the best!");
}
    document.getElementById("cars").innerHTML = greeting;
}

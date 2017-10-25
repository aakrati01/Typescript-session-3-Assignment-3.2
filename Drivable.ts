interface drivable{
    model : string;
    company : string;
}

function car (details : drivable){
    console.log( ` The car details are : Model ${ details.model} , 
    and made by ${details.company}`  )
 }
 
 let myCar : drivable = { model : "Wagon R", company : " Maruti "} 
 car(myCar);
   
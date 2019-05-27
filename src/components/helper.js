

export function changeSide(key,topping,toppings) {

    for(var i=0; i<toppings.length; i++){
        //console.log(toppings[i]);

        if( Object.values(toppings[i]).includes(key)){
            toppings[i].side = topping;
            return true;
        }
    }
  
}
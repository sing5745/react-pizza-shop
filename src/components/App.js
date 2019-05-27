import React from 'react';
import ChooseToppings from './ChooseToppings';
import Size from './Size';
import Topping from './Topping';
import  sampleToppings  from '../toppings';
import { changeSide } from './helper';

class App extends React.Component{

    state = {
        pizzaSize: null,
        toppings: []
    };

    selectPizzaSize = size => {

        this.setState({pizzaSize: size});

    };

    selectTopping = (key, topping) => {

        //console.log(key,topping);
        const toppings = this.state.toppings;

        //Changing the side if changed, otherwise push the topping 
        changeSide(key,topping,toppings) || toppings.push({topping: key, side: topping});

        
        this.setState({toppings});
    };

    

    displayToppings = (base) => {

        const toppings = this.state.toppings;

        let tops = []

        Object.keys(toppings).forEach(key => 

            {
             
             if(base){
                tops.push(<Topping key={key} topping={toppings[key].side}/>);
             } else{
                 alert('Select Pizza Size first');
                 return null;
             }
             
                
                
                
            }
        );
            
        return tops;      
    }

    render(){

        var base = null;
        if(this.state.pizzaSize){
            base = (
                <div>    
                    <p>Pizza Size: {this.state.pizzaSize}</p>
                    <img src="../images/base.png" width="300" height="300" alt="base"/>
                </div>
            );
        }

        return (

            <div className="container">

                <Size selectPizzaSize={this.selectPizzaSize}/>
                <br />
               
                <ChooseToppings toppingsAvailable={sampleToppings} selectTopping={this.selectTopping}/>

                
                {base}
                

                {this.displayToppings(base)}
                 

                
            </div>
        )
    };

}

export default App;
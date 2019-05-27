import React from 'react';

class Topping extends React.Component{

    render(){
        
        const src = '../images/' + this.props.topping + '.png';

        return (
            
            <img src={src} width="300" height="300" alt="base"/>
        )
    };

}

export default Topping;
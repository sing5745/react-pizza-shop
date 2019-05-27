import React from 'react';

class Size extends React.Component{


    render(){

        return (
            <div>
               <button className="small" onClick={() => this.props.selectPizzaSize('Small')}></button>
               <button className="med" onClick={() => this.props.selectPizzaSize('Medium')}></button>
               <button className="large" onClick={() => this.props.selectPizzaSize('Large')}></button>
               <button className="xl" onClick={() => this.props.selectPizzaSize('XLarge')}></button>
            </div>
        )
    };

}

export default Size;
import React from 'react';

class ChooseToppings extends React.Component{

    createTable = () => {

        const tops = this.props.toppingsAvailable;

        let rows = [];        
        Object.keys(tops).forEach(key => 
            
           {
               let cell = [];
             
               Object.values(tops[key]).forEach(k => {
                
                var textToDisplay = '';
                if(k.includes('left')){
                    textToDisplay = '1st half ' + key;
                }
                else if(k.includes('right')){
                    textToDisplay = '2nd half ' + key;
                }else{
                    textToDisplay = key;
                }

                cell.push(<td key={k}> <label className="inputContainer">{textToDisplay}<input type="radio"  onClick={() => this.props.selectTopping(key,k)} name={key} value={k}/><span className="checkmark"></span></label></td>);
                
              
               })
                 
               rows.push(<tr key={key}>{cell}</tr>);
        
            }
            
        );
        
      
        return rows;
      }

    render(){

        
        return (
            <div className="container">
                <table>
                    <tbody>
                     {this.createTable()}
                   </tbody>
                </table>
            </div>
        )
    };

}

export default ChooseToppings;
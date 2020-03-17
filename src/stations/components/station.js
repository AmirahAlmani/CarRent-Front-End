import React from 'react';

class Station extends React.Component {
    
    render(){
        return(
            <>
           
        <h2>{this.props.name}</h2>
        <p>{this.props.location}</p>
        
            </>
           
        );
    }
}

export default Station ;
import React from "react"; 
class Hornbeasts extends React.Component{
    render(){
        return(
            <>
            <h2>{this.props.title}</h2>
            <img src={this.props.imgUrl} />
            <p>{this.props.description}</p>
            </>    
        
        )

    }
}
export default Hornbeasts;
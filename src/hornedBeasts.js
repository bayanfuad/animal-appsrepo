import React from "react"; 
import Cards from "./cards";
class Hornbeasts extends React.Component{

    
    render(){
        return(
            <>
           <Cards title ={this.props.title} image_url= {this.props.imgUrl} description ={this.props.description}/>
            </>    
        
        )

    }
}
export default Hornbeasts;







    
//     // onClick={this.handleClick}
    
//     handleClick=()=>{
//         this.setState({clickCounter:this.state.clickCounter+1})
//     }
    
    
//         render(){
//             return(
//                 <>
//                 <h2>{this.props.title}</h2>
//                 <img src={this.props.imgUrl} />
//                 <p>{this.props.description}</p>
//                 </>    
            
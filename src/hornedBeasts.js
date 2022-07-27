import React from "react"; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Hornbeasts extends React.Component{

    constructor(props) {
            super(props);
            this.state = {
              clickCounter: 0,
            };
          }
        
          handleClick = () => {
            this.setState({
               clickCounter: this.state.clickCounter + 1 
            });
            this.props.displayModal(this.props.data);

        }



    
    render() {
        return(
            <>

           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imgUrl} alt={this.props.title} onClick={this.handleClick} />
      <Card.Body>
        <Card.Title> {this.props.title} ❤ {this.state.clickCounter}</Card.Title>
        <Card.Text>
      {this.props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
       
      </Card.Body>
    </Card>
            </>    
        
        )

    }
}

export default Hornbeasts;

// 

// constructor(props) {
//     super(props);
//     this.state = {
//       clickCounter: 0,
//     };
//   }

//   handleClick = () => {
//     this.setState({
//        clickCounter: this.state.clickCounter + 1,
//     });


//     onClick={this.handleClick}




    
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
            
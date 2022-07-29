import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
import data from './data.json'
import SelectedBeast from './SelectedBeast'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component  {
  constructor (props){
    super(props);
    this.state = {
      allBeast: data,
      selectedBeast:{},
      showModal:false,
     
    }

  }

  displayModal = (beast)=> {
    // console.log('pass');
    this.setState({ showModal:true,
      selectedBeast: beast
    });

}

handleClose = ()=>{
  this.setState({
    showModal:false
  });   
}

filterBeastByHornNumber = (e)=>{
const hornNumber = parseInt(e.target.value);
let filteredData = data;
if(hornNumber){
  filteredData= data.filter(item => item.horns === hornNumber); 
}
this.setState({allBeast : filteredData})
}




  render(){
  return (
    <div className="App">
      <Header/>
      <Main allBeast = {this.state.allBeast} displayModal= {this.displayModal}  filterBeastByHornNumber= {this.filterBeastByHornNumber}/>
      <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} selectedBeast ={this.state.selectedBeast}/>
      <Footer/>
    </div>
  );
}
}
export default App;

import React from "react"; 
import NavBar from './nav';
class Header extends React.Component{
    render(){
        return(
            <>
           <NavBar/>
            <h1>Horned Beasts</h1>
            </>
        )
    }
}
export default Header;
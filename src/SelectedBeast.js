import { render } from "@testing-library/react";
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeasts extends React.Component {
    // constructor (props)
    // super(props)
    // this.state{
    //     showImage : false,
    // }
render(){

return
handleShow = ()=>{ this.setstate({showImage :true})}

handleClose = ()=>{ this.setstate({showImage :false})}
    
  


    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={this.state.showImage} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        
      </Modal>
    </>
  
} 
};

export defult SelectedBeasts;
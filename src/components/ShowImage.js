import React from 'react';



import "./style.css";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import Button from 'react-bootstrap/lib/Button';
const ShowImage = props =>{
    return(
    <div >
    
    {props.results.map(result => (
        
        <Col xs={6} md={3}><Button id={result.id} onClick={()=>props.handleClickButton(result.id)}>
      <Image src={result.link} id={result.id} thumbnail responsive  /></Button>
    </Col>
    ))}

 </div>
        );
        
    };
    
        
           
export default ShowImage;
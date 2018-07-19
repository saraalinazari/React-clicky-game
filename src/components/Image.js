import React from 'react';
import "./style.css";

const Image = props =>(
    <div className='card'>
		
	    <div className='img-container'>
        <button>
	      <img className='img-container'
	        alt={props.title}
	        src={props.link}
	      /></button>
        </div>
        
	   
  </div>


);
export default Image;
    


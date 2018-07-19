import React,{Component} from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import characters from '../characters.json';
import ShowImage from './ShowImage';
import {Badge,Jumbotron,ProgressBar,Button,Navbar,Nav,MenuItem,NavDropdown,NavItem} from 'react-bootstrap/lib';
import '../../src/App.css'


class GameContainer extends  Component {
    state = {
        score: 0,
        results: [],
        id:0,
        message:"",
        topScore: 100

    };
    componentDidMount(){
        console.log("this.state.score",this.state.score);
        this.createRandom(12,7);

    }
    createRandom = (picCounts,charCounts) => {

        let array=[];
        for(let i =0;i<picCounts;i++){
            let randomId = Math.floor(Math.random() * parseInt(charCounts) );
            let tempobj = characters[randomId];
            console.log(tempobj)
            array.push(tempobj);
        }
         this.setState({results : array});
        
    };
    handleClickButton = id=>{
        const results = this.state.results;
        const cardClicked = results.filter(result => result.id === id);
        let message="";
        let score=0;
        console.log("id",id);
        console.log("cardClicked",cardClicked);
        this.setState({
            id

        });
        if(cardClicked[0].clicked){
            message = "Sorry, you lost";
            score = 0;
            results.map(result =>{
                result.clicked = false;
            }
            );
           
        }
        else{
            cardClicked[0].clicked = true;
            score = this.state.score+20;
             message = "";
            if(score>= this.topScore){
                message = "Nice Work, You Won, Start over!!!";
                score = 0;
                
            }
            else {
                message="You guessed right";


            }
            results.sort((a, b) => {
				return 0.5 - Math.random();
			});

            
        }
        console.log(parseInt(this.state.score));
        this.setState({results});
        this.setState({message});
        this.setState({score});
    }

   
    render(){
        return (
            
            <div>
           
                <div bsClass='navfont'>
                <Navbar inverse collapseOnSelect >
  <Navbar.Header>
    <Navbar.Brand >
      <a href="#brand">Clicky Game</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      {/* <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem> */}
      {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown> */}
      <Navbar.Text> 
          Click on the images to Start 
      <p>
                    {this.state.message}
                </p>
     
    </Navbar.Text>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Your Score
        <p>
        <ProgressBar bsStyle="success" now={this.state.score} />
        </p>
      </NavItem>
      <NavItem eventKey={2} href="#">
        Your Top Score
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>

           <Jumbotron bsClass='customJumbotron' >
  {/* <h1>Hello, world!</h1> */}
  {/* <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p> */}
  {/* <p>
    <Button bsStyle="primary">Learn more</Button>
  </p> */}
  {/* <p>
                <ProgressBar bsStyle="success" now={this.state.score} />
                </p> */}
</Jumbotron>
                <p>
                    {this.state.score}
                </p>
                <p>
                    {this.state.message}
                </p>
                <p>
                <ProgressBar bsStyle="success" now={this.state.score} />
                </p>
            {/* <p>
                id <Badge>{this.state.id}</Badge>
                id <Badge>{this.state.id}</Badge>
                
            </p> */}
            <ShowImage results={this.state.results} id={this.state.id} handleClickButton={this.handleClickButton}/>
            </div>
        );
    };
};

export default GameContainer;
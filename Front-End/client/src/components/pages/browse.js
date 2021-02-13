import React, { Component } from 'react';
import {Card, Container,Row,Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from './UserService.js';


class Browse extends Component {
    constructor(props){
        super(props)

        this.state = {
            foodAvaliable:[]
            
        }
        this.addFood = this.addFood.bind(this);
        this.updateFood = this.updateFood.bind(this);
        this.deleteFood = this.deleteFood.bind(this);
    }
    componentDidMount(){
        UserService.getFood().then((response)=>{
            this.setState({foodAvaliable:response.data})
        });
    }
    









    addFood(){
        this.props.history.push("add_food");
    }
    updateFood(id){
    this.props.history.push(`/update-food/${id}`);
    }
    pushtoCart(id){
        this.props.history.push(`/cart-food/${id}`);
        }

    deleteFood(id){
        UserService.deleteFood(id).then( res=> {
            this.setState({food: this.state.foodAvaliable.filter(food => food.id !==id)});
            this.props.history.push("/browse");
        });
    }
   
    render(){
  return (
    <div className= "browseList_background">
    <div className= "browseList">

<Container>


<Row>
{this.state.foodAvaliable.map(
    Food =>      
<Col md ={4}>
    <Card style={{ width: '20rem', height:'14rem'}}>
        <Card.Img variant="top" src=""   />
        <Card.Body>
        <Card.Title> <p>{Food.name}</p></Card.Title>
        <Card.Text><description>{Food.description}</description></Card.Text>
        <button onClick= { () => this.pushtoCart(Food.id)}>Add</button>
        <button onClick= { () => this.updateFood(Food.id)}>Update</button>
        <button onClick= { () => this.deleteFood(Food.id)}>Delete</button>
        
        </Card.Body>
    </Card>
</Col>
)}
</Row>




<button className = "btn btn-primary" onClick={this.addFood}>Add Food</button>



</Container>
</div>
</div>
  );
}
}


export default Browse;
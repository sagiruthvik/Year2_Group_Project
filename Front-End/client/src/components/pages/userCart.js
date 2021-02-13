import React, { Component } from 'react';
import {Card, Container,Row,Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from './UserService.js';


class Cart extends Component {
    constructor(props){
        super(props)

        this.state = {
            userCart:[]
            
        }

    }
    componentDidMount(){
        UserService.getCart().then((response)=>{
            this.setState({userCart:response.data})
        });
    }
    








   
    render(){
  return (
    <div className= "browseList_background">
    <div className= "browseList">

<h1 className = "text-center">Review Order</h1>
 <table className = "table table-striped">
     <thread>
         <tr>
         <td>Order Name</td>
         <td>Order type</td>
         </tr>
     </thread>
     <tbody>
               
     {this.state.userCart.map(
            userCart =>  
         <tr>
             <td>{userCart.name}</td>
             <td>{userCart.type}</td>
             <td><button>Remove</button></td>
         </tr> )}
     </tbody>
 </table>


</div>
</div>
  );
}
}


export default Cart;
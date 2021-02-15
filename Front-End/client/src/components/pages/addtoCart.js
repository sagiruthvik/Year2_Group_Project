import React, { Component } from 'react';
import {Card, Container,Row,Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from './UserService.js';

class addCart extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userid: '',
            name: '',
            type: ''



        }
        this.changefoodNameHandler = this.changefoodNameHandler.bind(this);
        this.changefoodTypeHandler = this.changefoodTypeHandler.bind(this);
        this.saveCart = this.saveCart.bind(this);
    }

    componentDidMount(){
        UserService.getFoodById(this.state.id).then( (res) =>{
            let userCart = res.data;
            this.setState({
                user_id:1,
                name: userCart.name,
                type: userCart.type,
            });
        });
    }










  saveCart =(e)=>{
    e.preventDefault();
    let userCart = {user_id: this.state.user_id,name: this.state.name,
      type: this.state.type,}
      console.log('userCart=> ' +JSON.stringify(userCart));

      UserService.addCart(userCart).then(res =>{
        this.props.history.push('/browse');
      });
  }





      cancel(){
          this.props.history.push('/browse');
      }
  

    changefoodNameHandler =(event) => {
        this.setState({name: event.target.value});
    }
    changefoodTypeHandler =(event) => {
        this.setState({type: event.target.value});
    }

    render(){
        return (
            <div>
                    <div className= "browseList_background"></div>
                    <div className= "browseList">
<form>
        <p>Food Name</p>
        <input type ="text" name="food name" placeholder="enter food name"
        value = {this.state.name} onChange = {this.changefoodNameHandler}></input>
        <p>Food type</p>
        <input type ="text" name="food type" placeholder="enter food type"
        value = {this.state.type} onChange = {this.changefoodTypeHandler}></input>
        <input type ="submit" name="" value="submit" variant = "success" onClick={this.saveCart}></input>
        <input type ="submit" name="" value="cancel" variant = "success" onClick={this.cancel.bind(this)}></input>
        </form>


                    </div>
                    
            </div>
        )
    }
}
export default addCart;
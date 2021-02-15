import React, { Component } from 'react';
import {Card, Container,Row,Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from './UserService.js';

class UpdateFood extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            type: ''



        }
        this.changefoodNameHandler = this.changefoodNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changefoodTypeHandler = this.changefoodTypeHandler.bind(this);
        this.updateFood = this.updateFood.bind(this);
    }
    componentDidMount(){
        UserService.getFoodById(this.state.id).then( (res) =>{
            let food = res.data;
            this.setState({name: food.name,
                type: food.type,
                description : food.description
            });
        });
    }

    updateFood = (e) => {
        e.preventDefault();
        let food = {name: this.state.name, type: this.state.type, description: this.state.description};
        console.log('food=> ' +JSON.stringify(food));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateFood(food, this.state.id).then( res => {
            this.props.history.push('/browse');
        });
    }

      cancel(){
          this.props.history.push('/browse');
      }
  

    changefoodNameHandler =(event) => {
        this.setState({name: event.target.value});
    }
    changeDescriptionHandler =(event) => {
        this.setState({description: event.target.value});
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
        <p>Description</p>
        <input type ="text" size ="70" name="description" placeholder="enter description"
        value = {this.state.description} onChange = {this.changeDescriptionHandler}></input>
        <input type ="submit" name="" value="submit" variant = "success" onClick={this.updateFood}></input>
        <input type ="submit" name="" value="cancel" variant = "success" onClick={this.cancel.bind(this)}></input>
        </form>


                    </div>
                    
            </div>
        )
    }
}
export default UpdateFood;
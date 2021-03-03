import React, { Component } from 'react';

import UserService from './UserService.js';

class addFood extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            type:'',
            description:''

        }
        this.changefoodNameHandler = this.changefoodNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changefoodTypeHandler = this.changefoodTypeHandler.bind(this);
        this.saveFood = this.saveFood.bind(this);
    }
    saveFood =(e)=>{
        e.preventDefault();
        let food = {name: this.state.name,
          type: this.state.type,
          description: this.state.description,}
          console.log('food=> ' +JSON.stringify(food));
  
          UserService.createFood(food).then(res =>{
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
        <button type ="submit" name="" value="submit" variant = "success" onClick={this.saveFood}>Confirm</button>
        <button type ="submit" name="" value="cancel" variant = "success" onClick={this.cancel.bind(this)}>Cancel</button>
        </form>


                    </div>
                    
            </div>
        )
    }
}
export default addFood;
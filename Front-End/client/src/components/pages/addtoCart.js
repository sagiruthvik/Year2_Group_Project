import React, { Component } from 'react';
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

        this.saveCart = this.saveCart.bind(this);
    }

    componentDidMount(){
        UserService.getFoodById(this.state.id).then( (res) =>{
            let userCart = res.data;
            this.setState({
                id:userCart.id,
                user_id:1,
                name: userCart.name,
                type: userCart.type,
            });
        });
    }

  saveCart =(e)=>{
    e.preventDefault();
    let userCart = {id:this.state.id,user_id: this.state.user_id,name: this.state.name,
      type: this.state.type,}
      console.log('userCart=> ' +JSON.stringify(userCart));

      UserService.addCart(userCart).then(res =>{
        this.props.history.push('/userCart');
      });
  }





      cancel(){
          this.props.history.push('/browse');
      }
  


    render(){
        return (
            <div>
                    <div className= "browseList_background"></div>
                    <div className= "browseList">
<form>
        <button type ="submit" name="" value="submit" variant = "success" onClick={this.saveCart}>Confirm</button>
        <button type ="submit" name="" value="cancel" variant = "success" onClick={this.cancel.bind(this)}>Cancel</button>
        </form>


                    </div>
                    
            </div>
        )
    }
}
export default addCart;
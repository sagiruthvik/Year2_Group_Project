import React, { Component } from 'react';
import UserService from './UserService.js';


class Cart extends Component {
    constructor(props){
        super(props)

        this.state = {
            userCart:[]
            
        }
        this.deleteCart = this.deleteCart.bind(this);
    }
    componentDidMount(){
        UserService.getCart().then((response)=>{
            this.setState({userCart:response.data})
        });
    }
    


    deleteCart(id){
        UserService.deleteCart(id).then( res=> {
            this.setState({cart: this.state.userCart.filter(cart => cart.id !==id)});
            this.props.history.push("/userCart");
        });
    }

    checkoutCart(){
        UserService.checkout().then( res=> {
            this.props.history.push("/userCart");
        });
    }


 





   
    render(){
  return (
    <div className= "browseList_background">
    <div className= "checkoutbox">

 <table className = "cart-table">
     <thread>
         <tr>
         <th>Order Name</th>
         <th>Order type</th>
         </tr>
     
     <tbody>
               
     {this.state.userCart.map(
            userCart =>  
         <tr>
             <th>{userCart.name}</th>
             <th>{userCart.type}</th>
             <th>        <button onClick= { () => this.deleteCart(userCart.id)}>Remove</button></th>
         </tr> )}
     </tbody>
     </thread>
 </table>


</div>
{this.state.userCart.map(
            userCart => 
<button className = "checkout_btn"onClick= { () => this.checkoutCart()}>Checkout</button>
)}
</div>
  );
}
}


export default Cart;
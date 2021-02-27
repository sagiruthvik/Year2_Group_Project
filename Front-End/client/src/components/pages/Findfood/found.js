import React from 'react'
import foundService from '../Findfood/foundService'


class found extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            restaurantes:[]
        }      
             
    }


    componentDidMount(){
        foundService.getRestaurantes().then((response) => {
            console.log(response.data)
           this.setState({restaurantes: response.data})
        });
       
    }

    render(){
        return(
            
            <div>
                   <h1>Test page </h1> 
                   <table>
                        <thead>

                            <tr>
                                <td>Restaurante Name</td>
                                <td>Description</td>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.restaurantes.map(
                                    restaurant =>
                                    <tr key ={restaurant.id}>
                                            <td>{restaurant.name}</td>
                                            <td>{restaurant.discription}</td>

                                    </tr>
                                )
                            }

                        </tbody>

                   </table>

            </div>

            
        )

    }

}

export default found
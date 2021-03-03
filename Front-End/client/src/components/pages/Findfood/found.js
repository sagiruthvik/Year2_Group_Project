import React from 'react'
import foundService from '../Findfood/foundService'
import img from '../Findfood/CardPic.jpg'
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
                        
            <div >
                <div >
                    <div >

                    </div>

                    <div>
                        {this.state.restaurantes.map(
                            restaurant =>
                            <div className = "Card-container">

                                <div className = "Card-image"><img src={img}></img> </div>

                                <div className = "Card-content">
                                    <div className = "Card-title"><h3>{restaurant.name}</h3></div>
                                    <div className = "Card-body"><p>{restaurant.description}</p></div>
                                </div>
                                
                                <div className = "Card-button">  
                                    <button> 
                                        <a>View more</a>
                                    </button>
                                </div>

                            </div>
                          
                            
                        )}

                    </div>
                </div>

            </div>
            

           










            
        )

    }

}

export default found
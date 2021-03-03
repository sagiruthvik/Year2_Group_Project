import React from 'react'
import foundService from '../Findfood/foundService'
import img from '../Findfood/CardPic.jpg'
import '../Findfood/found-card.css'
import '../Findfood/found-appearance.css'
import Footer from "../../Footer"
import img1 from '../../../img/notFound.jpg'
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
                        
            <div className = "found-bg" >
                <img className = "found-img-bg" src={img1}></img>
                 
                <div className = "found-title">
                        <h1>Restaurantes Found in your Area</h1>
                </div>
                   <div className = "Card-location">
                        {this.state.restaurantes.map(
                            restaurant  =>
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
                   {/* <div className = "found-footer"><Footer/></div>*/} 
                    
                    
            </div>
            
        )

    }

}

export default found
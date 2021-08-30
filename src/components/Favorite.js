import React, { Component } from 'react'
import axios from 'axios';
import FavCard from './FavCard';


export class Favorite extends Component {
constructor (props) {
    super(props);
    this.state = {
        dataCrud: [],
        showData: false,
        updatedata: {},
        showModal: false,
        
    }
}

componentDidMount = async () => {
    console.log("hello");
        const url= await axios.get("http://localhost:3002/getCoctail/fav")
    this.setState({
        dataCrud: url.data,
        showData: true
     
    }) 
      }

 deleteFavorite = async (id)=> {
     await axios.delete(`http://localhost:3002/getCoctail/fav/${id}`)
     const item =this.state.dataCrud.filter(i=>i._id !== id)
     this.setState({
         dataCrud: item,
     })
 }



    render() {
        return (
            <div>
                {this.state.showData &&
                 <FavCard
                 dataCrud={this.state.dataCrud}
                 deleteFavorite= {this.deleteFavorite}
                 />}
            </div>
        )
    }
}

export default Favorite

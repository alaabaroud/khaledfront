import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ApiCards from './ApiCards';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state ={
    ApiData: [],
    showData: false
    }
  }

  componentDidMount = async () => {
    const url= 
    await axios.get("http://localhost:3002/getCoctail")
this.setState({
  ApiData: url.data,
  showData: true
}) 
  }

  addToFav = async (idx) => {
    const url=await axios.post("http://localhost:3002/getCoctail/fav", idx)
    
  }

  render() {
    return (
      <>
        <h1>API Flowers</h1>
        {this.state.showData &&
         <ApiCards 
         ApiData = {this.state.ApiData}
         addToFav= {this.addToFav}
        />}
      </>
    )
  }
}

export default Home;

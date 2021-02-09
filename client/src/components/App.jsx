import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list : []
     }
  }

  componentDidMount(){
    this.getData()
  }

  getData(data){
    axios.get('/test', {params : { name : data }})
      .then(res=> {
        this.setState({ list : res.data })
        console.log("this.state.list", this.state.list)} )
      .catch(err=> console.log(err) )
  }

  postData(data){
    let info = {}
    axios.post('/test', info)
      .then(()=> this.getData() )
      .catch(err=> console.log(err) )
  }

  updateData(name){
    let info = {}
    axios.put(`/test/${name}`, info)
      .then(()=>this.getData())
      .catch(err=>console.log(err))
  }

  deleteData(name){
    let info = {}
    axios.delete(`/test/${name}`, info)
      .then(()=> this.getData() )
      .catch(err => console.log(err) )
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>
          Hello {name}
        </h1>
      </div>
    );
  }
}

export default App;

  import React from 'react';

  
  class NewChat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {connections: []};
    }
  
    // componentDidMount(){
    //   fetch('http://localhost:5000/api/connections')
    //   .then(res => res.json())
    //   .then((users)=> this.setState({users},()=> console.log(users)))
  
    // }
  
      render() {
        return (
        <div>
             
           <div className="new_chats">

           <h1>New Chats</h1>

        <ul>
        {/* {this.state.connections.map(user => <li key = {user.name}>{user.name}</li>)} */}
        <li>User name</li>
        </ul>



           </div>
          

       </div>
  
  
  
  
  
        )
      }
    }
  
  export default NewChat ;
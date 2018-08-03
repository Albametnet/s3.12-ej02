import React, { Component } from 'react';
import './App.css';
import UsersProfiles from './components/UsersProfiles';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
    this.getUsers();
    this.getUsers = this.getUsers.bind(this);

  }

getUsers () {
  fetch (
    'https://randomuser.me/api/?results=50'
  )

  .then(function (response){
    return response.json();
  })

  .then((json) => {
    const allUsers= json.results;
    console.log(allUsers)
    this.setState({
      users: allUsers
    })
  })
}

  render() {
    return (
      <div className="App">
      
        {this.state.users.map(person => {
          return (
            <UsersProfiles
              name={person.name.first}
              image={person.picture.medium}
              city={person.location.city}
              age={person.dob.age}
            />
          );
        })}
        
      </div>
    );
  }
}

export default App;

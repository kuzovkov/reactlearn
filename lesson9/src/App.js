import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';
import axios from 'axios';

//curl -X GET 'https://reqres.in/api/users' -H 'x-api-key: reqres_eb517b93477d4fb0971e33ed5044ab5f'

const baseUrl = 'https://reqres.in/api/users';

class App extends React.Component {


  constructor(props){
    super(props);

    axios.get(baseUrl, {
      headers: {
        'x-api-key': 'reqres_eb517b93477d4fb0971e33ed5044ab5f'
      }
    })
    .then(response => {
      console.log(response.data.data);
      this.setState({users: response.data.data.map(user => {
        return {
          id: user.id,
          firstname: user.first_name,
          lastname: user.last_name,
          email: user.email,
          avatar: user.avatar,
        }
      })});
    })
    .catch(error => {
      console.log(error);
    });

    this.state = {
      users:  [],
          }
      this.addUser = this.addUser.bind(this);
      this.deleteUser = this.deleteUser.bind(this);
      this.editUser = this.editUser.bind(this);
  }

  render() {
    return (
      <div className="name">
        <Header title="Список пользователей"/>
        <main>
          <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
        </main>
        <aside>
          <AddUser onAdd={this.addUser}/>
        </aside>
      </div>
    );
  }

  addUser(user){
    // console.log(user);
    let id = this.state.users.length + 1;
    user.id = id;
    this.setState({users: [...this.state.users, user]});
  }

  deleteUser(id){
    this.setState({
      users: this.state.users.filter(user => user.id !== id)
    });
  }

  editUser(user){
    console.log(user);
    let users = this.state.users;
    let index = users.findIndex(u => u.id === user.id);
    console.log(index);
    users[index] = user;
    this.setState({users: []}, () => {this.setState({users: users})});
    console.log(this.state.users);
  } 
} 

export default App
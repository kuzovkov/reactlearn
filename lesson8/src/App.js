import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      users:  [
                {
                  id:1,
                  firstname: "John",
                  lastname: "Doe",
                  age: 20,
                  bio: "I am John",
                  isHappy: true 
                },
                {
                  id:2,
                  firstname: "Jane",
                  lastname: "Doe",
                  age: 25,
                  bio: "I am Jane",
                  isHappy: false 
                },
                {
                  id:3,
                  firstname: "Jack",
                  lastname: "Doe",
                  age: 30,
                  bio: "I am Jack",
                  isHappy: true 
                }
              ],
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
import React from 'react';

class Users extends React.Component {
  users = [
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
  ];
  
  render() {
    if (this.users.length > 0)
      return (
        <div>
            {this.users.map((user) => (<div key={user.id} className="user">
               <h3>{user.firstname} {}{user.lastname}</h3>
                <p>{user.bio}</p>
                <p>{user.isHappy ? "Happy" : "Sad"}</p>
              </div>))}       
        </div>);
    else return (
       <div className="user"></div>
    )
  }
}
 
export default Users
import React from 'react';
import User from './User';

class Users extends React.Component {

  render() {
    if (this.props.users.length > 0)
      return (
        <div>
            {this.props.users.map((user) => (<User onDelete={this.props.onDelete} onEdit={this.props.onEdit} user={user} key={user.id}/>))}       
        </div>);
    else return (
       <div className="user"></div>
    )
  }
}
 
export default Users
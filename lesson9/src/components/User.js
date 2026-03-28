import React from 'react';
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'
import AddUser from './AddUser';

class User extends React.Component {
  user = this.props.user
  constructor(props) {
    super(props);
    this.state = {
      editForm: false
    }
  }
  
  render() {
    return (
      
        <div className="user" key={this.user.id}>
          <IoCloseCircleSharp className="delete-icon" onClick={(e) => this.props.onDelete(this.user.id)}/>
          <IoHammerSharp className="edit-icon" onClick={(e)=> this.setState({editForm: !this.state.editForm})}/>
          <h3>{this.user.firstname} {this.user.lastname}</h3>
          <p><img src={this.user.avatar.replace('https://reqres.in', '')} alt={this.user.firstname} crossOrigin="anonymous"/></p>
          <p>{this.user.email}</p>
          {
            this.state.editForm && 
              <AddUser user={this.user} onAdd={this.props.onEdit}/>
          }
        </div>
    );
  }
}

export default User
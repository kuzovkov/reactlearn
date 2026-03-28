import React from 'react';

class AddUser extends React.Component {
  addUser = {}
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      avatar: '',
    }
  }
  
  componentDidMount(){
    this.fillForm();
  }

  render(){
    return (
      <form id="user-form" ref={(el) => {this.myForm = el}}>
        <input name="firstname" type="text" placeholder="Имя" onChange={(e) => this.setState({firstname: e.target.value})}/>
        <input name="lastname" type="text" placeholder="Фамилия" onChange={(e) => this.setState({lastname: e.target.value})}/>
        <input name="email" type="email" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
        <input name="avatar" type="text" placeholder="URL аватара" onChange={(e) => this.setState({avatar: e.target.value})}/>
        <button type="button" onClick={() => {
            this.addUser={
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            avatar: this.state.avatar,
          }
          if (this.props.user){
            this.addUser.id = this.props.user.id
          }
          this.props.onAdd(this.addUser); this.clearForm();}}>{this.props.user ? 'Изменить' : 'Добавить'}</button>

      </form>
    );
  }

  clearForm(){
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      avatar: '',
    });
    // document.getElementById('user-form').reset();
    this.myForm.reset();
  }

  fillForm(){ 
     console.log(this.props.user);
    if (this.props.user){
      this.setState({
        firstname: this.props.user.firstname,
        lastname: this.props.user.lastname,
        email: this.props.user.email,
        avatar: this.props.user.avatar,
      });
      document.querySelector('#user-form input[name="firstname"]').value=this.props.user.firstname;
      document.querySelector('#user-form input[name="lastname"]').value=this.props.user.lastname;
      document.querySelector('#user-form input[name="email"]').value=this.props.user.email;
      document.querySelector('#user-form input[name="avatar"]').value=this.props.user.avatar;
    }
  }
}

export default AddUser
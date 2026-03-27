import React from 'react';

class AddUser extends React.Component {
  addUser = {}
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      age: 1,
      bio: '',
      isHappy: false
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
        <input name="age" type="number" placeholder="Возраст" onChange={(e) => this.setState({age: e.target.value})}/>
        <textarea name="bio" placeholder="Биография" onChange={(e) => this.setState({bio: e.target.value})}></textarea>
        <label htmlFor="isHappy">Счастлив?</label>
        <input name="isHappy" type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
        <button type="button" onClick={() => {
            this.addUser={
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            age: this.state.age,
            bio: this.state.bio,
            isHappy: this.state.isHappy
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
      age: 1,
      bio: '',
      isHappy: false
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
        age: this.props.user.age,
        bio: this.props.user.bio,
        isHappy: this.props.user.isHappy  
      });
      document.querySelector('#user-form input[name="firstname"]').value=this.props.user.firstname;
      document.querySelector('#user-form input[name="lastname"]').value=this.props.user.lastname;
      document.querySelector('#user-form input[name="age"]').value=this.props.user.age;
      document.querySelector('#user-form textarea[name="bio"]').value=this.props.user.bio;
      document.querySelector('#user-form input[name="isHappy"]').checked=this.props.user.isHappy;
    }
  }
}

export default AddUser
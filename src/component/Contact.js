import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.inputFirstName = React.createRef();
    this.inputLastName = React.createRef();
    this.inputEmail = React.createRef();
    this.inputPhone = React.createRef();
    this.inputMessage = React.createRef();
  }

  //Menghandle submit form
  handleSubmit = event => {
    alert(
      `Hello ${this.inputFirstName.current.value}, Your Message Has Been Send`
    );
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    return (
      <div className='container'>
        <form className='form' onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <br />
          <input
            type='text'
            name='fname'
            ref={this.inputFirstName}
            size='30'
            required
          />
          <br />
          <label>Last Name</label>
          <br />
          <input
            type='text'
            name='lname'
            ref={this.inputLastName}
            size='30'
            required
          />
          <br />
          <label>Email Address</label>
          <br />
          <input
            type='text'
            name='email'
            ref={this.inputEmail}
            size='30'
            required
          />
          <br />
          <label>Phone Number</label>
          <br />
          <input
            type='text'
            name='phone'
            ref={this.inputPhone}
            size='30'
            required
          />
          <br />
          <label>Message</label>
          <br />
          <textarea
            name='message'
            ref={this.inputMessage}
            cols='30'
            required
          ></textarea>
          <br />
          <button className='button1'>Submit</button>
        </form>
      </div>
    );
  }
}

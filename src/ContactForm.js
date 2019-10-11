import React from 'react';
import './ContactForm.css';
import InputElements from "./InputElements";
import Label from "./Label";
import Result from "./Result";
import Button from "./Button";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state={
        name: "",
        email: "",
        password: "",
        address: "",
        number: "",
        resultData: [],
        showResult: false,
        showForm: true
    }
  }
  componentDidMount() {
    document.title = "Contact Form";
  }

  getFieldChangeValues(event) {
    const id = event.nativeEvent.srcElement.id;
    const value = event.target.value;
    if(id === "name") {
      this.setState({
        name: value
      });
    } else if(id === "email") {
      this.setState({
        email: value
      });
    } else if(id === "password") {
      this.setState({
        password: value
      });
    } else if(id === "number") {
      this.setState({
        number: value
      });
    }
  }

  onAddressChange(event) {
    event.persist();
    this.setState({
      address: event.target.value
    })
  }

  onSubmit(clickEvent) {
    if(document.contact.checkValidity()) {
      clickEvent.preventDefault();
      this.setState({
        resultData: [
          {
            label: "Name",
            value: this.state.name
          },
          {
            label: "Email",
            value: this.state.email
          },
          {
            label: "Password",
            value: this.state.password
          },
          {
            label: "Address",
            value: this.state.address
          },
          {
            label: "Phone number",
            value: this.state.number
          }
        ],
        showResult: true,
        showForm: false
      });
    }
  }

  onEdit() {
    this.setState({
      showForm: true,
      showResult: false
    })
  }

  render() {
    return (
      <div className="Contact">
        <h2 className = "title">CONTACT FORM</h2>
        <div className = "container">
          {
            this.state.showForm ? 
              <div className = "contact-form" id="contactform">
                  <form name="contact" id="form">
                      <Label for="name" display="Name"/>
                      <InputElements
                        type="text" id="name" name="name" placeholder="Name goes here.." title="Use only alphabets" required pattern='[a-zA-Z ]+'
                        onChange={this.getFieldChangeValues.bind(this)}
                        value={this.state.name}
                      />
                      
                      <Label for="email" display="Email"/>
                      <InputElements
                        type="email" id="email" name="email" placeholder="Email goes here.." title="Enter valid email" required
                        onChange={this.getFieldChangeValues.bind(this)}
                        value={this.state.email}
                      />

                      <Label for="password" display="Password"/>
                      <InputElements
                        type="password" id="password" name="password" placeholder="Password goes here.." title="Please enter more than 8 characters" minlength="8" maxlength="30" required
                        onChange={this.getFieldChangeValues.bind(this)}
                        value={this.state.password}
                        />

                      <Label for="address" display="Address"/>
                      <textarea className="textarea" id="address" name="address" placeholder="Address.." pattern='[a-zA-Z0-9]+' required onChange={this.onAddressChange.bind(this)}
                      value={this.state.address}
                      />

                      <Label for="number" display="Mobile Number"/>
                      <InputElements
                        type="tel" id="number" name="number" placeholder="Number" pattern="[0-9]{10}" title="Enter 10 digit mobile number" maxlength="10" required
                        onChange={this.getFieldChangeValues.bind(this)}
                        value={this.state.number}
                        />
        
                      <Button id="submit" display="SUBMIT" onClick={this.onSubmit.bind(this)}/>
                  </form>
              </div>
              : null 
          }
            {this.state.showResult ? <Result items={this.state.resultData} onEdit={this.onEdit.bind(this)}/> : null}
        </div>
      </div>
    );
  }
}


export default ContactForm;

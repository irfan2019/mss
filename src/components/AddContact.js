import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    msg:"",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.m_no===""||this.state.msg === ""||this.state.address==="" ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "",m_no:"",address:"",msg:"" });
  };


  
  render() {
  let alertt =(email) =>{
    let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if(re.test(email))
    {
      alert("this is valid email")
      {
        alert("you have successfull entered the details")
      }
    }
    else
    {
      alert("invalid email address");
      {
        alert("the details are not added")
      }
    }

  }
    return (
      <div className="ui main">
        <h2>Add user details</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <input
              type="text"
              name="name"
              placeholder="Name"
              maxLength={25}
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
          <select name="code" id="code">
            <option value="in">India
            </option>
            <option value="US">USA
            </option>
            <option value="EN">England
            </option>
          </select>
            <input
              type="text"
              name="m_no"
              placeholder="Mobile-Number"
              value={this.state.m_no}
              onChange={(e) => this.setState({ m_no: e.target.value })}
            />
          </div>
          <div className="field">
            
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            
            <input
              type="text"
              name="addr"
              placeholder="Address"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          <div className="field">
            
            <input
              type="text"
              name="email"
              
              placeholder="Type of Assistance"
              
              value={this.state.msg}
              onChange={(e) => this.setState({ msg: e.target.value })}
            />
          </div>
          <button type="submit" className="ui button yellow" onClick={alertt} >Send  Message</button>
        </form>
      </div>
      

    );
  }
}

export default AddContact;

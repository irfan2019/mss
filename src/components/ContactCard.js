import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email,msg,m_no,address } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header"><label>name of the user: </label>{name}</div>
        <div><label>mobile_no: </label>{m_no}</div>
        <div><label>Email of the user: </label>{email}</div>
        <div><label>Address of the user:</label>{address}</div>
        <div><label>Type of assistance: </label>{msg}</div>
      </div>
      <button
      type="submit"
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      >Delete</button>
    </div>
  );
};

export default ContactCard;

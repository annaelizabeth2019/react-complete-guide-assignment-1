import React from 'react'

const UserInput = (props) => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.changed} 
      value={props.username} 
      style={{ "color": "gray", padding:"15px", "margin":"20px", fontSize:"15px" }}
      />
    </div>
  );
}

export default UserInput;
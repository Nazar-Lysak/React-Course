import React from 'react';

const User = (props) => {
  const {email, first_name, second_name, phone, sex} = props.userData;

  return (
    <li
      style={sex === 'male' ? {backgroundColor: 'blue', color: 'yellow'} : {backgroundColor: 'pink', color: 'black'}}
      className="card-user"
    >
      <h2 style={{textAlign: 'center'}}>{`${first_name} ${second_name}`}</h2>
      <p>{sex}</p>
      <div>
        <p>
          <span>Email: </span>
          {email}
        </p>
        <p>
          <span>Phone: </span>
          {phone}
        </p>
      </div>
    </li>
  );
};

export default User;

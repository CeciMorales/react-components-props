import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullname, age, isAvailable, icon, sayHi }) => {
  return (
    <div className="profile">
      <h3>Profile</h3>
      <p>
        <b>fullname:</b> {fullname.firstName} - {fullname.lastName}
      </p>
      <p>
        <b>age:</b> {age}
      </p>
      <p>
        <b>isAvailable:</b> {isAvailable ? "true" : "false"}
      </p>
      <div>
        <b>icon:</b> {icon}
      </div>
      <button className="button" onClick={sayHi}>
        Say Hi
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullname: {},
  age: 10,
  isAvailable: false,
  sayHi: () => {
    console.log("hello from default props");
  },
  icon: <span>:(</span>,
};

Profile.propTypes = {
  fullname: PropTypes.object,
  age: PropTypes.number,
  isAvailable: PropTypes.bool,
  sayHi: PropTypes.func,
  icon: PropTypes.element,
};

export default Profile;

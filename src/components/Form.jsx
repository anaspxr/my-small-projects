import React, { useEffect, useState } from "react";

function Form() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [newUser, setNewUser] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser) {
      if (Object.keys(validateSignup(formValues)).length === 0) {
      } else {
        setFormErrors(validateSignup(formValues));
      }
    } else {
      setFormErrors(validateLogin(formValues));
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit)
      console.log(formValues);
  }, [formErrors]);

  const validateSignup = (values) => {
    const errors = {};

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!values.username) errors.username = "Your name is required!!";

    if (!values.email) errors.email = "email is required!!";
    else if (!regex.test(values.email)) {
      errors.email = "Enter a valid email";
    }

    if (!values.password) errors.password = "password is required!!";
    else if (values.password.length < 8)
      errors.password = "Password must contain at least 8 characters";

    if (
      values.password &&
      values.password.length >= 8 &&
      values.confirmpass !== values.password
    )
      errors.confirmpass = "passwords mismatch!!";
    return errors;
  };

  const validateLogin = (values) => {};

  return (
    <div className="content-container form-container">
      {loggedIn ? (
        <Profile username={formValues.username} email={formValues.email} />
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <h1>{newUser ? "Sign Up" : "Login"}</h1>
          {newUser && (
            <div className="field">
              <label htmlFor="username">Name</label>
              <input
                name="username"
                id="username"
                type="text"
                placeholder="Your full name"
                value={formValues.username}
                onChange={handleChange}
              />
              <p className="form-errors">{formErrors.username}</p>
            </div>
          )}
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="youremail@gmail.com"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="form-errors">{formErrors.email}</p>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="form-errors">{formErrors.password}</p>
          </div>
          {newUser && (
            <div className="field">
              <label htmlFor="confirmpass">Confirm Password</label>
              <input
                name="confirmpass"
                id="confirmpass"
                type="password"
                placeholder="Enter the same password"
                onChange={handleChange}
              />
              <p className="form-errors">{formErrors.confirmpass}</p>
            </div>
          )}
          {newUser ? <button>Sign Up</button> : <button>Log In</button>}
          <div className="bottom-container">
            {newUser ? (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setNewUser(false);
                  }}
                >
                  Login
                </span>{" "}
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    setNewUser(true);
                  }}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

function Profile(props) {
  return (
    <div className="profile">
      <h1>Your Profile</h1>
      <p>
        Name: <span>{props.username}</span>
      </p>
      <p>
        Email:<span>{props.email}</span>
      </p>
    </div>
  );
}

export default Form;

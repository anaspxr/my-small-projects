import React, { useEffect, useState } from "react";
import Info from "./Info";

function Form() {
  const localData = JSON.parse(localStorage.getItem("users"));
  const [currentUsers, setCurrentUsers] = useState(
    localData ? [...localData] : []
  );
  const [loggedUser, setLoggedUser] = useState({});
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [newUser, setNewUser] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newUser ? validateSignup(formValues) : validateLogin(formValues);
  };

  const validateSignup = (values) => {
    const errors = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
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

    if (Object.keys(errors).length === 0) {
      for (let x of currentUsers) {
        if (x.email === formValues.email) {
          errors.email = "This email is already registered";
        }
      }
    }

    if (Object.keys(errors).length === 0) {
      const newUserObj = {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      };
      setCurrentUsers([...currentUsers, newUserObj]);
      setNewUser(false);
      setFormValues(initialValues);
    }
    setFormErrors(errors);
  };

  const validateLogin = (values) => {
    const errors = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!values.email) errors.email = "email is required!!";
    else if (!regex.test(values.email)) {
      errors.email = "Enter a valid email";
    }
    if (!values.password) errors.password = "enter password";

    if (Object.keys(errors).length === 0) {
      for (let user of currentUsers) {
        if (
          user.email === formValues.email &&
          user.password === formValues.password
        ) {
          setLoggedUser({ username: user.username, email: user.email });
          setLoggedIn(true);
          setFormValues(initialValues);
          break;
        } else {
          errors.login = "Invalid Credentials..";
        }
      }
    }
    setFormErrors(errors);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(currentUsers));
  }, [currentUsers]);

  return (
    <div className="content-container ">
      <div className="form-container">
        {loggedIn ? (
          <div className="profile">
            <p>Logged in Successfully</p>
            <h1>Your Profile</h1>
            <p>
              Name: <span>{loggedUser.username}</span>
            </p>
            <p>
              Email:<span>{loggedUser.email}</span>
            </p>
            <p
              className="form-link"
              onClick={() => {
                setLoggedIn(false);
              }}
            >
              Logout
            </p>
          </div>
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
            <p className="form-errors">{formErrors.login}</p>
            <div className="bottom-container">
              {newUser ? (
                <p>
                  Already have an account?{" "}
                  <span
                    className="form-link"
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
                    className="form-link"
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
      <Info />
    </div>
  );
}

export default Form;

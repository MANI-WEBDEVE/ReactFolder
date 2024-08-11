import { useState } from "react";

const RegisterForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    const data = setUser((prev) => {
      return {...prev, [name]: value};
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="first Name"
            name="firstName"
            value={user.firstName}
            onChange={handleForm}
          />
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleForm}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleForm}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="pssword"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleForm}
          />
        </div>
        <div>
          <label htmlFor="Phone Number">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Phone Number"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleForm}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default RegisterForm;

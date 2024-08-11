import React, {useState} from "react";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setUserData((pretask) => {
      return { ...pretask, [name]: value };
    });
  };


  const handelGetData = async (e) => {
    e.preventDefault()
    let data = await userData
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handelGetData}>
        <div>
          <label htmlFor="Email"> Email</label>
          <input
            type="email"
            id="Email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleLogin}
          />
        </div>
        <div>
          <label htmlFor="Password"> Password</label>
          <input
            type="password"
            id="Password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleLogin}
          />
        </div>
        <button>Login </button>
      </form>
    </>
  );
};

export default LoginForm;

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", userName: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  //useEffect hook use
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  //password eye icon change function
  const handleEvent = () => {
    // alert("hello");
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icon/icons8-closed-eye-64.png")) {
      passwordRef.current.type = "password";
      ref.current.src = "icon/icons8-eye-30.png";
    } else {
      ref.current.src = "icon/icons8-closed-eye-64.png";

      passwordRef.current.type = "text";
    }
  };
  ///////////////////////////////////

  //! password save function
  const savePassword = () => {
    if(form.site.length > 3 && form.userName.length > 3 && form.password.length > 4){
      // console.log(form);
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
        );
        // console.log([...passwordArray, form]);
        toast("🔑 Password saved " , {
          theme: "dark",
        });
      }
      else{
        toast("Error:😡 Password Not Saved", {
          theme: "light",
        });
      }
    }
  ///////////////////////////

  //handle change function
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  //! copy save function logic
  const copySave = (text) => {
    toast("📝 Copied to Clipboard " + text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  //! Delete function logic
  const deletePassword = (id) => {
    // console.log(`this is delete id:${id}`)
    let c = confirm("❗ do you want delete this password")
    if (c) {
      setPasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords",
      JSON.stringify(passwordArray.filter(item=> item.id!== id))
      )
      
    }
  }
  //! Edit function login
  const editPassword = (id) => {
    console.log(`this is edit id:${id}`)
    setform(passwordArray.filter(item=>item.id === id)[0])
    setPasswordArray(passwordArray.filter(i=> i.id !== id))
    
  }
  

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="p-2 md:p-0 md:myContainer min-h-[78.8vh] ">
       
        <h1 className="text-4xl text-center font-bold ">
          {" "}
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">Mag/&gt;</span>
        </h1>
        <p className="text-green-700 text-lg text-center ">
          Your own password Manager{" "}
        </p>
        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            onChange={handleChange}
            value={form.site}
            className="rounded-full border border-green-600 p-4 py-1 w-2/3"
            type="text"
            name="site"
            id=""
            placeholder="Enter the website URL"
          />
          <div className="my-3">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 ">
              <input
                onChange={handleChange}
                value={form.userName}
                className="rounded-full text-black border  border-green-600 w-full p-4 py-1"
                type="text"
                name="userName"
                id=""
                placeholder="Enter Username"
              />
              <div className="relative">
                <input
                  onChange={handleChange}
                  value={form.password}
                  className="rounded-full text-black border border-green-600 p-4 py-1 w-full "
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  ref={passwordRef}
                />
                <span
                  className="absolute top-0.5 right-0 px-2"
                  onClick={handleEvent}
                >
                  <img
                    ref={ref}
                    src="icon/icons8-eye-30.png"
                    alt=""
                    width="31px"
                  />
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-500 rounded-full w-fit hover:bg-green-300 hover:cursor-pointer px-3 py-1 gap-3 border-2 border-black"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwordsTable">
          <h2 className="text-center font-bold text-xl">Your Password</h2>
          {passwordArray.length === 0 && <div>No Password your library</div>}
          {passwordArray.length != 0 && (
            <table className="table- w-full rounded-md overflow-hidden">
              <thead className="bg-green-600 text-white ">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">User Name</th>
                  <th className="py-2">Passwords</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center w-32 py-2 ">
                        <div className="flex gap-3 justify-center items-center ">
                          <a href={item.site} target="_blank">
                            {" "}
                            {item.site}
                          </a>
                          <div
                            onClick={() => {
                              copySave(item.site);
                            }}
                          >
                            {" "}
                            <svg
                              className="cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="28"
                              height="28"
                              color="#000000"
                              fill="none"
                            >
                              <path
                                d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td className="text-center w-32 py-2">
                        <div className="flex justify-center items-center">
                          {item.userName}
                          <div
                            onClick={() => {
                              copySave(item.userName);
                            }}
                          >
                            {" "}
                            <svg
                              className="cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="28"
                              height="28"
                              color="#000000"
                              fill="none"
                            >
                              <path
                                d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td className="text-center w-32 py-2">
                        <div className="flex justify-center items-center">
                          {item.password}
                          <div
                            onClick={() => {
                              copySave(item.password);
                            }}
                          >
                            <svg
                              className="cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="28"
                              height="28"
                              color="#000000"
                              fill="none"
                            >
                              <path
                                d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td className="text-center w-32 py-2">
                        <span className="cursor-pointer mx-1" onClick={()=>editPassword(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/ghhwiltn.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#08a88a"
                            style={{ width: "35px", height: "35px" }}
                          ></lord-icon>
                        </span>
                        <span className="cursor-pointer mx-1"  onClick={()=>deletePassword(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/drxwpfop.json"
                            trigger="hover"
                            style={{ width: "35px", height: "35px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
//! 1:30:00

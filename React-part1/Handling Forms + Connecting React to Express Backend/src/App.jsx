import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const delay =(d) => {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async(data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {method: "POST"})

    let res = await r.text()
    console.log(data, res)
    // if (data.userName !== "inam") {
    //   setError("myForm", {message:"form is not submit in loacl data please try again"})
    //   console.log(data);
    // }
  };
  return (
    <>
    {isSubmitting && <div>Loading....</div>}
      <div className="container" onSubmit={handleSubmit(onSubmit)}>
        <form action="">
          <input  {...register("userName", {required:{value: true, message: "please enter the username"}, minLength: {value: 4, message:"Minimum 4 words required"}, maxLength: {value: 8, message:"Maximum 8 later required"} })} type="text" name="userName" id="" />
          {errors.userName && <div className="red">{errors.userName.message}</div>}
          <br />
          <input
            {...register("password", {minLength:{value:8, message:"please max character 8"}})}
            type="password"
            name="password"
            id=""
          />
          {errors.password && <div className="red">{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myForm && <div>{errors.myForm.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;

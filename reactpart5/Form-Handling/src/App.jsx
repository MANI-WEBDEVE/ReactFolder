import ContactForm from "./components/ContactForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <>
     <div className="mainDiv">
     <section>
        <h1>Register From</h1>
        <h4>Please fill in the form to create an account</h4>
        <RegisterForm />
      </section>
      <section>
        <h1>Login Form</h1>
        <h4>Please fill in the form to login</h4>
        <LoginForm/>
      </section>
      <section>
        <h1>Contact Form</h1>
        <p>Please Any One Douth Drop your Message</p>
        <ContactForm/>
      </section>
     </div>
    </>
  );
}

export default App;

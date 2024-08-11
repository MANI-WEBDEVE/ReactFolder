import React, {useState} from 'react'

const ContactForm = () => {
    const [userContactData, setUserContactData] = useState({
        userName: '',
        email: '',
        textArea: ''
    })

    //* const [userName, setUserName] = useState('')
    //* const [email, setEmail] = useState('')
    //* const [textArea, setTextArea] = useState('')

    //* const handleConatactData = (e) => {
    //*         e.preventDefault()
    //*     const contactData = {
    //*         userName: userName,
    //*         email: email,
    //*         textArea: textArea
    //*     }
    //*     console.log(contactData)
    //* } 

    const handleContactForm = (e) => {
        const {name, value } = e.target;
        setUserContactData((preTask) => {
            return {...preTask, [name]: value}
        })
    } 

    const submitContactForm = (e) => {
        e.preventDefault()
        console.log(userContactData)
    }   

  return (
    <>
      <form onSubmit={submitContactForm} >
        <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" placeholder='User Name'  value={userContactData.userName} onChange={handleContactForm}/>
        </div>
        <div>
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" placeholder='Email' value={userContactData.email} onChange={handleContactForm}/>
        </div>
        <div>
            <label htmlFor="textarea">Message</label>
            <textarea name="textArea" placeholder='Drop your Message here' rows ='6' value={userContactData.textArea} onChange={handleContactForm}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default ContactForm

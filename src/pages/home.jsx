import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


export const Home = () => {
  // state to store email and password. initialize as empty string, then include the setemail / pass function in input to add to it
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  // state for sign up
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  // this will swtich the state to true or false when it's called
  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
  }

  //signup function
  const handleSignUp = () => {
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
     })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
     })
  }

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return(
    <section>
      <h2>Homepage</h2>
      <form>
        {/* below changes when clicking 'log in' */}
        { isSignUpActive && <legend>Sign Up</legend>}
        { !isSignUpActive && <legend>Sign In</legend>}
        <fieldset>
          <ul>
            <li>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" onChange={handleEmailChange} />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={handlePasswordChange} />
            </li>  
          </ul>
          {isSignUpActive && <button type="button" onClick={handleSignUp} >Sign Up</button>}
          {!isSignUpActive && <button type="button">Sign In</button>}
        </fieldset>
        {isSignUpActive && <a onClick={handleMethodChange}>Login</a>}
        {!isSignUpActive && <a onClick={handleMethodChange}>Create an accout</a>}
      </form>
    </section>
  )
}
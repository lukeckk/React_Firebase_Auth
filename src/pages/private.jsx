// prevent use from accessing private page wihtout logging in

import { signOut } from "firebase/auth"
import { auth } from "../firebase"

export const Private = () => {
  const handleSignOut = () => {
    signOut(auth)
    .then(() => console.log('user signed out'))
    .catch((error) => console.log(error))
  }
  return(
    <section>
      <h2>Private page</h2>
      <button onClick={handleSignOut}>Sign out</button>
    </section>
  )
}
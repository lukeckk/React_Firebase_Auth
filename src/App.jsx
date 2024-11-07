import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Private } from './pages/private';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import { useEffect, useState } from 'react';
import { ProtectedRoute } from './components/protectedRoute';
import { auth } from './firebase';

function App() {
  // useState hook ? useEffect ?? can be done by redux as well
  const [user, setUser] = useState(null);

  const [isFetching, setIsFetching] = useState(true);
  

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        //set user if it exist, set to false
        setUser(user);
        setIsFetching(false)
        return;
      }
        //else set to null
        setUser(null)
        setIsFetching(false)
    });
    return () => unsubsribe()
  }, []);

  if(isFetching) {
    return <h1>Loading...</h1>
  }

  // setting home.jsx as default root using react router
  return(
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home user={user}></Home>} ></Route>
      <Route index path='/private' element={<ProtectedRoute user={user}><Private></Private></ProtectedRoute>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

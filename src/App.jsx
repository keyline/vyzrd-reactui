import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAppLoad } from './features/auth/authSlice'
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch()
  const auth = useSelector((state)=> state.auth)
  const {showSplash}=auth

   useEffect(() => {
    dispatch(onAppLoad());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {(!showSplash) && (
        <AppRoutes />
      )}
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App

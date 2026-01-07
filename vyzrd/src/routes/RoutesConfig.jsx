import Home from "../pages/Home/Home"
import Login from "../pages/AuthPage/Login/Login"
import OtpVerify from "../pages/AuthPage/OtpVerify/OtpVerify"

export const RoutePath = {
    LOGIN: '/',
    HOME: '/home',
    OTP_VERIFY: '/otpverify',
   
}

const routes=[{
  path:RoutePath.LOGIN,
  element:<Login/>,
  authRequired:false,
  title:"Login"
},
{
  path:RoutePath.OTP_VERIFY,
  element:<OtpVerify/>,
  authRequired:false,
  title:"OtpVerify"
},
{
  path:RoutePath.HOME,
  element:<Home/>,
  authRequired:false,
  title:"Home"
}]

export default routes
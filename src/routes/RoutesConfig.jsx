import Home from "../pages/Home/userDashboard/Home"
import Login from "../pages/AuthPage/Login/Login"
import OtpVerify from "../pages/AuthPage/OtpVerify/OtpVerify"
import ESGEffectiveness from "../pages/Home/middelPage/ESGEffectiveness"
import ClimateRisk from "../pages/Home/middelPage/ClimateRisk"
import NextLD from "../pages/Home/middelPage/NextLD"

export const RoutePath = {
    LOGIN: '/',
    HOME: '/userDashboard',
    OTP_VERIFY: '/otpverify',

    ESG: "/userDashboard/parentVerticalTab1",
    CLIMATE: "/userDashboard/parentVerticalTab2",
    NEXT: "/userDashboard/parentVerticalTab3",
   
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
  title:"Home",
  children: [
      {
        index: true, // ✅ default page when /userDashboard opens
        element: <ESGEffectiveness />,
      },
      {
        path: "parentVerticalTab1",
        element: <ESGEffectiveness />,
      },
      {
        path: "parentVerticalTab2",
        element: <ClimateRisk />,
      },
      {
        path: "parentVerticalTab3",
        element: <NextLD />,
      },
    ],
}]

export default routes
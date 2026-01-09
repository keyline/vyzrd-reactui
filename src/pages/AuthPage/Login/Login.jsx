import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { RoutePath } from "../../../routes/RoutesConfig";
import AuthLayouts from "../../../layouts/AuthLayouts";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../../../features/auth/authSlice";


export default function LoginForm() {
  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {isLoading}=useSelector((state) => state.auth);

  const validate = () => {
    let temp = {};

    if (!userid.trim()) temp.userid = "Please enter your organisation ID.";
    if (!email.trim()) temp.email = "Please enter your email ID.";
    if (!password.trim()) temp.password = "Please enter your password.";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleProceed = async () => {
    setErrors({});
    setSuccess("");
    if (!validate()) return

    var data={
      email:email,
      userid:userid,
      password:password
    }
    
    const res=await dispatch(onLogin(data))
      if (onLogin.rejected.match(res)) {
        
        
      setErrors((err) => ({
        ...err,
        apiErr: res.payload,

      }));
      
      return;
    }

    
    setSuccess(res.payload.message);

    // navigate to OTP page
    navigate(RoutePath.VERIFY_OTP);
    
  };

  return (
    <AuthLayouts>
    <section className="flex items-center justify-center">
      <div className="login_box">

        <h1 className="login_heading">
          Login for registered users
        </h1>

        <h2 className="not_registered">
          Not registered?{" "}
          <a
            href="https://uat.vyzrd.com/contact"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            Contact Us
          </a>
        </h2>

        <div className="login_form">

          <Input
            placeholder="Organisation ID"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            error={errors.userid}
            onClick={null}
            label='test2'
          />
          

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          {errors.apiErr && (
              <p className="text-red-500 text-sm pt-2">
                {errors.apiErr}
              </p>
            )}

            {success && (
              <p className="text-green-600 text-sm pt-2">
                {success}
              </p>
            )}

          <div className="flex flex-wrap justify-start items-center pt-3">
            <Button
              type="button"
              text="Proceed"
              onClick={handleProceed}
            />

            <Link to="/forgotpassword" className="forgot_password_link">
              Forgot password
            </Link>
          </div>
        </div>
      </div>
    </section>
    </AuthLayouts>
  );
}

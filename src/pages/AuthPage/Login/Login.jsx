import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { RoutePath } from "../../../routes/RoutesConfig";
import AuthLayouts from "../../../layouts/AuthLayouts";


export default function LoginForm() {
  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const navigate=useNavigate()

  const validate = () => {
    let temp = {};

    if (!userid.trim()) temp.userid = "Please enter your organisation ID.";
    if (!email.trim()) temp.email = "Please enter your email ID.";
    if (!password.trim()) temp.password = "Please enter your password.";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleProceed = (e) => {
    e.preventDefault();

    setSuccess("");

    if (!validate()) return;

    navigate(RoutePath.OTP_VERIFY);
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

        <form className="login_form">

          <Input
            placeholder="Organisation ID"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            error={errors.userid}
            onClick={null}
            label='test2'
          />
          

          <Input
            
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

          <div className="flex flex-wrap justify-start items-center pt-3">
            <Button
              text="Proceed"
              onClick={handleProceed}
            />

            <Link to="/forgotpassword" className="forgot_password_link">
              Forgot password
            </Link>
          </div>

          {success && (
            <p className="text-green-600 text-sm text-center pt-2">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
    </AuthLayouts>
  );
}

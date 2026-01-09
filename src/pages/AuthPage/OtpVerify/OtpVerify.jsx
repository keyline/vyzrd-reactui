import { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../routes/RoutesConfig";
import AuthLayouts from "../../../layouts/AuthLayouts";
import { useDispatch, useSelector } from "react-redux";
import { onOTPVerify } from "../../../features/auth/authSlice";


export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const [timeLeft, setTimeLeft] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [success, setSuccess] = useState("");

  const navigate=useNavigate()
  const dispatch = useDispatch();

const { otpPayload, isLoading } = useSelector(
  (state) => state.auth
);

useEffect(() => {
  if (!otpPayload) {
    navigate(RoutePath.LOGIN);
  }
}, [otpPayload, navigate]);


  // Timer logic
  useEffect(() => {
    if (timeLeft === 0) {
      setResendDisabled(false);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  

  const handleSubmit = async () => {
  
  setError("");
  setSuccess("");

  if (!otp.trim()) {
    setError("This field is required.");
    return;
  }

  if (!otpPayload) {
    setError("Session expired. Please login again.");
    navigate(RoutePath.LOGIN);
    return;
  }

  const payload = {
    otp,
    email: otpPayload.email,
    userid: otpPayload.userid,
    password: otpPayload.password, //  PLAIN PASSWORD
  };

  const res = await dispatch(onOTPVerify(payload));

  if (onOTPVerify.rejected.match(res)) {
    setError(res.payload || "Invalid OTP");
    return;
  }

  setSuccess(res.payload.message);
  navigate(RoutePath.HOME);
};


  const handleResend = () => {
    setOtp("");
    setError("");
    setSuccess("");
    setTimeLeft(60);
    setResendDisabled(true);
  };

  return (
    <AuthLayouts>
    <section className="authenticate_box_form">

      <div className="otp_box">

        <p>
          Enter OTP received in your email id
        </p>

        <div className="space-y-3">

          <Input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            
            //error={error}
          />

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}


          <div className="flex justify-start gap-0 pt-2">

            <Button
              type="button"
              text="RESEND"
              onClick={handleResend}
              disabled={resendDisabled}
            />

            <Button
              type="button"
              text="SUBMIT"
              onClick={handleSubmit}
            />

          </div>

          <p className="text-[12px] mt-3">
            Time remaining:{" "}
            {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
            {String(timeLeft % 60).padStart(2, "0")}
          </p>

          {success && (
            <p className="text-green-600 text-sm text-center">
              {success}
            </p>
          )}
        </div>
      </div>
    </section>
    </AuthLayouts>
  );
}

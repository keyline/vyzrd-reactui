import { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../routes/RoutesConfig";
import AuthLayouts from "../../../layouts/AuthLayouts";


export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const [timeLeft, setTimeLeft] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [success, setSuccess] = useState("");

  const navigate=useNavigate()

  // Timer logic
  useEffect(() => {
    if (timeLeft === 0) {
      setResendDisabled(false);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!otp.trim()) {
      setError("This field is required.");
      return;
    }

    setError("");
    navigate(RoutePath.HOME)
  };

  const handleResend = () => {
    setOtp("");
    setError("");
    setSuccess("");
    setTimeLeft(30);
    setResendDisabled(true);
  };

  return (
    <AuthLayouts>
    <section className=" flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-lg p-10 w-[420px]">

        <p className="text-center font-semibold mb-4">
          Enter OTP received in your email id
        </p>

        <form className="space-y-3">

          <Input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            
            error={error}
          />

          <div className="flex justify-center gap-4 pt-2">

            <Button
              text="RESEND"
              onClick={handleResend}
              disabled={resendDisabled}
            />

            <Button
              text="SUBMIT"
              onClick={handleSubmit}
            />

          </div>

          <p className="text-xs mt-3">
            Time remaining:{" "}
            {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
            {String(timeLeft % 60).padStart(2, "0")}
          </p>

          {success && (
            <p className="text-green-600 text-sm text-center">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
    </AuthLayouts>
  );
}

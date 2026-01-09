import api from "./network";

export default class Apis {
  static signin = (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("userid", data.userid);
    formData.append("password", data.password);

    return api.post("auth/login", formData);
  };

  static signin_otp_verify = (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("userid", data.userid);
    formData.append("password", data.password);
    formData.append("otp", data.otp);

    return api.post("auth/verify-otp", formData);
  };
}
